import mongoose from 'mongoose';
require("dotenv").config();

export async function dbConnection() {
    try {
        await mongoose.connect(process.env.URL_MONGO!)
    } catch (err) {
        console.log(err)
    }
    const db = mongoose.connection
    db.once('open', () => {
        console.log('server connected')
    })
}
