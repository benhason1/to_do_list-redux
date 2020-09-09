import reducerFactory from '../../ReducerFactory'
import TicketsHandlers from './TicketsHandlers';
import Configuration from '../../../Configuration'

const actions = {
    NEW: 'newTicket',
    DElETE: 'deleteTicket'
}

const handlers = {}
handlers[actions.NEW] = TicketsHandlers.newTicket

export default reducerFactory(Configuration.reduxTicketInitialState, handlers)