import leads from '../../app/model/leads';
import sales from '../../app/model/sales';
import { dbConnection } from '../db/config';
import { disconnectDB } from '../db/desconectDb';

dbConnection();

async function rollback() {
    await sales.collection.drop();
    await leads.collection.drop();
    await disconnectDB();
}

rollback();