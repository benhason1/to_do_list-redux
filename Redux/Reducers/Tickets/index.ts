import reducerFactory from '../../ReducerFactory'
import TicketsHandlers from './TicketsHandlers';

const actions = {
    NEW: 'new',
    DElETE: 'delete'
}

const handlers = {}
handlers[actions.NEW] = TicketsHandlers.newTicket


export default reducerFactory({ tickets: [] }, handlers)