import { Response, Request } from 'express';
import Ileads from '../interface/leads';
import Isales from '../interface/sales';
import Leads from '../model/leads'
import Sales from '../model/sales';

class ManageLeads {
    public async updateLeads(req: Request, res: Response) {
        try{
            const leadsWithoutSales: Ileads[] = await Leads.find({ salesId: { $exists: false } });

            if(!leadsWithoutSales.length) throw new Error('No leads find') 

            for (const lead of leadsWithoutSales) {
                
                const availableSales: Isales[] = await Sales.find({
                    $or: [
                        { limiter: { $exists: false } },
                        { $and: [
                            { limiter: { $gt: 0 } },
                            { lastReceivedDate: { $lt: new Date() } },
                            { $expr: { $lt: [ "$receivedLeads", "$limiter" ] } }
                        ]}
                    ]
                }).sort({ lastReceivedDate: 1 })

                if (availableSales.length) {
                    const selectedSales = availableSales[0];

                    await Leads.findByIdAndUpdate(lead._id , { $set: { salesId: selectedSales._id }}, { new: true, runValidators: true });
                    await Sales.findByIdAndUpdate(selectedSales._id, { $inc: { receivedLeads: 1 }, lastReceivedDate: new Date() });
                } else {
                    throw new Error("there's no sale avaliable")
                }
            }

            const newSales = await Sales.find();
            
            return res.status(200).send(newSales);
        }catch(err) {
            console.error(err)
            return res.status(500).json({error: err});
        }   
    }
}

export default new ManageLeads();