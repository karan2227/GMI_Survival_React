import React from 'react';
import {Link} from 'react-router';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={}
      
    }

    loginUserLocal(){
        var userName=this.refs.selectedUser.value;
         var user;
         for(let u of this.props.users){
           
            if(userName === u.name){
                
                user = u;
                
            }
        }
        this.props.loggedInUser(user);
    }

    render(){
        console.log(this.props);
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