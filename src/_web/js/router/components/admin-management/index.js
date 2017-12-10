import React, { Component } from 'react'
import ItemManagement from './item-management';
import "./index.css";

export default class Management extends Component {

  constructor(props){
    super(props);
    this.state={
      statisticalName : "Quản lý sản phẩm",
    }
  }
  renderItem(){
    let listItem =["Quản lý sản phẩm",
    "Quản lý comment","Quản lý người dùng",
    "Quản lý Shop"];
   return listItem.map((value, index)=>{
      return <div className="menu-item" key={Math.random()} onClick={()=>{
        this.setState({statisticalName : value});
      }} >
      <img src={require("../../../../../asset/icons/manage.jpg")}/>
      <h5>{value}</h5>
    </div>
    });
  }

  render() {
    return (
        <div className="app">
      <div className="header" >
      <h1 onClick={() =>{
          this.props.history.goBack();
        }}  >Back</h1>
          <div style ={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'center',
            paddingRight :'25%'
          }}>
        <img src={require("../../../../../asset/icons/manage.jpg")} alt="icon"/>
        <h1 className="title">Management</h1>
        </div>
      </div>
      <div className="container">
        <div className="menu">
            {this.renderItem()}
        </div>
        <div className="statistics-container">
            <ItemManagement name ={this.state.statisticalName} {...this.props}/>
        </div>
      </div>
    </div>
    )
  }
}
