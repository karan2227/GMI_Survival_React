import React from 'react';


var BarStackHorizontalChart = require('react-d3-basic').BarStackHorizontalChart;

class Chart extends React.Component {
    render() {

        var chartSeries = [
            {
                field: 'quantityExecuted',
                name: 'Executed',
                color: '#FF8000'
            },
            {
                field: 'quantityPlaced',
                name: 'Placed',
                color: '#FEBB68'
            },
            {
                field: 'quantity',
                name: 'Total',
                color: '#FFEFBF'
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
            xTicks=[2,"%"],
            xTickFormat = d3.format("%")
      
        return (
            <div className="container">
                <BarStackHorizontalChart
                    title='Order Execution Status'
                    data={this.props.data}
                    chartSeries={chartSeries}
                    width={700}
                    height={700}
                    xTicks={xTicks}
                    showYGrid= {false}
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