/*
  Warnings:

  - You are about to drop the `Prices` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "StockPrice" DROP CONSTRAINT "StockPrice_id_fkey";

-- DropTable
DROP TABLE "Prices";

-- CreateTable
CREATE TABLE "Series" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Series_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StockPrice" ADD CONSTRAINT "StockPrice_id_fkey" FOREIGN KEY ("id") REFERENCES "Series"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
