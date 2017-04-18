import React from 'react';
import { Link } from 'react-router'
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.numberOfOrders=0;
        this.state = {
             open:false,
             myCount:0
             };
    this.handleToggle=this.handleToggle.bind(this);
    }

     handleToggle(){
        console.log('open close')
        this.setState({open:!this.state.open});
        this.setState({myCount:0});
    }

    createHandler() {
        var TraderTextBox = ReactDOM.findDOMNode(this.refs.orderNumber).value;
        this.numberOfOrders = +(TraderTextBox);
        this.props.createOrder(TraderTextBox);
        this.setState({myCount: this.state.myCount+ +(TraderTextBox)  });    
        ReactDOM.findDOMNode(this.refs.orderNumber).value = "";

    }
    focus(){
        ReactDOM.findDOMNode(this.refs.orderNumber).autofocus=true;
        console.log(ReactDOM.findDOMNode(this.refs.orderNumber).autofocus);
        
    } 

    render() {
        var length = Object.keys(this.props.orders).length;
        
        var n = length-this.numberOfOrders;
       
        
        var menuItem = this.props.orders.map((item,index)=>{
            if(index>=n){
            return (<MenuItem>TRADER-ID :{item.id} |QUANTITY :{item.quantity}<br/>SYM :{item.symbol} |STATUS: {item.status}<hr/> </MenuItem>);
            }
          else { {} }
        }) 
        return (
            <div>
                <div>
                    <header className="navbar">
                        <nav>
                            <div className="top">
                            <ul className="drop-menu">
                                <li className="traderdesktop">Trader Desktop</li>
                                <li className="pull-right signout">
                                    <Link to="/">
                                    <a>Sign Out</a></Link>
                                </li>
                                <li className="pull-right tradername">{this.props.currentSelectedUser.name}</li>
                            </ul>
                            </div>
                            <hr>
                            </hr>
                            <div className="bottom">
                            <ul className="drop-menu">
                                <li> <button type="button" className="btn-sm button1 btn" data-toggle="modal" data-target="#myModal" onClick={this.focus.bind(this)}>Trade</button></li>
                                <li> <button type="button" className="btn-sm button2 btn"onClick={this.props.deleteOrders}>Delete All</button></li>
                                <li> <button type="button" className="btn-sm button2 btn" onClick={this.props.refreshData}>Refresh</button></li>
                                <li className="pull-right "> <button className="icon chart btn btn-sm" id="buttons-right" onClick={this.props.openChart}> <i className="fa fa-bar-chart" aria-hidden="true"></i></button></li>
                                <li className="pull-right"> <button className="icon button2 btn btn-sm" id="buttons-right" onClick={this.props.openTable} > <i className="fa fa-table" aria-hidden="true"></i></button></li>
                                <li className="pull-right"> 
                                
                                <Badge   badgeContent={this.state.myCount} secondary={true} badgeStyle={{top: 10, right: 10}} onClick={this.handleToggle}>
                                    <NotificationsIcon />
                                    </Badge>
                              
                                </li>
                            </ul>
                            </div>
                        </nav>
                    </header>
                </div>
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header basecolor ">
                            <h3><b> Create Multiple Trades</b>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </h3>
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
                <Drawer open={this.state.open} >
                    <MenuItem onClick={this.handleToggle}><button  className="pull-right btn btn-danger btn-sm"> X </button> <b>LATEST ORDERS</b></MenuItem>
                       {menuItem}
                </Drawer>
                </div>

        );
    }

}