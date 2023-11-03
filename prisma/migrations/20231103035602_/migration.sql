/*
  Warnings:

  - You are about to drop the column `market` on the `MarketData` table. All the data in the column will be lost.
  - Added the required column `name` to the `MarketData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MarketData" DROP COLUMN "market",
ADD COLUMN     "name" TEXT NOT NULL;
