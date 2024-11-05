import connection, { Knex } from 'knex';
import knexConfig from '../knexfile';

type Environment = 'development' | 'production';
const envoiroment: Environment = process.env.NODE_ENV as Environment;

const configBasedOnEnv = knexConfig[envoiroment];
export const database: Knex = connection(configBasedOnEnv);