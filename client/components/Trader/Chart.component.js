import React from 'react';

var BarStackHorizontalChart = require('react-d3-basic').BarStackHorizontalChart;
import ChartLegend from './ChartLegend.component';

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
            xTicks=[2,'%'],
            xTickFormat = d3.format('%')
        return (
            <div className="container-fluid row">
                <ChartLegend className="col-xs-12" {...this.props}/>
                
                <BarStackHorizontalChart
                    data={this.props.data}
                    chartSeries={chartSeries}
                    width={this.props.w * 0.88}
                    height={this.props.h * 0.8}
                    xTicks={xTicks}
                    showYGrid= {false}
                    yScale={yScale}
                    yLabel={yLabel}
                    y={y}
                    x={x}
                    xTickFormat={xTickFormat}
                    showLegend={false}
                    className="col-xs-12"/>

            </div>
        )
    }
};


export default Chart;