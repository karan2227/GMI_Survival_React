import React from 'react';
import {Link} from 'react-router';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={}
      
    }

    loginUserLocal(){
        var userName=this.refs.selectedUser.value;
        this.props.loggedInUser(userName);
    }

    render(){
 
        var showUserList=this.props.users.map((user,index)=> {
            return(
            <option value={user.name} key={index}>{user.name}</option>
            )
        })
    
        return(
            <div>
            <select ref="selectedUser">
            {showUserList}
            </select>
            <Link to ="/trader">
            <input type="button" value="LOGIN" onClick={ this.loginUserLocal.bind(this)}/>
            </Link>
            </div>
        );
        }
    }