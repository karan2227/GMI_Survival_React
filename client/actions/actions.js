import axios from 'axios';

export function dataHasErrored(bool) {
    return {
        type: 'DATA_HAS_ERRORED',
        hasErrored: bool
    };
}

export function usersFetchDataSuccess(users) {
    return {
        type: 'USERS_FETCH_DATA_SUCCESS',
        users
    };
}

export function getUsers(url,data=undefined) {

    return (dispatch) => {

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
                console.log(response);
                dispatch(usersFetchDataSuccess(response.data));
            })
            .catch(function(response){
                dispatch(dataHasErrored(response.data));
            })
        }

       
    };
}