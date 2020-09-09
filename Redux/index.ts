import TicketReducer from './Reducers/Tickets'
import UserReducer from './Reducers/Users'
import { createStore, combineReducers } from 'redux'
import User from '../Dal/User'
import Ticket from '../Dal/Ticket'

const reducers = combineReducers({ TicketReducer, UserReducer })
const store = createStore(reducers)

export default store