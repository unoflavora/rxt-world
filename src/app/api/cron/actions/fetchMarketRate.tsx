import prisma from "@/lib/db/prisma";
import { Exchange, MarketData } from "@prisma/client";
import ExchangeType from "../types/Exchange";

export default async function fetchMarketRate() {
  const exchanges = ["lbank", "coinw", "probit", "digifinex", "bitmart"];
  type MarketExchangeData = Exchange & { data: MarketData | null };

  const data = exchanges.map((exchange, i) => {
    return new Promise<MarketExchangeData>(async (resolve, reject) => {
      var exchangeDb: MarketExchangeData;

      const res = await fetch(
        `https://api.coingecko.com/api/v3/exchanges/${exchange}/tickers?coin_ids=rimaunangis`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
          cache: "no-store",
        }
      );

      const exchangeData = (await res.json()) as ExchangeType & {
        error?: string;
      };

      if (exchangeData.error != null) {
        reject(exchangeData.error);
        return;
      }

      try {
        exchangeDb = await prisma.exchange.findFirstOrThrow({
          where: { id: exchange },
          include: { data: true },
        });
      } catch (e) {
        var newExchange = await prisma.exchange.create({
          data: {
            id: exchange,
          },
        });

        exchangeDb = { ...newExchange, data: null };
      }

      try {
        const ticker = exchangeData.tickers[0];
        const convertedData = {
          lastTraded: ticker.last_traded_at,
          lastUpdated: ticker.last_fetch_at,
          tradeUrl: ticker.trade_url,
          spread: ticker.bid_ask_spread_percentage,
          dailyVolume: ticker.converted_volume.usd,
        };

        if (exchangeDb.data == null) {
          await prisma.marketData.create({
            data: {
              ...convertedData,
              exchange: { connect: exchangeDb },
            },
          });
        } else {
          await prisma.marketData.update({
            where: {
              id: exchangeDb.data.id,
            },
            data: {
              ...convertedData,
            },
          });
        }
      } catch (e) {
        reject(e);
      }

      var finalData = await prisma.exchange.findFirstOrThrow({
        where: { id: exchange },
        include: { data: true },
      });

      resolve(finalData);
    });
  });

  return await Promise.all(data);
}
