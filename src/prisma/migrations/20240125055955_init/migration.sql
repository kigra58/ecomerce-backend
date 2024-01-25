-- DropIndex
DROP INDEX `Product_title_key` ON `product`;

-- AlterTable
ALTER TABLE `product` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
