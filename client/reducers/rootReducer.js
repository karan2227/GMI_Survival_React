import { combineReducers } from 'redux';
import { users,dataHasErrored } from './reducers';//all reducers to merge into combineReducers

var rootReducer = combineReducers({ 
    users,
    dataHasErrored
});

export default rootReducer;