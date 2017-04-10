export function dataHasErrored(state = false, action) {
    switch (action.type) {
        case 'DATA_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}
export function dataIsLoading(state = false, action) {
    switch (action.type) {
        case 'DATA_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}


export function users(state = [], action){
 
    switch (action.type) {
        case 'USERS_FETCH_DATA_SUCCESS':
            return action.users;
        default:
            return state;
    }
}
export function orders(state=[],action){
    console.log("Inside reducers orders:"+action.orders);
    switch(action.type){
        case 'ORDERS_FETCH_DATA_SUCCESS':
        var newState = action.orders;
        return newState;

        case 'orderCreatedEvent':
        return [...state,action.data]
        
        // case 'ORDERS_POST_DATA_SUCCESS':
        // var newState = [];
        // newState=state;
        // newState.push(action.orders); 
        // return newState;
        default:
        return state;
    }
}

export function stocks(state = [], action){
 
    switch (action.type) {
        case 'STOCKS_FETCH_DATA_SUCCESS':
            return action.stocks;
        default:
            return state;
    }
}
export function selectedUser(state=[],action){
    switch(action.type){
        case 'SELECTED_USER':
        var myUser=action.user;
        var newState = myUser
        return newState;

        default:
        return state;
    }
}
