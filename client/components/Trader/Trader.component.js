import React from 'react';

export default class Trader extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
       
        return(
        <h1>Hello {this.props.currentSelectedUser}</h1>
        );
    }
}