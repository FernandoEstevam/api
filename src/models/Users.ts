import Config from '../database/connection';

class Users {

    private static _knex:Config;

    constructor() {
        Users._knex = Config._getKnex();
    }


}