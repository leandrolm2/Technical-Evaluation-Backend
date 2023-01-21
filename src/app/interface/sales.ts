import { Document } from 'mongoose'

export default interface Isales extends Document {
    _id: string,
    name: string
    lastReceivedDate: Date;
    limiter?: number;
    receivedLeads: number;
}
