import Knex from 'knex';

export async function up(knex: Knex) {
	return knex.schema.createTable('tipo_despesas', table => {
		table.increments('id').primary();
		table.string('tipo', 50).unique().notNullable();
		table.timestamps(true, true);
	});
}

export async function down(knex: Knex) {
	return knex.schema.dropTable('tipo_despesas');
}