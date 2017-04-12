import React from 'react';
import { Link } from 'react-router'
import ReactDOM from 'react-dom';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    createHandler() {
        var TraderTextBox = ReactDOM.findDOMNode(this.refs.orderNumber).value;
        this.props.createOrder(TraderTextBox);
        ReactDOM.findDOMNode(this.refs.orderNumber).value = "";

    }
    focus(){
        ReactDOM.findDOMNode(this.refs.orderNumber).autofocus=true;
        console.log(ReactDOM.findDOMNode(this.refs.orderNumber).autofocus);
        
    } 

    render() {
        return (
            <div>
                <div>
                    <header className="navbar">
                        <nav>
                            <div className="top">
                                <ul className="drop-menu">
                                    <li className="traderdesktop">Trader Desktop</li>
                                    <li className="pull-right signout"><Link to="/"><a>Sign Out</a></Link></li>
                                    <li className="pull-right tradername">{this.props.currentSelectedUser.name}</li>
                                </ul>
                            </div>
                            <hr></hr>
                            <div className="bottom">
                                <ul className="drop-menu">
                                    <li> <button type="button" className="btn-sm button btn" id="buttons-left" data-toggle="modal" data-target="#myModal" onClick={this.focus.bind(this)}>Trade</button></li>
                                    <li> <button type="button" className="btn-sm button2 btn" id="buttons-left"onClick={this.props.deleteOrders}>Delete All</button></li>
                                    <li> <button type="button" className="btn-sm button2 btn" id="buttons-left" onClick={this.props.refreshData}>Refresh</button></li>
                                    <li className="pull-right "> <button className="icon chart btn btn-sm" id="buttons-right" onClick={this.props.openChart}> <i className="fa fa-bar-chart" aria-hidden="true"></i></button></li>
                                    <li className="pull-right"> <button className="icon button2 btn btn-sm" id="buttons-right" onClick={this.props.openTable} > <i className="fa fa-table" aria-hidden="true"></i></button></li>
                                </ul>
                            </div>
                        </nav>
                    </header>
                </div>

                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">

                        <div className="modal-content">
                            <div className="modal-header basecolor ">

                                <h3><b> Create Multiple Trades</b><button type="button" className="close" data-dismiss="modal">&times;</button></h3>
                            </div>
                            <div className="modal-body">
                                <h4>Enter number of trades</h4>

                                <input  className='form-input form-control' type="text" ref="orderNumber"/>
                            </div>
                            <br />
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default basecolor" onClick={this.createHandler.bind(this)} data-dismiss="modal">Create</button>
                                <button type="button" className="btn btn-default btn pull-right basecolor" data-dismiss="modal" >Cancel</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }

}