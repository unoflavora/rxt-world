/*
  Warnings:

  - A unique constraint covering the columns `[exchangeId]` on the table `MarketData` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `exchangeId` to the `MarketData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MarketData" ADD COLUMN     "exchangeId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Exchange" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Exchange_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MarketData_exchangeId_key" ON "MarketData"("exchangeId");

-- AddForeignKey
ALTER TABLE "MarketData" ADD CONSTRAINT "MarketData_exchangeId_fkey" FOREIGN KEY ("exchangeId") REFERENCES "Exchange"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
