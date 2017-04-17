import React from 'react';
import {userurl,socketurl} from '../appconfig.js';

class Main extends React.Component{

    componentDidMount(){
         this.props.getUsers(userurl);
         this.props.getOrders(socketurl);

}

    render(){
        return (
        <div>
            {React.cloneElement(this.props.children,this.props)}
        </div>)
    }
};


export default Main;