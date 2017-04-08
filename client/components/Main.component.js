import React from 'react';

class Main extends React.Component{

    componentDidMount(){
        this.props.getUsers("http://10.203.60.100:8080/users");
        this.props.getOrders("http://10.203.60.100:8080/predefinedOrders");
}


    render(){
        return (
        <div>
            <h1>Login Page</h1>
            {React.cloneElement(this.props.children,this.props)}
        </div>)
    }
};


export default Main;