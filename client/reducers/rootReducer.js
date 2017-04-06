import { combineReducers } from 'redux';
import { loginUsers } from './reducers';//all reducers to merge into combineReducers

var rootReducer = combineReducers({
    // items,
    // itemsHasErrored,
    // itemsIsLoading,
    //  stockItems,
    loginUsers
});

export default rootReducer;