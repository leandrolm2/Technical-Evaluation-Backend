import leadsArray from '../dbTest/leads';
import salesArray from '../dbTest/sales';
import Ileads from '../../app/interface/leads';
import Isales from '../../app/interface/sales';
import Leads from '../../app/model/leads'
import Sales from '../../app/model/sales';
import {dbConnection}  from '../db/config'
import {disconnectDB} from '../db/desconectDb';

async function populateBanck():Promise<void> {
    const newLeads: Ileads[] = leadsArray;
    const newSales: Isales[] = salesArray;

    try {
        for(let leads of newLeads) {
            Leads.create(leads);
        }
        console.log('leads created');

        Sales.create(newSales)
        console.log('sales created!')
    } catch (err) {
        console.error(err);
    }
}


dbConnection();
setTimeout(() => {
    populateBanck();
}, 3000)

setTimeout(() => {
    disconnectDB();
}, 20000)