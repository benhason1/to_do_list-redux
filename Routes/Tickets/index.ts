import * as express from "express";
import TicketsCtrl from './TicketsController';
import Auth from '../../Utils/Auth';

const router = express.Router();

router.route('/')
    .get(Auth.verifyToken, TicketsCtrl.getTickets)
    .post(TicketsCtrl.addTicket)
    .delete(TicketsCtrl.deleteTicket)

export default router