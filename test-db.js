const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
    console.log('✅ Conexão com o banco bem-sucedida!');
  } catch (error) {
    console.error('❌ Erro ao conectar com o banco:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
