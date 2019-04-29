import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Multiplication.scss';

class Multiplication extends Component {
  constructor(props) {
    super(props)
    this.multipleItems = []
    console.log(props)
    for (let i = 1; i < 10; i++) {
      this.multipleItems.push(
        <div class="Multiplication-main--content">
          <p>{this.props.number} x {i} = {this.props.number * i}</p>
        </div>
      )
    }
  }
  render() {
    return (
      <div class="Multiplication">
        <div class="Multiplication-main">
          <div class="Multiplication-main--title">
            <p>{this.props.number}</p>
          </div>
          {this.multipleItems}
        </div>
      </div>
    )
  }
}

let listItems = [];
for (let i = 2; i < 10; i++) {
  listItems.push(<Multiplication number={i} />)
}
// console.log(listItems)
class MultiplicationList extends Component {
  render() {
    console.log("MultiplicationList")
    return <div class="container">
      <div class="title-block">
        <div class="title-block__bar">
          <div class="title-block__bar--line">
            <div class="line"></div>
          </div>
        </div>
        <div class="title-block__text center">
          <h1>九九乘法表</h1>
          <h3>MULTIPLICATION CHART</h3>
        </div>
        <div class="title-block__bar">
          <div class="title-block__bar--line">
            <div class="line"></div>
          </div>
        </div>
      </div>
      {listItems}
    </div>;
  }
}

export default MultiplicationList

ReactDOM.render(<MultiplicationList />, document.getElementById('root'));

