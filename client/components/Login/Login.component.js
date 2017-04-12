import React from 'react';
import { Link } from 'react-router';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

    }
    
    loginUserLocal() {
        var userName = this.refs.selectedUser.value;
        var user;
        for (let u of this.props.users) {

            if (userName === u.name) {

                user = u;

            }
        }
        this.props.loggedInUser(user);
    }

    render() {
        console.log(this.props);
        var showUserList = this.props.users.map((user, index) => {
            return (
                <option value={user.name} key={index}>{user.name}</option>
            )
        })

        return (
            <div className="login container-fluid">
                <h1><b>Log In</b></h1>
                <br/>
                <form className="form-inline">
                <div className="form-group">
                    <label htmlFor="sel1">Select Trader:</label>
                    <br/>
                    <select className="form-control" id="sel1" ref="selectedUser">
                        {showUserList}
                    </select>
                </div>
                </form>
                
                <br/>
                <Link to="/trader">
                    <button type="button" value="LOGIN" onClick={this.loginUserLocal.bind(this)} className="btn btn-lg loginbutton">Login</button>
                </Link>
            </div>
        );
    }
}