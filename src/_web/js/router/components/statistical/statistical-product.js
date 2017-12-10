import React, { Component } from "react";
import "./statistical.css";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';



export default class StatisticalProduct extends Component {
  constructor(props) {
    super(props);
    this.data = [{field : 'id', name : "ID Product"}, {field : 'name', name : "Name Product"},
     {field : 'price', name : "Price Product"}];
    this.products = [{
      id: 1,
      name: "Product1",
      price: 120
    }, {
      id: 2,
      name: "Product2",
      price: 80
    }];

    this.cellEditProp = {
      mode: 'click',
      blurToSave: true,
      beforeSaveCell: this.beforeSaveCell
    };
    this.selectRowProp = {
      mode: 'checkbox',
      clickToSelect: true,  // enable click to select
      bgColor: 'pink',
    };
  }
  // all data fake === this.props from index.js

  beforeSaveCell(row, cellName, cellValue) {
    alert(cellName);
    return true;
  }
 renderColumn(){
 return this.data.map((value, index)=>{
    if(index ===0){
      return  <TableHeaderColumn key={Math.random()} dataField={value.field} filter={{ type: 'TextFilter', delay: 1000 }} isKey> {value.name}</TableHeaderColumn>
    } else{
      return  <TableHeaderColumn key={Math.random()} dataField={value.field} filter={{ type: 'TextFilter', delay: 1000 }}> {value.name}</TableHeaderColumn>
    }
  })
 }

  render() {
    let { name } = this.props;
    return (
      <div className="statistics">
        <h1 className="title">{name}</h1>
        <BootstrapTable data={this.products} striped={true} hover={true} cellEdit={this.cellEditProp} selectRow={this.selectRowProp} >
          {this.renderColumn()}
        </BootstrapTable>
      </div>
    );
  }
}
