import { PrismaClient } from '@prisma/client';
import { Handler } from '@netlify/functions';

const db = new PrismaClient();

export const handler: Handler = async (event, context) => {
  // const { name = 'stranger' } = event.queryStringParameters

  const data = await db.user.findMany();
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
