import React from 'react';
import { connect } from 'react-redux';
//all actions which are linked to other components by "team_discussed" series of links
import { getUsers } from '../actions/actions';
//Naming convention for all components
import Main from './MainComponent';

const mapStateToProps = (state) => {
    return {
        //state variables which are access using props
        users: state.users,
        
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        //state function
        getUsers: (url) => dispatch(getUsers(url)),
        // getTraders: (url) => dispatch(getTraders(url))
    };
}

var App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
