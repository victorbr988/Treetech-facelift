"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const knex_1 = __importDefault(require("knex"));
const knexfile_1 = __importDefault(require("../knexfile"));
const envoiroment = process.env.NODE_ENV;
const configBasedOnEnv = knexfile_1.default[envoiroment];
exports.database = (0, knex_1.default)(configBasedOnEnv);
