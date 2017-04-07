import React from 'react';


export default class LoginUserList extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
render(){
    return (
        
       <option value={this.props.userList}>{this.props.userList}</option>
       
    )
}
}