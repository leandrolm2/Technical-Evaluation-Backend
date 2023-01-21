import ManageLeads  from "./app/controller/manageLeads";
import express from 'express'

const router = express.Router()

router.get('/test', ManageLeads.updateLeads)

export default router