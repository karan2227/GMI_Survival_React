import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
 
export default class Trader extends React.Component{
    render(){
        return (<div className="row">
            <div className="hidden-xs hidden-sm">
    <BootstrapTable data={this.props.orders} bordered={true} pagination={true} >
                <TableHeaderColumn dataField='id' dataAlign="center" isKey={true}  dataSort={ true }>ID</TableHeaderColumn>
                <TableHeaderColumn dataField='creationTime' dataAlign="center"  dataSort={ true }>Creation Time</TableHeaderColumn>
                <TableHeaderColumn dataField='side' dataAlign="center"  dataSort={ true }>Side</TableHeaderColumn>
                <TableHeaderColumn dataField='symbol' dataAlign="center" >Symbol</TableHeaderColumn>
                <TableHeaderColumn dataField='quantity' dataAlign="center" dataSort={ true } >Quantity</TableHeaderColumn>
                <TableHeaderColumn dataField='quantityPlaced' dataAlign="center" dataSort={ true } >Placed</TableHeaderColumn>
                <TableHeaderColumn dataField='quantityExecuted' dataAlign="center"  dataSort={ true }>Executed</TableHeaderColumn>
                <TableHeaderColumn dataField='limitPrice' dataAlign="center"  dataSort={ true }>Limit Price</TableHeaderColumn>
                <TableHeaderColumn dataField='priority' dataAlign="center"  dataSort={ true }>Priority</TableHeaderColumn>
                <TableHeaderColumn dataField='status' dataAlign="center"  dataSort={ true }>Status</TableHeaderColumn>
                <TableHeaderColumn dataField='traderId' dataAlign="center"  dataSort={ true }>Trader</TableHeaderColumn>
            </BootstrapTable>       
            </div> 
            <div className="hidden-xs hidden-md hidden-lg">
    <BootstrapTable data={this.props.orders} bordered={true} pagination={true}>
                <TableHeaderColumn dataField='id' dataAlign="center" isKey={true}  dataSort={ true }>ID</TableHeaderColumn>
                <TableHeaderColumn dataField='creationTime' dataAlign="center"  dataSort={ true }>Creation Time</TableHeaderColumn>
                <TableHeaderColumn dataField='side' dataAlign="center"  dataSort={ true }>Side</TableHeaderColumn>
                <TableHeaderColumn dataField='symbol' dataAlign="center" >Symbol</TableHeaderColumn>
                <TableHeaderColumn dataField='quantity' dataAlign="center" dataSort={ true } >Quantity</TableHeaderColumn>
                <TableHeaderColumn dataField='quantityPlaced' dataAlign="center" dataSort={ true } >Placed</TableHeaderColumn>
                <TableHeaderColumn dataField='quantityExecuted' dataAlign="center"  dataSort={ true }>Executed</TableHeaderColumn>
                <TableHeaderColumn dataField='limitPrice' dataAlign="center"  dataSort={ true }>Limit Price</TableHeaderColumn>
                <TableHeaderColumn dataField='status' dataAlign="center"  dataSort={ true }>Status</TableHeaderColumn>
            </BootstrapTable>       
            </div> 
            <div className="hidden-sm hidden-md hidden-lg">
    <BootstrapTable data={this.props.orders} bordered={true} pagination={true}>
                <TableHeaderColumn dataField='id' dataAlign="center" isKey={true}  dataSort={ true }>ID</TableHeaderColumn>
                <TableHeaderColumn dataField='side' dataAlign="center"  dataSort={ true }>Side</TableHeaderColumn>
                <TableHeaderColumn dataField='symbol' dataAlign="center" >Symbol</TableHeaderColumn>
                <TableHeaderColumn dataField='quantity' dataAlign="center" dataSort={ true } >Quantity</TableHeaderColumn>
                <TableHeaderColumn dataField='limitPrice' dataAlign="center"  dataSort={ true }>Limit Price</TableHeaderColumn>
            </BootstrapTable>       
            </div> 
        </div>
        )
    }
}