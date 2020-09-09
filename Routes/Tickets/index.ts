import * as express from "express"
import TicketsCtrl from './TicketsController'

const router = express.Router();

router.route('/')
    .get(TicketsCtrl.getTickets)
    .post(TicketsCtrl.addTicket)
    
export default router