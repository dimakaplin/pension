import React, { Component } from 'react';
import './App.css';
const items = {name: 'pupkin'};
class FullResult extends Component {
  constructor({props}) {
    super({props});
    this.age = props.name;
    this.state = {
      result: false,
      age: 0,
      smoking: 0,
      alco: 0,
      today: new Date()
    };
  }
  alertResult() {
    if (this.state.value === true) {
    return <div>Меня зовут не дима каплин а {this.age}</div>}
  }
  calcButtonClick = () => {this.setState({result: !this.state.result})}
  render() {
    return (
      <div className = 'central'>
        {this.alertResult()}
        <button onClick = {this.calcButtonClick}>жми</button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="background">
        <FullResult props = {items}/>
      </div>
    );
  }
}

export default App;
