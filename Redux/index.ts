import TicketReducer from './Reducers/Tickets'
import UserReducer from './Reducers/Users'
import { createStore, combineReducers } from 'redux'
import User from '../Dal/User'
import Ticket from '../Dal/Ticket'

const reducers = combineReducers({ TicketReducer, UserReducer })
const store = createStore(reducers)

// store.dispatch({
//     type: "newUser",
//     user: new User("ben", "123456")
// })

// store.dispatch({
//     type: "newTicket",
//     ticket: new Ticket("asd", "asd", "asd", ["asd", "asd"])
// })

export default store