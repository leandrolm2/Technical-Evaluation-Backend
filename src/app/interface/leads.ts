import { Document, Types } from 'mongoose'

export default interface Ileads extends Document {
    _id: string;
    name: string;
    email: string;
    phone?: string;
    salesId:string;
}