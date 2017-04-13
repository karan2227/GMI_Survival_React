import React from 'react';
var Legend = require('react-d3-core').Legend;
var BarStackHorizontalChart = require('react-d3-basic').BarStackHorizontalChart;
//import ChartLegend from './ChartLegend.component';

class Chart extends React.Component {
    render() {

        var legendClassName = "test-legend-class",
            legendPosition = 'left',
            legendOffset = 90,
            chartSeries = [
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
            <div>
                <div className=" hidden-xs hidden-sm  visible-md visible-lg">
                    <h3 className="text-center">Order Execution Status</h3>
                    <div className="center-block">
                        <Legend
                            legendClassName={legendClassName}
                            legendPosition={legendPosition}
                            legendOffset={legendOffset}
                            chartSeries={chartSeries}
                            width={this.props.wt * 0.3}
                            height={this.props.ht * 0.5}
                        />
                    </div>
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
                <div className="visible-sm hidden-xs hidden-md hidden-lg"> 
                    <h4 className="pull-left">Order Execution Status</h4>
                    <div className="pull-right">
                        <Legend
                            legendClassName={legendClassName}
                            legendPosition={legendPosition}
                            legendOffset={legendOffset}
                            chartSeries={chartSeries}
                            width={this.props.wt * 0.3}
                            height={this.props.ht * 0.5}
                        />
                    </div>
                    <BarStackHorizontalChart
                    data={this.props.data}
                    chartSeries={chartSeries}
                    width={this.props.w * 0.9}
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
                 <div className="visible-xs hidden-sm hidden-md hidden-lg row"> 
                    <h4 className="pull-left col-xs-6">Order Execution Status</h4>
                    <div className="pull-right col-xs-6">
                        <Legend
                            legendClassName={legendClassName}
                            legendPosition={legendPosition}
                            legendOffset={legendOffset}
                            chartSeries={chartSeries}
                            width={this.props.wt * 0.7}
                            height={this.props.ht * 0.7}
                        />
                    </div>
                    <BarStackHorizontalChart
                    data={this.props.data}
                    chartSeries={chartSeries}
                    width={this.props.w*0.99}
                    height={this.props.h*0.8}
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
            </div>
        )
    }
};


export default Chart;
/*
//For Chart Legend Component
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
*/ 