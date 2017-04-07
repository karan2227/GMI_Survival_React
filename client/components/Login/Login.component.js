import React from 'react';
import LoginUserList from './LoginUserList';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={}
        console.log(this.props);
    }

    componentDidMount(){
        this.props.getUsers("http://localhost:8080/users");
    }

    render(){
        console.log(this.props.users,'users');
        var showUserList=this.props.users.map((user,index)=> {
            return(
            <LoginUserList userList={user.name} key={index} {...this.props}/>
            )
        })
        console.log(showUserList)
        return(
            <div>
            <select>
            {showUserList}
            </select>
            </div>
        );
        }
}