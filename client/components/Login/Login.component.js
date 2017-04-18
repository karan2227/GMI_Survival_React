import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            id: 'AM'
        };

    }

    loginUserLocal() {
        // var userName = this.refs.selectedUser.value;
        var user;
        for (let u of this.props.users) {

            if (this.state.id === u.id) {
                user = u;
            }
        }
        this.props.loggedInUser(user);
    }
    handleChange(event, index, value) {
        this.setState({ id: value });
    }


    render() {
        console.log(this.props.users);
        var showUserList = this.props.users.map((user, index) => {
            return (
                <MenuItem value={user.id} key={index} primaryText={user.name}></MenuItem>
            )
        })

        const styles = {
            margin: 12
        }
        const style = {
            height: 500,
            width: 500,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
            borderRadius: 10,
            opacity: 0.7,
            marginTop: 90,
        }
        const style1 = {
            marginTop: 100
        }
        const style2 = {
            color: "#00bcd4"
        }
        const style3={
            fontWeight:"bold"
        }

        return (
            <div className="login container-fluid">
                <center>
                    <Paper style={style} zDepth={10} rounded={true}>
                        <h1><b>LOGIN</b></h1>
                        <br />
                        {/*<form className="form-inline">
                    <div className="form-group">
                        <label htmlFor="sel1">Select Trader:</label>
                        <br />
                        <select className="form-control" id="sel1" ref="selectedUser">
                            {showUserList}
                        </select>
                       
                    </div>
                </form>*/}
                        <SelectField value={this.state.id} onChange={this.handleChange.bind(this)} selectedMenuItemStyle={style2} menuItemStyle={style3} labelStyle={style3}>
                            {showUserList}
                        </SelectField>
                        <br />
                        <TextField
                            hintText="Password Field"
                            floatingLabelText="Password"
                            type="password" />
                        <br />
                        <br />
                        <Link to="/trader">
                            {/*<button type="button" value="LOGIN" onClick={this.loginUserLocal.bind(this)} className="btn btn-lg loginbutton">Login</button>*/}
                            <RaisedButton label="Login" primary={true} style={styles} onClick={this.loginUserLocal.bind(this)} />
                        </Link>
                        <footer style={style1}>
                            <a href="http://publicis.sapient.com/en-us.html" target="_blank"><img src={require('./Capture.PNG')} height="45" width="30" /></a>
                            <p>Powered By <a href="http://publicis.sapient.com/en-us.html" target="_blank">Sapient</a></p>
                        </footer>
                    </Paper>
                </center>
            </div>
        );
    }
}