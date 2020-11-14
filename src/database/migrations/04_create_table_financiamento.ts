import Knex from 'knex';

export async function up(knex: Knex) {
	return knex.schema.createTable('financiamento', table => {
		table.increments('id').primary();
		table.integer('parcela').notNullable();
		table.float('valor').notNullable();
		table.date('vencimento').notNullable();
		table.float('valor_debitado');
		table.date('data_debito');
		table.text('observacao');

		table.integer('imoveis_id')
			.unsigned()
			.notNullable();

		table.foreign('imoveis_id')
			.references('imoveis.id')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');


		table.timestamps(true, true);
	});
}

export async function down(knex: Knex) {
	return knex.schema.dropTable('financiamento');
}