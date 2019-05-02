import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import styles from './Multiplication.module.scss';

class Multiplication extends Component {
  constructor(props) {
    super(props)
    this.multipleItems = []
    // console.log(props)
    for (let i = 1; i < 10; i++) {
      this.multipleItems.push(
        <div key={i} className={styles.Multiplication_main_content}>
          <p>{this.props.number} x {i} = {this.props.number * i}</p>
        </div>
      )
    }
  }
  render() {
    return (
      <div className={styles.Multiplication}>
        <div className={styles.Multiplication_main}>
          <div className={styles.Multiplication_main_title}>
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
  listItems.push(<Multiplication key={i} number={i} />)
}
// console.log(listItems)
const  MultiplicationList = () => (
    // console.log("MultiplicationList")
     <div className={styles.container}>
      <div className={styles.title_block}>
        <div className={styles.title_block_bar}>
          <div className={styles.title_block_bar_line}>
            <div className={styles.line}></div>
          </div>
        </div>
        <div className={styles.title_block_text}>
          <h1>九九乘法表</h1>
          <h3>MULTIPLICATION CHART</h3>
        </div>
        <div className={styles.title_block_bar}>
          <div className={styles.title_block_bar_line}>
            <div className={styles.line}></div>
          </div>
        </div>
      </div>
      {listItems}
    </div>
)

export default MultiplicationList

// window.addEventListener("load", () => {
//   let myComponent = <MultiplicationList/>;
//   ReactDOM.render(myComponent, document.getElementById('root'));
// });

