-- CreateTable
CREATE TABLE "StockPrice" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "data" TEXT[],

    CONSTRAINT "StockPrice_pkey" PRIMARY KEY ("id")
);
