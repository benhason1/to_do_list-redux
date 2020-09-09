import { v4 } from "uuid"

export default {
    newTicket: (state, action) => {
        let ticketToAdd = {}
        if (action.ticket && action.ticketStatus && state.tickets[action.ticketStatus]) {
            ticketToAdd["id"] = v4()
            ticketToAdd["content"] = action.ticket
            state.tickets[action.ticketStatus].push(ticketToAdd)
        }
        return state
    },

}
