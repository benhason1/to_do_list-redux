import ReduxStore from '../../../Redux';
import Ticket from '../../../Dal/Ticket';

export default {
    getTickets: (req, res) => {
        let currentTickets = ReduxStore.getState().TicketReducer.tickets
        let currentAllowedTickets = {}
        if (!currentTickets)
            res.send(currentAllowedTickets)

        for (let boardKey of Object.keys(currentTickets)) {
            let boardTickets = currentTickets[boardKey]

            if (!boardTickets)
                continue

            currentAllowedTickets[boardKey] = boardTickets.filter((ticket) => {
                return ticket.content.allowedUsers.includes(req.user.content.username)
            })
        }

        res.send(currentAllowedTickets)
    },

    addTicket: (req, res) => {
        let { creatorId, title, content, allowedUsers } = req.body

        if (!creatorId || !title || !content || !allowedUsers) {
            res.status(400)
            res.send("not all the must be fields are in the request")
        }
        let ticket = new Ticket(creatorId, title, content, allowedUsers)

        ReduxStore.dispatch({
            type: "newTicket",
            ticket: ticket,
            ticketStatus: "backlog"
        })

        res.send(ticket)
    },

    deleteTicket: (req, res) => {
        let { ticketId } = req.body
        if (!ticketId) {
            res.status(400)
            res.send("not all the must be fields are in the request")
        }

        ReduxStore.dispatch({
            type: "deleteTicket",
            ticketId: ticketId
        })

        res.send("deleted successfully")
    }

}