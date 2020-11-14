import Knex from 'knex';

export async function seed(knex: Knex) {
	await knex('tipo_pagamentos').insert([
    {tipo: 'boleto'},
    {tipo: 'transferencia'},
    {tipo: 'deposito'},
    {tipo: 'dinheiro'},
    {tipo: 'Outros'},
	]);
}