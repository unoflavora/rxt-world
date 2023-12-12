-- CreateTable
CREATE TABLE "MarketData" (
    "id" SERIAL NOT NULL,
    "market" TEXT NOT NULL,
    "spread" DOUBLE PRECISION NOT NULL,
    "dailyVolume" INTEGER NOT NULL,
    "lastTraded" TIMESTAMP(3) NOT NULL,
    "lastUpdated" TIMESTAMP(3) NOT NULL,
    "tradeUrl" TEXT NOT NULL,

    CONSTRAINT "MarketData_pkey" PRIMARY KEY ("id")
);
