import { Handler } from '@netlify/functions';
import { PrismaClient } from '@prisma/client';
// import { handleRequest } from 'bridg/app/server/request-handler';

const prisma = new PrismaClient();

export const handler: Handler = async (event) => {
  return { statusCode: 200 };
  // const body = JSON.parse(event.body as string);
  // const { data, status } = await handleRequest(body, { db: prisma, rules: { default: true } });
  // return { statusCode: status, body: JSON.stringify(data) };
};
