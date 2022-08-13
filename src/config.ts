import path from 'path';
import dotenv from 'dotenv'

dotenv.config({ path: path.join(__dirname, '../.env') });

const config: { port: number; origins: string; } = {
  port: 9000,
  origins: process.env.ORIGINS?.split(',') as unknown as string,
};

export default config;
