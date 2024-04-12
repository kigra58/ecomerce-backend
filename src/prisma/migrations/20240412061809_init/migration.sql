/*
  Warnings:

  - Changed the type of `address_type` on the `UserAddress` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "AddressType" AS ENUM ('home', 'work', 'other');

-- AlterTable
ALTER TABLE "UserAddress" DROP COLUMN "address_type",
ADD COLUMN     "address_type" "AddressType" NOT NULL,
ALTER COLUMN "mobile" SET DATA TYPE TEXT;
