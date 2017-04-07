import { combineReducers } from 'redux';
import { users,dataHasErrored,selectedUser } from './reducers';//all reducers to merge into combineReducers

var rootReducer = combineReducers({ 
    users,
    dataHasErrored,
    selectedUser
});

export default rootReducer;