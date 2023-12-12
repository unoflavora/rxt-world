-- DropForeignKey
ALTER TABLE "StockPrice" DROP CONSTRAINT "StockPrice_id_fkey";

-- AlterTable
ALTER TABLE "StockPrice" ADD COLUMN     "seriesId" INTEGER;

-- AddForeignKey
ALTER TABLE "StockPrice" ADD CONSTRAINT "StockPrice_seriesId_fkey" FOREIGN KEY ("seriesId") REFERENCES "Series"("id") ON DELETE SET NULL ON UPDATE CASCADE;
