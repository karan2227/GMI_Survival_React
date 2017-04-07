import { combineReducers } from 'redux';
import { users,dataHasErrored,dataIsLoading } from './reducers';//all reducers to merge into combineReducers

var rootReducer = combineReducers({ 
    users,
    dataHasErrored,
    dataIsLoading
});

export default rootReducer;