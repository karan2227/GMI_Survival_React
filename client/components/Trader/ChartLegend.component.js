import React from 'react';
var Legend = require('react-d3-core').Legend;

export default class ChartLegend extends React.Component{
    render(){
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
            }];

        return(
            <div className='row'>
                <h3 className="text-center hidden-xs hidden-sm col-md-12">Order Execution Status</h3>
                <div className="hidden-sm hidden-xs">
                    <Legend
                        legendClassName= {legendClassName}
                        legendPosition= {legendPosition}
                        legendOffset= {legendOffset}
                        chartSeries = {chartSeries}
                        />
                </div>
                <h3 className="col-sm-4 col-xs-7 text-left visible-xs visible-sm hidden-md hidden-lg">Order Execution Status</h3>
                <div className="col-sm-offset-3 col-sm-5 col-xs-offset-3 col-xs-2">
                    <Legend
                        legendClassName= {legendClassName}
                        legendPosition= {legendPosition}
                        legendOffset= {legendOffset}
                        chartSeries = {chartSeries}
                        />
                </div>
            </div>
        );
    }
    
}