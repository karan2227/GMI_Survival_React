import React from 'react';
import { Link } from 'react-router'
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import * as firebase from 'firebase';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.numberOfOrders = 0;
        this.myIndex= 1000;
        this.state = {
            open: false,
            myCount: 0,
            openDrawer:false,
            open2:false
        };
        this.handleRequestClose=this.handleRequestClose.bind(this);
        this.handleTouchTap=this.handleTouchTap.bind(this);
        this.handleToggle=this.handleToggle.bind(this);
}

    openMenu(event){
    // This prevents ghost click.
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      open2: true,
      anchorEl: event.currentTarget,
      
    });

    if(this.state.openDrawer){
        this.setState({openDrawer:false});
    }
  };

    deleteAllOrders(){
        this.myIndex= 1000;
        this.props.deleteOrders();
    }

    handleToggle(ind){
        this.setState({openDrawer:open});
        this.myIndex=ind;
    }

    closeDrawer(){
        this.setState({openDrawer:false});
    }

    createHandler() {
        var TraderTextBox = ReactDOM.findDOMNode(this.refs.orderNumber).value;
        this.numberOfOrders = +(TraderTextBox);
        this.props.createOrder(TraderTextBox);
        this.setState({ myCount: this.state.myCount + +(TraderTextBox) });
        ReactDOM.findDOMNode(this.refs.orderNumber).value = "";
    }

    focus() {
        ReactDOM.findDOMNode(this.refs.orderNumber).autofocus = true;
    }

     handleTouchTap(event) {
    // This prevents ghost click.
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
      
    });

    if(this.state.openDrawer){
        this.setState({openDrawer:false});
    }
  };

     handleRequestClose() {
    this.setState({
      open: false,
      open2:false
    });
  };

    render() {
        var length = Object.keys(this.props.orders).length;
        var n = length - this.numberOfOrders;
        var menuItem = this.props.orders.map((item, index) => {
            if (index >= n) {
                return ( <MenuItem onClick={this.handleToggle.bind(this,index)}>Trader: <b>{item.traderId}</b>| SYM: <b>{item.symbol}</b> | STATUS: <b>{item.status}</b> <hr/> </MenuItem>
                    );
            }
            else { { } }
        })
        
        if(this.myIndex!=1000){
        var drawerDisplay=<div><MenuItem>ID: {this.props.orders[this.myIndex].id}</MenuItem><hr/>
                        <MenuItem>Creation Time: {this.props.orders[this.myIndex].creationTime}</MenuItem><hr/>
                        <MenuItem>Side: {this.props.orders[this.myIndex].side}</MenuItem><hr/>
                        <MenuItem>Symbol: {this.props.orders[this.myIndex].symbol}</MenuItem><hr/>
                        <MenuItem>Quantity: {this.props.orders[this.myIndex].quantity}</MenuItem><hr/>
                        <MenuItem>Quantity Placed: {this.props.orders[this.myIndex].quantityPlaced}</MenuItem><hr/>
                        <MenuItem>Quantity Executed: {this.props.orders[this.myIndex].quantityExecuted}</MenuItem><hr/>
                        <MenuItem>Limit Price: {this.props.orders[this.myIndex].limitPrice}</MenuItem><hr/>
                        <MenuItem>Priority: {this.props.orders[this.myIndex].priority}</MenuItem><hr/>
                        <MenuItem>Status: {this.props.orders[this.myIndex].status}</MenuItem>
                        </div>
        }                                                                        

        return (
            <div>
                <div>
                    <header className="navbar">
                        <nav>
                            <div className="top">
                                <ul className="drop-menu">
                                    <li className="traderdesktop">Trader Desktop</li>
                                    <li className="pull-right signout">
                                        <a href="" onClick={this.props.logoutUser} >Sign Out</a>
                                    </li>
                                    <li className="pull-right tradername"><b>{firebase.auth().currentUser.displayName}</b></li>
                                </ul>
                            </div>
                            <hr>
                            </hr>
                            <div className="bottom">
                             <RaisedButton label="MENU" fullWidth={false} className="hidden-sm hidden-md hidden-lg col-xs-6 menu" onTouchTap={this.openMenu.bind(this)}/>
                                <ul className="drop-menu raisedButtonList col-sm-6 hidden-xs">
                                    <li> <RaisedButton label="Trade" primary={false} labelColor='white' backgroundColor='black' data-toggle="modal" data-target="#myModal" onClick={this.focus.bind(this)}/></li>
                                    <li> <RaisedButton label="Delete" primary={false} labelColor='white' backgroundColor='black' onClick={this.deleteAllOrders.bind(this)}/></li>
                                    <li> <RaisedButton label="Refresh" primary={false} labelColor='white' backgroundColor='black' onClick={this.props.refreshData}/></li>
                                    </ul>
                                    <ul className="drop-menu raisedButtonList2 col-sm-6 col-xs-6">
                                    <li className="pull-right "> <button className="icon chart btn btn-sm" id="buttons-right" onClick={this.props.openChart}> <i className="fa fa-bar-chart" aria-hidden="true"></i></button></li>
                                    <li className="pull-right"> <button className="icon button2 btn btn-sm" id="buttons-right" onClick={this.props.openTable} > <i className="fa fa-table" aria-hidden="true"></i></button></li>
                                    <li className="pull-right hidden-xs">
                                        <Badge badgeContent={this.state.myCount} secondary={true} badgeStyle={{ top: 10, right: 10 }} onTouchTap={this.handleTouchTap.bind(this)}>
                                            <NotificationsIcon />
                                        </Badge>
                                    </li>
                                </ul>
                                <Popover
                open={this.state.open2}
                anchorEl={this.state.anchorEl}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                onRequestClose={this.handleRequestClose}
                animation={PopoverAnimationVertical}>
                 <Menu>
          <MenuItem data-toggle="modal" data-target="#myModal" onClick={this.focus.bind(this)}><center><b>TRADE</b></center></MenuItem>
          <MenuItem onClick={this.deleteAllOrders.bind(this)}><center><b>DELETE</b></center></MenuItem>
          <MenuItem onClick={this.props.refreshData}><center><b>REFRESH</b></center></MenuItem>                      
          </Menu>
        </Popover>
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
                                <input className='form-input form-control' type="text" ref="orderNumber" />
                            </div>
                            <br />
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default basecolor" onClick={this.createHandler.bind(this)} data-dismiss="modal">Create</button>
                                <button type="button" className="btn btn-default btn pull-right basecolor" data-dismiss="modal" >Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                 <Popover
                open={this.state.open}
                anchorEl={this.state.anchorEl}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                onRequestClose={this.handleRequestClose}
                animation={PopoverAnimationVertical}>

          <Menu>
          <MenuItem><center><b>Latest Orders</b></center></MenuItem>
          <hr/>
           {menuItem}
          </Menu>
        </Popover>

        <Drawer open={this.state.openDrawer}>
        <MenuItem onClick={this.closeDrawer.bind(this)}> <RaisedButton label="CLOSE" labelColor='white' backgroundColor='black' fullWidth={true} /> </MenuItem>
         {drawerDisplay}
        </Drawer> 

            </div>

        );
    }

}


