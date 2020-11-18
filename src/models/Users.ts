import knex from '../database/knex';

import { IUsers } from '../types/IUsers';

class Users {

    private table: string = 'usuarios';

    getAll() {
        const query = knex<IUsers>(this.table).select('*');

        const users = query;

        return users;
    }

    create(data: IUsers) {

        const query = knex<IUsers>(this.table).insert([data]);

        const user = query;

        return user;

    }
}

export default new Users();