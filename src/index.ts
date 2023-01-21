import express from 'express';
import  router  from './routes';
import {dbConnection}  from './config/db/config';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dbConnection();
app.use(router);

app.listen(3000, () => {
    console.log('server is listening on port 3000')
})

