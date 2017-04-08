import React from 'react';
import ReactDOM from 'react-dom';

var BarStackHorizontalChart = require('react-d3-basic').BarStackHorizontalChart;

class Chart extends React.Component {

    // componentDidMount(){
    //     this.props.getOrders("http://10.203.60.100/predefinedOrders");
    // }

    render() {

        var chartSeries = [
            {
                field: 'quantityExecuted',
                name: 'Executed',
            },
            {
                field: 'quantityPlaced',
                name: 'Placed',
            },
            {
                field: 'quantity',
                name: 'Total',
            }
        ];
        var y = function (d) {
            return d.id;
        },
            x = function (d) {
                return +d
            },
            yScale = 'ordinal',
            yLabel = 'Order Id',

            xTickFormat = d3.format(".2s")
     

        // var orderData=this.props.orders[0];
        //   console.log(orderData);   
        return (

            <div className="container">
                <h1>Order Execution Status</h1>
                <BarStackHorizontalChart
                    title='Order Execution Status'
                    data={this.props.orders}
                    chartSeries={chartSeries}
                    width={500}
                    height={100}
                    yScale={yScale}
                    yLabel={yLabel}
                    y={y}
                    x={x}
                    xTickFormat={xTickFormat}
                    />
            </div>
        )
    }
};


export default Chart;