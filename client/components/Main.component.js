import React from 'react';

class Main extends React.Component{

    componentDidMount(){
        this.props.getUsers("http://10.203.60.100:8080/users");
    }


    render(){
        return (
        <div>
            <h1>Login Pagesdgsdg</h1>
            {React.cloneElement(this.props.children,this.props)}
        </div>)
    }
};


export default Main;