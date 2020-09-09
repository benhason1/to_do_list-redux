import TicketReducer from './Reducers/Tickets';
import UserReducer from './Reducers/Users';
import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({ TicketReducer, UserReducer })
const store = createStore(reducers)

export default store