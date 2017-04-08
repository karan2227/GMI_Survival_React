import React from 'react';
import { connect } from 'react-redux';
//all actions which are linked to other components by "team_discussed" series of links

import { getUsers,getOrders,selectedUser } from '../actions/actions';

import { getUsers,selectedUser,getOrders,getStocks } from '../actions/actions';

//Naming convention for all components
import Main from './Main.component';
import Trader from './Trader/Trader.component';

const mapStateToProps = (state) => {
    return {
        //state variables which are access using props
        users: state.users,
        orders: state.orders,
        stocks: state.stocks,
        currentSelectedUser:state.selectedUser,
        hasErrored: state.dataHasErrored,
        isLoading: state.dataIsLoading
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        //state function
        getUsers: (url) => dispatch(getUsers(url)),

        getOrders: (url) => dispatch(getOrders(url)),
        loggedInUser: (user)=> dispatch(selectedUser(user)),
        loggedInUser: (user)=> dispatch(selectedUser(user)),
        getOrders: (url,data)=> dispatch(getOrders(url,data)),
        getStocks: (url) => dispatch(getStocks(url))

    };
}

var App = connect(mapStateToProps, mapDispatchToProps)(Main);
export var myApp= connect(mapStateToProps, mapDispatchToProps)(Trader);

export default App;