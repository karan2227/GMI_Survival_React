import React from 'react';
var BarStackChart = require('react-d3-basic').BarStackChart;

export default class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        var generalChartData = [{ "id": "1", "Placed": "10", "Executed": "20", "Total Order": "50" }]
        var generalChartData1 = [{ "id": "3", "Placed": "70", "Executed": "80", "Total Order": "90" }];

        var width = 700,
            height = 400,
            chartSeries = [
                {
                    field: 'Executed',
                    name: 'Executed'
                },
                {
                    field: 'Placed',
                    name: 'Placed'
                },
                {
                    field: 'Total Order',
                    name: 'Total Order'
                }
            ],
            x = function (d) {
                return d.State;
            },
            xScale = 'ordinal',
            xLabel = "Quantity",
            yLabel = "Order Id",
            yLabelPosition = "left",
            yTickFormat = d3.format(".2s");

        return (<div>
            <BarStackChart
                data={generalChartData}
                width={width}
                height={height}
                chartSeries={chartSeries}
                x={x}
                xScale={xScale}
                xLabel={xLabel}
                yTickFormat={yTickFormat}
                yLabelPosition={yLabelPosition}
                yLabel={yLabel}
                />

            <BarStackChart
                data={generalChartData1}
                width={width}
                height={height}
                chartSeries={chartSeries}
                x={x}
                xScale={xScale}
                xLabel={xLabel}
                yTickFormat={yTickFormat}
                yLabelPosition={yLabelPosition}
                yLabel={yLabel}
                /></div>)
    }
}