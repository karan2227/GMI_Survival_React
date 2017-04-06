export function usersHasErrored(state = false, action) {
    switch (action.type) {
        case 'USERS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function loginUsers(state = [], action) {
    console.log('insdide reducer of user');

    switch (action.type) {
        case 'USERS_FETCH_DATA_SUCCESS':
            return action.users;
        default:
            return state;
    }
}
