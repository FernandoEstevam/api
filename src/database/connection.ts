import Knex from 'knex';


export default class Config {

    private static _knex:Knex;

    constructor() {
        Config._knex = Knex({
            client: process.env.CLIENT,
            connection: {
                host: process.env.HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME
            }
        });
    }

    public static _getKnex() {
        return Config._knex;
    }
}
