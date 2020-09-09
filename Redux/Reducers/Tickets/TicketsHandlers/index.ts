import { v4 } from "uuid"

export default {
    newTicket: (state, action) => {
        let ticketToAdd = {}
        if (action.ticket) {
            ticketToAdd["id"] = v4()
            ticketToAdd["content"] = action.ticket
            state.tickets.push(ticketToAdd)
        }
        return state
    },

}
