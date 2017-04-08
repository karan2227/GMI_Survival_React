import React from 'react';
import Chart from './Chart.component';
import ReactModal from 'react-modal';
import ReactDOM from 'react-dom';
import Table from './Table.component';

export default class Trader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            id: 0
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
componentDidMount(){
    console.log('did mount trader');
        this.props.getStocks("http://localhost:8080/instruments");
        this.props.getOrders("http://localhost:8080/orders");
}
    handleOpenModal() {
        this.setState({ showModal: true });
    }
    handleCloseModal() {
        this.setState({ showModal: false });
    }
      
    createOrder() {
        console.log('inside 1');
        console.log(this.props.stocks);
        console.log(ReactDOM.findDOMNode(this.refs.orderNumber).value)
        var num = ReactDOM.findDOMNode(this.refs.orderNumber).value;

        
        var side = "";
        var symbol = "";
        var quantity = "";
        var limitPrice = "";
        var traderId = "";
        var i;
        for (i = 0; i < num; i++) {
            var ind = Math.ceil(Math.random() * 30);
            var s = Math.ceil(Math.random() *2 );
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
                traderId: this.props.currentSelectedUser[0].id
            }
            console.log(data);
            this.props.getOrders('http://localhost:8080/orders', data)
        }
    }
    render() {
        // var chartData = [];
        // var x = {};
        // this.props.orders.map((obj, index) => {
        //     var quantityExecuted = (obj.quantityExecuted / obj.quantity),
        //         quantityPlaced = (obj.quantityPlaced / obj.quantity) - quantityExecuted,
        //         quantity = 1 - quantityExecuted - quantityPlaced;
        //     chartData.push({ id: obj.id, quantity, quantityExecuted, quantityPlaced });
        // })

        return (
            <div>
                <h1>Hello {this.props.currentSelectedUser[0].name}</h1>
                <button className="btn btn-success" onClick={this.handleOpenModal}>ADD TRADE ORDERS</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={this.handleCloseModal}>
                    <div>
                        <h3>Enter number of trades</h3>
                        <hr />
                        <input className='form-input form-control' type="text" placeholder="Enter Number of Orders" ref="orderNumber" />
                    </div>
                    <br />
                    <button type="button" className="btn btn-danger pull-right" onClick={this.handleCloseModal.bind(this)}>CANCEL</button>
                    <button type="button" className="btn btn-success pull-right" onClick={this.createOrder.bind(this)}>CREATE</button>
                </ReactModal>
                
            
            </div>)
    }
}
//                 <Chart data={chartData} />