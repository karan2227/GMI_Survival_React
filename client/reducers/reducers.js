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
    console.log(action,'reducer');
    switch (action.type) {
        case 'USERS_FETCH_DATA_SUCCESS':
            return action.users;
        default:
            return state;
    }
}

export function selectedUser(state=[],action){
    switch(action.type){
        case 'SELECTED_USER':

        var myUser=action.user;
        var newState=[...state,myUser]
        console.log(newState);
        return newState;

        default:
        return state;
    }
}
