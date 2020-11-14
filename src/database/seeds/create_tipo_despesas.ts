import Knex from 'knex';

export async function seed(knex: Knex) {
	await knex('tipo_despesas').insert([
    {tipo: 'IPTU'},
    {tipo: 'Condominio'},
    {tipo: 'Agua'},
    {tipo: 'Luz'},
    {tipo: 'Outros'},
	]);
}