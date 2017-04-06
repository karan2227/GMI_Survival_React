export function usersHasErrored(bool) {
    return {
        type: 'USERS_HAS_ERRORED',
        hasErrored: bool
    };
}
export function usererFetchDataSuccess(users) {

    return {
        type: 'USERS_FETCH_DATA_SUCCESS',
        users
    };
}

export function getUsers(url){
    return (dispatch)=>{
        fetch(url).then((response)=>{
            return response;
        })
        .then((response) => response.json())
        .then((users) => dispatch(userFetchDataSuccess(users)))
        .catch(() => dispatch(usersHasErrored(true)));
    }
}

// export function stockFetchDataSuccess(items) {

//     return {
//         type: 'STOCKS_FETCH_DATA_SUCCESS',
//         items
//     };
// }



// export function getStocks(url){
//     return (dispatch)=>{
//         fetch(url).then((response)=>{
//             return response;
//         })
//         .then((response) => response.json())
//         .then((items) => {
//             dispatch(stockFetchDataSuccess(items.stock));
//         })
//         .catch(() => dispatch(itemsHasErrored(true)));
//     }
// }