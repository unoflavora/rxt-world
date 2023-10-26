/*
  Warnings:

  - The `data` column on the `StockPrice` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "StockPrice" DROP COLUMN "data",
ADD COLUMN     "data" DOUBLE PRECISION[];
