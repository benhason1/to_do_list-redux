import * as express from "express"
import TicketsCtrl from './TicketsController'

const router = express.Router();

router.route('/')
    .get(TicketsCtrl.getTickets)
    .post(TicketsCtrl.addTicket)
    .delete(TicketsCtrl.deleteTicket)
    
export default router