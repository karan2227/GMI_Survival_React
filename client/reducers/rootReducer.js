import { combineReducers } from 'redux';
<<<<<<< HEAD
import { users,dataHasErrored,selectedUser } from './reducers';//all reducers to merge into combineReducers
=======
import { users,dataHasErrored,dataIsLoading } from './reducers';//all reducers to merge into combineReducers
>>>>>>> 94a4fe848dde87874c7d8ada9b0f5bbc3e637371

var rootReducer = combineReducers({ 
    users,
    dataHasErrored,
<<<<<<< HEAD
    selectedUser
=======
    dataIsLoading
>>>>>>> 94a4fe848dde87874c7d8ada9b0f5bbc3e637371
});

export default rootReducer;