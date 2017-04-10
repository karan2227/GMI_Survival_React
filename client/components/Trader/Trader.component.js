import React from 'react';
import Chart from './Chart.component';
import ReactModal from 'react-modal';
import ReactDOM from 'react-dom';
import Table from './Table.component';
import Header from './Header';
import Footer from './Footer';

export default class Trader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showContainer: false
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.openChart=this.openChart.bind(this);
        this.openTable=this.openTable.bind(this);
        this.deleteOrders=this.deleteOrders.bind(this);
        this.refreshData=this.refreshData.bind(this);
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

    openTable(){
        this.setState({showContainer: false});
    }

    openChart(){
        console.log("inside open chart")
        this.setState({showContainer: true});
    }

    deleteOrders(){
        axios.delete("http://localhost:8080/orders");
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
         this.setState({ showModal: false });
    }

    refreshData(){
        this.props.getOrders('http://localhost:8080/orders')
    }

    render() {
        //  var chartData = [];
        //  var x = {};
        //  this.props.orders.map((obj, index) => {
        //  var quantityExecuted = (obj.quantityExecuted / obj.quantity),
        //  quantityPlaced = (obj.quantityPlaced / obj.quantity) - quantityExecuted,
        //     quantity = 1 - quantityExecuted - quantityPlaced;
        // chartData.push({ id: obj.id, quantity, quantityExecuted, quantityPlaced });
        //  })

        var chartOrTable;
        if(this.state.showContainer){
                    //<Chart data={chartData}/>
                    
                   chartOrTable= <h1>CHART COMPONENT</h1>
                
                }
                else{
                    
                    chartOrTable= <Table myOrders={this.props.orders}></Table>
                    
                }

        return (
            <div>
                <div>
                <header>
                <nav>
                    <div className="top">
                        <ul  className="drop-menu">
                            <li className="traderdesktop">Trader Desktop</li>
                            <li className="pull-right signout"><a href="http://localhost:1000">Sign Out</a></li>
                            <li className="pull-right tradername">{this.props.currentSelectedUser[0].name}</li> 
                        </ul>
                    </div>
                    <hr></hr>
                    <div className="bottom">
                        <ul  className="drop-menu">
                            <li> <button type="button" className="btn-sm button btn btn-primary" onClick={this.handleOpenModal}>Trade</button></li>
                            <li> <button type="button" className="btn-sm button2 btn btn-primary" onClick={this.deleteOrders}>Delete All</button></li>
                            <li> <button type="button" className="btn-sm button2 btn btn-primary" onClick={this.refreshData}>Refresh</button></li>
                            <li className="pull-right "> <button className="icon chart btn btn-primary button2" onClick={this.openChart}> <i className="fa fa-bar-chart" aria-hidden="true"></i></button></li>
                            <li className="pull-right"> <button className="icon btn btn-primary button2" onClick={this.openTable}> <i className="fa fa-table" aria-hidden="true"></i></button></li>                            
                        </ul>
                    </div>
                </nav>
            </header>
            </div>
                
                <div>
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
                        </div>
                        <div className="container-fluid">
                        {chartOrTable}
                        </div>
                        <Footer/>
            </div>
            )
    }
}

//<Chart data={chartData}/>