import axios from 'axios';

export function dataHasErrored(bool) {
    return {
        type: 'DATA_HAS_ERRORED',
        hasErrored: bool
    };
}
export function dataIsLoading(bool) {
    return {
        type: 'DATA_IS_LOADING',
        isLoading: bool
    };
}
export function usersFetchDataSuccess(users) {
    return {
        type: 'USERS_FETCH_DATA_SUCCESS',
        users
    };
}
export function ordersFetchDataSuccess(orders) {
    return {
        type: 'ORDERS_FETCH_DATA_SUCCESS',
        orders
    };
}

export function getUsers(url,data=undefined) {

    return (dispatch) => {
                dispatch(dataIsLoading(true));

        if(data) {
            return axios({
                url :url,
                timeout: 20000,
                method: 'post',
                data,
                responseType: 'json'
            })
            .then(function(response){
                dispatch(usersFetchDataSuccess(response.data));
                dispatch(dataIsLoading(false));

            })
            .catch(function(response){
                dispatch(dataHasErrored(response.data));
            })
        }
        else if(!data) {
            return axios({
                url :url,
                timeout: 20000,
                method: 'get',
                responseType: 'json'
            })
            .then(function(response){
             
                dispatch(usersFetchDataSuccess(response.data));
                dispatch(dataIsLoading(false));

            })
            .catch(function(response){
                dispatch(dataHasErrored(response.data));
            })
        }

       
    };
}
export function getOrders(url) {

    return (dispatch) => {
                dispatch(dataIsLoading(true));
           return axios({
                url :url,
                timeout: 20000,
                method: 'get',
                responseType: 'json'
            })
            .then(function(response){
             
                dispatch(ordersFetchDataSuccess(response.data));
                dispatch(dataIsLoading(false));

            })
            .catch(function(response){
                dispatch(dataHasErrored(response.data));
            })
        }

    };
export function dispatchToDisplay(user){
    return {
        type:'SELECTED_USER',
        user
    }
}

export function selectedUser(user){
    return (dispatch) => {
        dispatch(dispatchToDisplay(user));   
     }
}

export function ordersFetchDataSuccess(orders){
    return {
        type: 'ORDERS_FETCH_DATA_SUCCESS',
        orders
    };
}

export function getOrders(url,data) {
    console.log('Inside action');
    console.log(data);
    return (dispatch) => {
                dispatch(dataIsLoading(true));

        if(data) {
            console.log('inside post action');
            return axios({
                url :url,
                timeout: 20000,
                method: 'post',
                data,
                responseType: 'json'
            })
            .then(function(response){
                dispatch(ordersFetchDataSuccess(response.data));
                dispatch(dataIsLoading(false));

            })
            .catch(function(response){
                dispatch(dataHasErrored(response.data));
            })
        }
        else if(!data) {
            console.log('inside get action');
            return axios({
                url :url,
                timeout: 20000,
                method: 'get',
                responseType: 'json'
            })
            .then(function(response){
             
                dispatch(ordersFetchDataSuccess(response.data));
                dispatch(dataIsLoading(false));

            })
            .catch(function(response){
                dispatch(dataHasErrored(response.data));
            })
        }

       
    };
}

export function stocksFetchDataSuccess(stocks){
    return {
        type: 'STOCKS_FETCH_DATA_SUCCESS',
        stocks
    };
}

export function getStocks(url,data=undefined) {

    return (dispatch) => {
                dispatch(dataIsLoading(true));

        if(data) {
            return axios({
                url :url,
                timeout: 20000,
                method: 'post',
                data,
                responseType: 'json'
            })
            .then(function(response){
                dispatch(stocksFetchDataSuccess(response.data));
                dispatch(dataIsLoading(false));

            })
            .catch(function(response){
                dispatch(dataHasErrored(response.data));
            })
        }
        else if(!data) {
            return axios({
                url :url,
                timeout: 20000,
                method: 'get',
                responseType: 'json'
            })
            .then(function(response){
             
                dispatch(stocksFetchDataSuccess(response.data));
                dispatch(dataIsLoading(false));

            })
            .catch(function(response){
                dispatch(dataHasErrored(response.data));
            })
        }

       
    };
}