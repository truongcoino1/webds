import React, { Component } from 'react'
import StatisticalProduct from './statistical-product';
import "./index.css";

export default class ListProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {
      statisticalName: "Thống kê phân bổ sản phẩm",
    }
    console.log(this.props);
  }
  renderItem() {
    let listItem = ["Thống kê phân bổ sản phẩm",
      "Thống kê số lượng hệ thống", "Thống kê doanh thu từng shop",
      "Thống kê doanh thu chợ", "Thống kê người dùng mua thường xuyên"];
    return listItem.map((value, index) => {
      return <div className="menu-item" key={Math.random()} onClick={() => {
        this.setState({ statisticalName: value });
      }} >
        <img src={require("../../../../../asset/icons/packing.png")} />

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
        }}  >Back </h1>
          <div style ={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'center'
          }}>
       <img src={require("../../../../../asset/icons/packing.png")} alt="icon" />
          <h1 className="title">Statistical</h1>
        </div>
        <h1 onClick={() =>{
          this.props.history.push('/admin');
        }} >Next </h1>
      </div>
      <div className="container">
        <div className="menu">
          {this.renderItem()}
        </div>
        <div className="statistics-container">
          <StatisticalProduct name={this.state.statisticalName} />
        </div>
      </div>
    </div >
    )
  }
}
