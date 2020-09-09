import reducerFactory from '../../ReducerFactory'
import TicketsHandlers from './TicketsHandlers';

const actions = {
    NEW: 'newTicket',
    DElETE: 'deleteTicket'
}

const handlers = {}
handlers[actions.NEW] = TicketsHandlers.newTicket

export default reducerFactory({ tickets: [] }, handlers)