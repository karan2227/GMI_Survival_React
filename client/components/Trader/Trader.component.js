import React from 'react';
import ReactModal from 'react-modal';
import ReactDOM from 'react-dom';

export default class Trader extends React.Component{
    constructor(){
        super();
        this.state={
            showModal:false,
            id:0
        };

        this.handleOpenModal=this.handleOpenModal.bind(this);
        this.handleCloseModal=this.handleCloseModal.bind(this);
    }


    handleOpenModal(){
        this.setState({showModal:true});
    }
    handleCloseModal(){
        this.setState({showModal:false});
    }

    createOrder () {
        console.log('inside 1');
        console.log(ReactDOM.findDOMNode(this.refs.orderNumber).value)
        this.props.getTraders('http://localhost:8080/orders',data)
    }

    render(){
        console.log(this.props);
        return(
            <div>
        <h1>Hello {this.props.currentSelectedUser}</h1>
        <button className="btn btn-success" onClick={this.handleOpenModal}>ADD TRADE ORDERS</button>
        <ReactModal
            isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}>
           <div>
            <h3>Enter number of trades</h3>
            <hr/>            
            <input className='form-input form-control' type="text" placeholder="Enter Number of Orders" ref="orderNumber" />
           </div>
           <br/>
           <button type="button" className="btn btn-danger pull-right" onClick={this.handleCloseModal.bind(this)}>CANCEL</button>
           <button type="button" className="btn btn-success pull-right" onClick={this.createOrder.bind(this)}>CREATE</button>
        </ReactModal>

        </div>
        );
    }
}
