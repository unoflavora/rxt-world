import prisma from "@/lib/db/prisma";
import { Exchange, MarketData } from "@prisma/client";
import ExchangeType from "../types/Exchange";

export default async function fetchMarketRate() {
  const exchanges = ["lbank", "coinw", "probit", "digifinex", "bitmart"];
  type MarketExchangeData = Exchange & { data: MarketData | null };

  const data = await Promise.all(
    exchanges.map((exchange, i) => {
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

        const resExchange = await (
          await fetch(
            `https://api.coingecko.com/api/v3/exchanges/${exchange}`,
            {
              method: "GET",
              headers: {
                accept: "application/json",
              },
              cache: "no-store",
            }
          )
        ).json();

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
            price: ticker.last,
            lastTraded: ticker.last_traded_at,
            lastUpdated: ticker.last_fetch_at,
            tradeUrl: ticker.trade_url,
            spread: ticker.bid_ask_spread_percentage,
            dailyVolume: ticker.converted_volume.usd,
            logoUrl: resExchange.image,
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
    })
  );

  const totalVolume = data.reduce((prev, curr, i) => {
    if (curr.data != null) return prev + curr.data?.dailyVolume;
    return prev;
  }, 0);

  const finalData = data.map((d) => {
    return new Promise<MarketExchangeData>(async (res, rej) => {
      try {
        var updatedData = await prisma.exchange.update({
          where: { id: d.id },
          include: { data: true },
          data: {
            data: {
              update: {
                percentageVolume:
                  parseFloat((d.data!.dailyVolume / totalVolume).toFixed(4)) *
                  100,
              },
            },
          },
        });

        res(updatedData);
      } catch (e) {
        rej(e);
      }
    });
  });

  return await Promise.all(finalData);
}
