import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container">
            <header  className="navbar-fixed-top ">
                <nav>
                    <div className="top">
                        <ul  className="drop-menu">
                            <li className="traderdesktop">Trader Desktop</li>
                            <li className="pull-right tradername">{this.props.currentSelectedUser}</li>
                            <li className="pull-right signout"><a href="#">Sign Out</a></li>
                        </ul>
                    </div>
                    <hr></hr>
                    <div className="bottom">
                        <ul  className="drop-menu">
                            <li> <button type="button" className="btn-sm button btn btn-primary">Trade</button></li>
                            <li> <button type="button" className="btn-sm button2 btn btn-primary">Delete All</button></li>
                            <li> <button type="button" className="btn-sm button2 btn btn-primary">Refresh</button></li>
                            <li className="pull-right "> <button className="icon chart btn btn-primary button2"> <i className="fa fa-bar-chart" aria-hidden="true"></i></button></li>
                            <li className="pull-right"> <button className="icon btn btn-primary button2"> <i className="fa fa-table" aria-hidden="true"></i></button></li>                            
                        </ul>
                    </div>
                </nav>
            </header>
            </div>


        );
    }

}