import React, { Component } from 'react';
import './App.css';
const items = {name: 'pupkin'};
class FullResult extends Component {
  constructor({props}) {
    super({props});
    this.age = props.name;
    this.state = {value: true};
  }
  CalcAges() {
    if (this.state.value === true) {
    return <div>Меня зовут не дима каплин а {this.age}</div>}
  }
  handleButtonClick = () => {this.setState({value: !this.state.value})}
  render() {
    return (
      <div className = 'central'>
        {this.CalcAges()}
        <button onClick = {this.handleButtonClick}>жми</button>
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
