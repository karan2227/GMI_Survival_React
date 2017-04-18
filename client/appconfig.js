import { dataIsLoading, dataHasErrored, usersFetchDataSuccess, ordersFetchDataSuccess, stocksFetchDataSuccess } from './actions/actions.js'
import axios from 'axios';

//urls
export var socketurl="http://localhost:8080/orders";
export var userurl="http://localhost:8080/users";
export var instrumenturl="http://localhost:8080/instruments";

//axios 
export function getUsers(url, data = undefined) {

    return (dispatch) => {
        dispatch(dataIsLoading(true));

        if (data) {
            return axios({
                url: url,
                timeout: 20000,
                method: 'post',
                data,
                responseType: 'json'
            })
                .then(function (response) {
                    dispatch(usersFetchDataSuccess(response.data));
                    dispatch(dataIsLoading(false));
                })
                .catch(function (response) {
                    dispatch(dataHasErrored(response.data));
                })
        }
        else if (!data) {
            return axios({
                url: url,
                timeout: 20000,
                method: 'get',
                responseType: 'json'
            })
                .then(function (response) {

                    dispatch(usersFetchDataSuccess(response.data));
                    dispatch(dataIsLoading(false));

                })
                .catch(function (response) {
                    dispatch(dataHasErrored(response.data));
                })
        }
    };
}


export function getOrders(url, data) {
    return (dispatch) => {
        dispatch(dataIsLoading(true));

        if (data) {
            console.log('inside post action');
            return axios({
                url: url,
                timeout: 20000,
                method: 'post',
                data,
                responseType: 'json'
            })
                .then(function (response) {
                })
                .catch(function (response) {
                    dispatch(dataHasErrored(response.data));
                })
        }
        else if (!data) {
            return axios({
                url: url,
                timeout: 20000,
                method: 'get',
                responseType: 'json'
            })
                .then(function (response) {
                    dispatch(ordersFetchDataSuccess(response.data));
                    dispatch(dataIsLoading(false));

                })
                .catch(function (response) {
                    dispatch(dataHasErrored(response.data));
                })
        }


    };
}

export function getStocks(url, data = undefined) {

    return (dispatch) => {
        dispatch(dataIsLoading(true));

        if (data) {
            return axios({
                url: url,
                timeout: 20000,
                method: 'post',
                data,
                responseType: 'json'
            })
                .then(function (response) {
                })
                .catch(function (response) {
                    dispatch(dataHasErrored(response.data));
                })
        }
        else if (!data) {
            return axios({
                url: url,
                timeout: 20000,
                method: 'get',
                responseType: 'json'
            })
                .then(function (response) {

                    dispatch(stocksFetchDataSuccess(response.data));
                    dispatch(dataIsLoading(false));

                })
                .catch(function (response) {
                    dispatch(dataHasErrored(response.data));
                })
        }


    };
}

export function deleteOrder(url, data = undefined) {

    return (dispatch) => {
        dispatch(dataIsLoading(true));


        return axios({
            url: url,
            timeout: 20000,
            method: 'delete',
            responseType: 'json'
        })
            .then(function (response) {
            })
            .catch(function (response) {
                dispatch(dataHasErrored(response.data));
            })


    };
}

