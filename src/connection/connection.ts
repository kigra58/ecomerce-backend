import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const conn = async () => {
  try {
    await prisma.$disconnect();
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  }
};
