import Knex from 'knex';

export async function up(knex: Knex) {
	return knex.schema.createTable('usuarios', table => {
		table.increments('id').primary();
		table.string('login', 50).unique().notNullable();
		table.string('password', 255).notNullable();
		table.timestamps(true, true);
	});
}

export async function down(knex: Knex) {
	return knex.schema.dropTable('usuarios');
}