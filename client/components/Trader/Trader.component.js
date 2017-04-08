import React from 'react';
import Chart from './Chart.component';
export default class Trader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        var chartData = [];
        var x = {};
        var OrdersToData = this.props.orders.map((obj, index) => {
           var quantityExecuted = (obj.quantityExecuted / obj.quantity),
            quantityPlaced = (obj.quantityPlaced / obj.quantity)-quantityExecuted,
            quantity = 1 - quantityExecuted - quantityPlaced;
            chartData.push({id:obj.id,quantity,quantityExecuted,quantityPlaced});
        })
      
        return (<div>
            <h1>Hello {this.props.currentSelectedUser}</h1>
            {OrdersToData}
            <Chart data={chartData}/>
        </div>
        );
    }
}