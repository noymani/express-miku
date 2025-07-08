// const { PrismaClient } = require('@prisma/client');
const { PrismaClient } = require('../src/generated/prisma');
// สร้าง client เพียงครั้งเดียว (ป้องกันสร้างซ้ำใน dev mode)
const globalForPrisma = global;

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

module.exports = prisma;
