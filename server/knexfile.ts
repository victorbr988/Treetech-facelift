import type { Knex } from 'knex';
import path from 'path';
import 'dotenv/config';

const config: { [key: string]: Knex.Config } = {
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.resolve(__dirname, './model/migrations'),
      extension: 'ts'
    },
    seeds: {
      directory: path.resolve(__dirname, './model/seeds'),
      extension: 'ts'
    }
  },
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.resolve(__dirname, './model/migrations'),
      extension: 'ts'
    },
    seeds: {
      directory: path.resolve(__dirname, './model/seeds'),
      extension: 'ts'
    }
  }
};

export default config;