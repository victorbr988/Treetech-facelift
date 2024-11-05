"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
require("dotenv/config");
const config = {
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: path_1.default.resolve(__dirname, './server/infra/migrations'),
            extension: 'ts'
        },
        seeds: {
            directory: path_1.default.resolve(__dirname, './server/infra/seeds'),
            extension: 'ts'
        }
    },
    development: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: path_1.default.resolve(__dirname, './server/infra/migrations'),
            extension: 'ts'
        },
        seeds: {
            directory: path_1.default.resolve(__dirname, './server/infra/seeds'),
            extension: 'ts'
        }
    }
};
exports.default = config;
