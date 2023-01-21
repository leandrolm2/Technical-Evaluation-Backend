import Isales from "../../app/interface/sales";

const jsonData = '[{"_id":"63c5acfa2eb59b26da114201","name":"Nicolas","lastReceivedDate":"2023-01-02T10:30:00.000Z","receivedLeads":0},{"_id":"63c5acfa2eb59b26da114202","name":"Henrique","lastReceivedDate":"2023-01-03T10:30:00.000Z","limiter":5,"receivedLeads":0},{"_id":"63c5acfa2eb59b26da114203","name":"Vitor","lastReceivedDate":"2023-01-05T10:30:00.000Z","limiter":2,"receivedLeads":0},{"_id":"63c5acfa2eb59b26da114204","name":"Luciano","lastReceivedDate":"2023-01-06T10:30:00.000Z","receivedLeads":0},{"_id":"63c5acfa2eb59b26da114205","name":"Gilberto","lastReceivedDate":"2023-01-10T10:30:00.000Z","receivedLeads":0}]';

const salesArray: Isales[] = JSON.parse(jsonData).map((item: Isales) => {
    return {
        _id: item._id,
        name: item.name,
        lastReceivedDate: new Date(item.lastReceivedDate),
        limiter: item.limiter,
        receivedLeads: item.receivedLeads
    };
});

export default salesArray