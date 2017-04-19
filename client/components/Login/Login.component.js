import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import config from '../../firebase/config';
import firebase from 'firebase';
import {browserHistory} from 'react-router';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            id: ''
        };

    }

    loginUserLocal() {
        var userName = this.refs.selectedUser.value;
        var user;
        for (let u of this.props.users) {
            if (this.state.id === u.id) {
                user = u;
            }
        }
        this.props.loggedInUser(user);
        //firebase lOGIC
        var email = user.id.toLowerCase().concat("@gmail.com");
        var password = email;

        firebase.auth().signInWithEmailAndPassword(email, password) 
            .then(function (user) {
                    user.updateProfile({
                    displayName: userName,
                });
                browserHistory.push('/trader');
            })
}
    handleChange(event, index, value) {
        this.setState({ id: value });
    }


    render() {
        
        var showUserList = this.props.users.map((user, index) => {
            return (
                <MenuItem value={user.id} key={index} primaryText={user.name}></MenuItem>
            )
        })
        //Needs to be inside css
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
                        {/*<SelectField onChange={this.handleChange.bind(this)} selectedMenuItemStyle={style2} menuItemStyle={style3} labelStyle={style3} ref="selectedUser">*/}
                         <SelectField value={this.state.id} floatingLabelText="UserName" onChange={this.handleChange.bind(this)} selectedMenuItemStyle={style2} menuItemStyle={style3} labelStyle={style3} ref="selectedUser">
                            {showUserList}
                        </SelectField>
                        <br />
                        <TextField
                            hintText="Password Field"
                            floatingLabelText="Password"
                            type="password" />
                        <br />
                        <br />
                       
                            {/*<button type="button" value="LOGIN" onClick={this.loginUserLocal.bind(this)} className="btn btn-lg loginbutton">Login</button>*/}
                            <RaisedButton label="Login" primary={true} style={styles} onClick={this.loginUserLocal.bind(this)} />
                        
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