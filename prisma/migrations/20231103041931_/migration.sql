/*
  Warnings:

  - You are about to drop the column `exchangeId` on the `MarketData` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `MarketData` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[exchangeName]` on the table `MarketData` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `exchangeName` to the `MarketData` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MarketData" DROP CONSTRAINT "MarketData_exchangeId_fkey";

-- DropIndex
DROP INDEX "MarketData_exchangeId_key";

-- AlterTable
ALTER TABLE "MarketData" DROP COLUMN "exchangeId",
DROP COLUMN "name",
ADD COLUMN     "exchangeName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "MarketData_exchangeName_key" ON "MarketData"("exchangeName");

-- AddForeignKey
ALTER TABLE "MarketData" ADD CONSTRAINT "MarketData_exchangeName_fkey" FOREIGN KEY ("exchangeName") REFERENCES "Exchange"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
