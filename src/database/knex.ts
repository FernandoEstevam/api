import Knex from 'knex';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const knex = Knex({
	client: process.env.CLIENT,
	connection: {
		host: process.env.HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME
	},
})

export default knex;