import { combineReducers } from 'redux';

import { users,orders,dataHasErrored,selectedUser,dataIsLoading } from './reducers';//all reducers to merge into combineReducer


var rootReducer = combineReducers({ 
    users,
    orders,
    dataHasErrored,
    selectedUser,
    dataIsLoading
});

export default rootReducer;