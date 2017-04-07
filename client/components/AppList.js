import React from 'react';
import { connect } from 'react-redux';
//all actions which are linked to other components by "team_discussed" series of links
import { getUsers,selectedUser } from '../actions/actions';
//Naming convention for all components
import Main from './Main.component';

const mapStateToProps = (state) => {
    return {
        //state variables which are access using props
        users: state.users,
        currentSelectedUser:state.selectedUser,
        hasErrored: state.dataHasErrored,
        isLoading: state.dataIsLoading
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        //state function
        getUsers: (url) => dispatch(getUsers(url)),
        // getTraders: (url) => dispatch(getTraders(url))
        loggedInUser: (user)=> dispatch(selectedUser(user))
    };
}

var App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
