import {Schema, model} from "mongoose";
import Ileads from '../interface/leads'

const leadsSchema: Schema<Ileads> = new Schema<Ileads>(
    {
        _id: String,
        name: {
            type: String,
            required: true
        },        
        email: {
            type: String,
            required: true
        },
        phone: { 
            type: String, 
            required: false
        },
        salesId: {
            type: String, 
            required: false
        
        }
    }
)

export default model<Ileads>('Leads', leadsSchema)