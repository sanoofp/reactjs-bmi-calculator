import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      
    }
  }

  setWeight(e){
    this.setState({weight: e.target.value});
  }
  setHeight(e){
    this.setState({height: e.target.value});
  }

  generateBMI(){
    const { weight, height } = this.state;
    let bmi = weight / (height * height) * 10000;
    console.log(bmi);
  }

  render() {
    return (
      <div className="App">
        <div className="output">

        </div>
        <div className="bmi-container">
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="number" onChange={this.setWeight.bind(this)} placeholder="Weight (kg)"/>
          <input type="number" onChange={this.setHeight.bind(this)} placeholder="Height (m)"/>
          <input type="submit" onClick={this.generateBMI.bind(this)} value="GET BMI" />
        </form>
        </div>

      </div>
    );
  }
}

export default App;
