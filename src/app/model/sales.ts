import {Schema, model} from "mongoose";
import Isales from "../interface/sales";

const salesSchema: Schema<Isales> = new Schema<Isales>(
    {
        _id: String,
        name: String,
        lastReceivedDate: {
            type: Date,
            default: new Date(),
            requeried: false,
        },
        limiter: {
            type: Number,
            requeried: false
        },
        receivedLeads: {
            type: Number,
            requeried: false
        }


    },
)

export default model<Isales>('Sales', salesSchema)