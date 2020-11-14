import Knex from 'knex';

export async function up(knex: Knex) {
	return knex.schema.createTable('despesas', table => {

		table.increments('id').primary();
		table.float('valor').notNullable();
		table.date('vencimento').notNullable();
		table.date('pagamento');
		table.text('observacao');

		table.integer('tipo_despesa_id')
			.unsigned()
			.notNullable();

		table.foreign('tipo_despesa_id')
			.references('tipo_despesas.id')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
		
		table.integer('tipo_pagamento_id')
			.unsigned()
			.notNullable();

		table.foreign('tipo_pagamento_id')
			.references('tipo_pagamentos.id')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');


		table.integer('imovel_id')
			.unsigned()
			.notNullable();

		table.foreign('imovel_id')
			.references('imoveis.id')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

		table.integer('usuario_id')
			.unsigned()
			.notNullable();

		table.foreign('usuario_id')
			.references('usuarios.id')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

		table.timestamps(true, true);
	});
}

export async function down(knex: Knex) {
	return knex.schema.dropTable('despesas');
}