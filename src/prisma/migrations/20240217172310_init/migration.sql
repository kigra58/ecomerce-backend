/*
  Warnings:

  - You are about to drop the column `name` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `ProductCategory` table. All the data in the column will be lost.
  - You are about to drop the column `parent_category` on the `ProductCategory` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `ProductCategory` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `title` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "ProductCategory_title_key";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "name",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "parent_category" TEXT,
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ProductCategory" DROP COLUMN "description",
DROP COLUMN "parent_category",
DROP COLUMN "title";

-- CreateIndex
CREATE UNIQUE INDEX "Category_title_key" ON "Category"("title");
