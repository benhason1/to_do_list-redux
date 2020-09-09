import TicketReducer from './Reducers/Tickets'
import { createStore, combineReducers } from 'redux'
import Ticket from '../Dal/Ticket'

const reducers = combineReducers({ TicketReducer })
const store = createStore(reducers)

export default store