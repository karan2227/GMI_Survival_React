import React from 'react';
import { Link } from 'react-router'
import Chart from './Chart.component';
import ReactDOM from 'react-dom';
import Table from './Table.component';
import Websocket from 'react-websocket';
import Header from './Header';
import Footer from './Footer';
import { WindowResizeListener } from 'react-window-resize-listener';
import {socketurl,instrumenturl} from '../../appconfig.js';
import {NotificationContainer, NotificationManager} from 'react-notifications'; 


export default class Trader extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        showContainer: false,
        ht: this.props.initialHeight,
        wt: this.props.initialWidth

    };
}
    componentDidMount() {
        this.props.getStocks(instrumenturl);
        this.props.getOrders(socketurl);

    }

createNotification(type,num) {
      switch (type) {
        case 'info':
          NotificationManager.info('order'+' '+ num + ' ' + 'is executed' );
          break;
        case 'success':
          NotificationManager.success(num + ' ' + 'ORDERS ADDED', 'SUCCESSFUL');
          break;
        case 'warning':
          NotificationManager.warning('', 'ALL ORDERS DELETED', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
  }; 

    _openTable() {
        this.setState({ showContainer: false });
    }

    _openChart() {
        this.setState({ showContainer: true });
    }

    _deleteOrders() {
        this.props.deleteOrder(socketurl);
        this.createNotification('warning'); 
    }

    _createOrder(TraderTextBox) {
        var num = TraderTextBox;

        var side = "";
        var symbol = "";
        var quantity = "";
        var limitPrice = "";
        var traderId = "";
        var i;
        for (i = 0; i < num; i++) {
            var ind = Math.ceil(Math.random() * 30);
            var s = Math.ceil(Math.random() * 2);
            if (s == 1) {
                side = 'buy';
            }
            else {
                side = 'sell';
            }

            quantity = Math.ceil(Math.random() * 100);
            limitPrice = Math.random() * 100;

            var data = {
                side: side,
                symbol: this.props.stocks[ind - 1].symbol,
                quantity: quantity,
                limitPrice: limitPrice,
                traderId: this.props.currentSelectedUser.id
            }
            //console.log(data);
            this.props.getOrders(socketurl, data);
        }
             this.createNotification('success',num);
            this.setState({count:num}); 
                return;

    }

    _refreshData() {
        this.props.getOrders(socketurl);        
    }

    handleData(data) {
        data = data.substring(2, data.length);
        data = JSON.parse(data);
        console.log(data[0], data[1]);
        this.props.updateOrderSocket(data[0], data[1]);
        this.props.getOrders(socketurl);
        this.props.orders.map((item,index)=>{
            if(item.status=='Executed'){
                this.createNotification('info',item.id);
            }
        })

    }

    render() { 
        var chartOrTable;
        if (this.state.showContainer) {
            var chartData = [];
            for (var obj of this.props.orders) {
                var quantityExecuted = (obj.quantityExecuted / obj.quantity),
                    quantityPlaced = (obj.quantityPlaced / obj.quantity) - quantityExecuted,
                    quantity = 1 - quantityExecuted - quantityPlaced;
                chartData.push({ id: obj.id, quantity, quantityExecuted, quantityPlaced });
            }
            chartOrTable = <Chart data={chartData} h={this.state.ht} w={this.state.wt} />

        }
        else {
            chartOrTable = <Table myNotifiaction={this.createNotification.bind(this)} {...this.props}></Table>
        }
        return (
            <div className="desktop">
                < WindowResizeListener onResize = {
                    windowSize => {
                        console.log(windowSize.windowWidth, windowSize.windowWidth)
                        this.setState({
                            ht: windowSize.windowHeight,
                            wt: windowSize.windowWidth
                        })
                    }
                } />
                <Header createOrder={this._createOrder.bind(this)} deleteOrders={this._deleteOrders.bind(this)} refreshData={this._refreshData.bind(this)} openChart={this._openChart.bind(this)} openTable={this._openTable.bind(this)} {...this.props} />

                <div className="container-fluid ">
                    {chartOrTable}
                </div>
                <Footer />
                <Websocket url='ws://localhost:8080/socket.io/?transport=websocket'
                    onMessage={this.handleData.bind(this)} />
                    
                    <NotificationContainer/>

            </div>
        );
    }
}

