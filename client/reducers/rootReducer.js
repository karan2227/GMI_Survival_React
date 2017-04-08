import { combineReducers } from 'redux';

import { users,orders,stocks,dataHasErrored,selectedUser,dataIsLoading } from './reducers';//all reducers to merge into combineReducer


var rootReducer = combineReducers({ 
    users,
    orders,
    stocks,
    dataHasErrored,
    selectedUser,
    dataIsLoading
});

export default rootReducer;