import React from 'react';
import ReactDOM from 'react-dom';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class Trader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadOrders: true,
            value: 'ID'
        }
    }

    searchOrders(event) {
        this.setState({})
        let search = this.state.value;
        let key = event.target.value;
        this.props.searchOrders(key, search, this.props.orders);
        this.setState({
            loadOrders: false
        })
        if (key == "") {
            this.setState({ loadOrders: true })
        }
    }
    handleSearchChange(event, index, value) {
        this.setState({
            value
        }
        )
    }
    render() {

        let data = this.state.loadOrders ? this.props.orders : this.props.searchitems
        console.log(data)
        return (<div className="row">
            <form className="form-horizontal col-md-4 col-xs-12 col-sm-12 form-color ">
               
                <TextField onChange={this.searchOrders.bind(this)}
                     className=" col-md-6 col-xs-2 col-sm-4 txtfield" id="search"
                    defaultValue={this.state.value}
                />
                <DropDownMenu className="col-md-6 col-xs-10 col-sm-8" value={this.state.value} onChange={this.handleSearchChange.bind(this)}>
                    <MenuItem value='ID' primaryText="ID" />
                    <MenuItem value='SIDE' primaryText="Side" />
                    <MenuItem value='SYMBOL' primaryText="Symbol" />
                    <MenuItem value='QUANTITY' primaryText="Quantity" />
                    <MenuItem value='STATUS' primaryText="Status" />
                    <MenuItem value='TRADER' primaryText="Trader" />
                </DropDownMenu>
               
            </form>
            
            <div className="hidden-xs hidden-sm">
                <BootstrapTable data={data} bordered={true} pagination={true} >
                    <TableHeaderColumn dataField='id' dataAlign="center" isKey={true} dataSort={true}>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='creationTime' dataAlign="center" dataSort={true}>Creation Time</TableHeaderColumn>
                    <TableHeaderColumn dataField='side' dataAlign="center" dataSort={true}>Side</TableHeaderColumn>
                    <TableHeaderColumn dataField='symbol' dataAlign="center" >Symbol</TableHeaderColumn>
                    <TableHeaderColumn dataField='quantity' dataAlign="center" dataSort={true} >Quantity</TableHeaderColumn>
                    <TableHeaderColumn dataField='quantityPlaced' dataAlign="center" dataSort={true} >Placed</TableHeaderColumn>
                    <TableHeaderColumn dataField='quantityExecuted' dataAlign="center" dataSort={true}>Executed</TableHeaderColumn>
                    <TableHeaderColumn dataField='limitPrice' dataAlign="center" dataSort={true}>Limit Price</TableHeaderColumn>
                    <TableHeaderColumn dataField='priority' dataAlign="center" dataSort={true}>Priority</TableHeaderColumn>
                    <TableHeaderColumn dataField='status' dataAlign="center" dataSort={true}>Status</TableHeaderColumn>
                    <TableHeaderColumn dataField='traderId' dataAlign="center" dataSort={true}>Trader</TableHeaderColumn>
                </BootstrapTable>
            </div>
            <div className="hidden-xs hidden-md hidden-lg">
                <BootstrapTable data={data} bordered={true} pagination={true}>
                    <TableHeaderColumn dataField='id' dataAlign="center" isKey={true} dataSort={true}>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='creationTime' dataAlign="center" dataSort={true}>Creation Time</TableHeaderColumn>
                    <TableHeaderColumn dataField='side' dataAlign="center" dataSort={true}>Side</TableHeaderColumn>
                    <TableHeaderColumn dataField='symbol' dataAlign="center" >Symbol</TableHeaderColumn>
                    <TableHeaderColumn dataField='quantity' dataAlign="center" dataSort={true} >Quantity</TableHeaderColumn>
                    <TableHeaderColumn dataField='quantityPlaced' dataAlign="center" dataSort={true} >Placed</TableHeaderColumn>
                    <TableHeaderColumn dataField='quantityExecuted' dataAlign="center" dataSort={true}>Executed</TableHeaderColumn>
                    <TableHeaderColumn dataField='limitPrice' dataAlign="center" dataSort={true}>Limit Price</TableHeaderColumn>
                    <TableHeaderColumn dataField='status' dataAlign="center" dataSort={true}>Status</TableHeaderColumn>
                </BootstrapTable>
            </div>
            <div className="hidden-sm hidden-md hidden-lg">
                <BootstrapTable data={data} bordered={true} pagination={true}>
                    <TableHeaderColumn dataField='id' dataAlign="center" isKey={true} dataSort={true}>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='side' dataAlign="center" dataSort={true}>Side</TableHeaderColumn>
                    <TableHeaderColumn dataField='symbol' dataAlign="center" >Symbol</TableHeaderColumn>
                    <TableHeaderColumn dataField='quantity' dataAlign="center" dataSort={true} >Quantity</TableHeaderColumn>
                    <TableHeaderColumn dataField='limitPrice' dataAlign="center" dataSort={true}>Limit Price</TableHeaderColumn>
                </BootstrapTable>
            </div>
        </div>
        )
    }
}