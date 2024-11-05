import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTableIfNotExists('Videos', (table) => {
    table.specificType('id', 'char(24)').primary().notNullable();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.integer('duration').unsigned().notNullable();
    table.integer('tag').unsigned().notNullable();
    table.dateTime('createdAt').defaultTo(knex.fn.now());
  });
}


export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTableIfExists('Videos');
}

