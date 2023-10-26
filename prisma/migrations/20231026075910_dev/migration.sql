-- CreateTable
CREATE TABLE "Prices" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Prices_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StockPrice" ADD CONSTRAINT "StockPrice_id_fkey" FOREIGN KEY ("id") REFERENCES "Prices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
