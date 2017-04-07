import { combineReducers } from 'redux';

import { users,dataHasErrored,selectedUser,dataIsLoading } from './reducers';//all reducers to merge into combineReducer


var rootReducer = combineReducers({ 
    users,
    dataHasErrored,
    selectedUser,
    dataIsLoading
});

export default rootReducer;