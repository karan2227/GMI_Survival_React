import React from 'react';
import { Link } from 'react-router'
import Chart from './Chart.component';
import ReactDOM from 'react-dom';
import Table from './Table.component';
import Websocket from 'react-websocket';
import Header from './Header';
import Footer from './Footer';
import { WindowResizeListener } from 'react-window-resize-listener';

export default class Trader extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        showContainer: false,
        height: this.props.initialHeight,
        width: this.props.initialWidth

    };
}

    componentDidMount() {
        console.log('did mount trader');
        this.props.getStocks("http://localhost:8080/instruments");
        this.props.getOrders("http://localhost:8080/orders");

    }
    _openTable() {
        this.setState({ showContainer: false });
    }

    _openChart() {
        console.log("inside open chart")
        this.setState({ showContainer: true });
    }

    _deleteOrders() {
        this.props.deleteOrder("http://localhost:8080/orders");
    }

    _createOrder(TraderTextBox) {
        // console.log('inside createOrder');
        // console.log(this.props.stocks);
        // console.log(ReactDOM.findDOMNode(this.refs.orderNumber).value);
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
            console.log(data);
            this.props.getOrders('http://localhost:8080/orders', data);
        }
    }

    _refreshData() {
        this.props.getOrders('http://localhost:8080/orders');        
    }

    handleData(data) {
        data = data.substring(2, data.length);
        data = JSON.parse(data);
        console.log(data[0], data[1]);
        this.props.updateOrderSocket(data[0], data[1]);
        this.props.getOrders("http://localhost:8080/orders");
    }

    render() {
        console.log(this.props.orders, "my check");
        var chartOrTable;
        if (this.state.showContainer) {
            var chartData = [];
            //  console.log(this.props,"hgghcvvghkcv");
            for (var obj of this.props.orders) {
                var quantityExecuted = (obj.quantityExecuted / obj.quantity),
                    quantityPlaced = (obj.quantityPlaced / obj.quantity) - quantityExecuted,
                    quantity = 1 - quantityExecuted - quantityPlaced;
                chartData.push({ id: obj.id, quantity, quantityExecuted, quantityPlaced });
            }
            chartOrTable = <Chart data={chartData} h={this.state.height} w={this.state.width} />

        }
        else {
            chartOrTable = <Table {...this.props}></Table>
        }
        return (
            <div>
                < WindowResizeListener onResize = {
                    windowSize => {
                        console.log(windowSize.windowWidth, windowSize.windowWidth)
                        this.setState({
                            height: 0.9 * windowSize.windowHeight,
                            width: 0.9 * windowSize.windowWidth
                        })
                    }
                } />
                <Header createOrder={this._createOrder.bind(this)} deleteOrders={this._deleteOrders.bind(this)} refreshData={this._refreshData.bind(this)} openChart={this._openChart.bind(this)} openTable={this._openTable.bind(this)}{...this.props} />

                <div className="container-fluid">
                    {chartOrTable}
                </div>
                <Footer />
                <Websocket url='ws://localhost:8080/socket.io/?transport=websocket'
                    onMessage={this.handleData.bind(this)} />
            </div>
        );
    }
}

