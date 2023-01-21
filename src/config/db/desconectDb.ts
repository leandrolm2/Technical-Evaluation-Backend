import mongoose from 'mongoose';

export async function disconnectDB() {
    await mongoose.disconnect();
    console.log('Successfully disconnected from MongoDB');
}  

// export default disconnectFromMongo