/*
  Warnings:

  - You are about to alter the column `status` on the `order` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.
  - You are about to alter the column `status` on the `userpayment` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `order` MODIFY `status` ENUM('shipped', 'cancelled', 'declined', 'refunded', 'partially_refunded') NOT NULL;

-- AlterTable
ALTER TABLE `userpayment` MODIFY `status` ENUM('initiate', 'success', 'failled', 'pending', 'refund_intiate', 'refunded') NOT NULL;
