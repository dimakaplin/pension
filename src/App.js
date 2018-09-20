import React, { Component } from 'react';
import './App.css';
const items = {name: 'pupkin'};
class FullResult extends Component {
  constructor({props}) {
    super({props});
    this.age = props.name;
    this.state = {
      result: false,
      age: '',
      sex: '',
      smoking: '',
      alco: '',
      today: new Date()
    };
  }
  alertResult() {
    if (this.state.result === false) {
    return <div>Меня зовут не дима каплин а {this.state.age} курю  ли я? {this.state.smoking}</div>}
  }
  calcButtonClick = () => {this.setState({result: !this.state.result})}
  ageInputClick = (event) => {this.setState({age: event.target.value})}
  smokingInputClick = () => {this.setState({smoking: this.selectSmoking.options.selectedIndex})}
  render() {
    return (
      <div className = 'central'>
        {this.alertResult()}
        <input id="age" type="number" range = '1' value = {this.state.age} onChange = {this.ageInputClick.bind(this)}></input>
        <select ref = {(select) => {this.selectSmoking = select;}} onChange = {this.smokingInputClick.bind(this)}>
          <option value = 'yes'>да</option>
          <option value = 'no'>нет</option>
        </select>  
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
