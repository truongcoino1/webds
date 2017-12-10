import React, { Component } from "react";
import "./item-management.css";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';



export default class ItemManagement extends Component {
  constructor(props) {
    super(props);
    this.data = [{field : 'id', name : "ID User"}, {field : 'name', name : "Name"},
     {field : 'age', name : "Age"}];
    this.products = [{
      id: 1,
      name: "a",
      age: 120
    }, {
      id: 2,
      name: "b",
      age: 80
    }];
   
    this.cellEditProp = {
      mode: 'click',
      blurToSave: true,
      beforeSaveCell: this.beforeSaveCell
    };
    console.log(this.props);
    this.options = {
      onRowClick: function(row) {
        console.log(row);
      },
      onRowDoubleClick: function(row) {
        alert(`You double click row id: ${row.id}`);
      }
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
        <BootstrapTable data={this.products} striped={true} hover={true} cellEdit={this.cellEditProp} options={ this.options } >
          {this.renderColumn()}
        </BootstrapTable>
      </div>
    );
  }
}
