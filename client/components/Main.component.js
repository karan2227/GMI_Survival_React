import React from 'react';

class Main extends React.Component{

    componentDidMount(){
        this.props.getUsers("http://localhost:8080/users");
        this.props.getOrders("http://localhost:8080/orders");
}

    render(){
        return (
        <div>
            {React.cloneElement(this.props.children,this.props)}
        </div>)
    }
};


export default Main;