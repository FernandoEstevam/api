import Knex from 'knex';

export async function up(knex: Knex) {
	return knex.schema.createTable('imoveis', table => {
		table.increments('id').primary();
		table.float('nome', 150).notNullable();
		table.string('numero', 50).notNullable();
		table.string('endereco', 150).notNullable();
		table.string('cidade', 30).notNullable();
		table.float('metragem').notNullable();
		table.float('valor_compra').notNullable();
		table.float('valor_finaciado').notNullable();
		table.integer('prazo').notNullable();
		table.string('banco').notNullable();
		table.float('taxa').notNullable();
		table.float('iptu').notNullable();
		table.float('condominio').notNullable();
		table.string('proprietario').notNullable();
		table.text('observacao');
		table.timestamps(true, true);
	});
}

export async function down(knex: Knex) {
	return knex.schema.dropTable('imoveis');
}