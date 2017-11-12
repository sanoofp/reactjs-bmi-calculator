import React, { Component } from 'react';
import './App.css';
import InputFields from './Components/InputFields';
const numeral = require('numeral');



class App extends Component {
  constructor(){
    super();
    this.state = {
      resultBoxShow: false,
      bmiInfo: {
        
      }
    }
    this.setHeight = this.setHeight.bind(this);
    this.setWeight = this.setWeight.bind(this);
    this.generateBMI = this.generateBMI.bind(this);
  }

  setWeight(e){
    this.setState({weight: e.target.value});
  }
  setHeight(e){
    this.setState({height: (e.target.value)});
  }

  generateBMI(){
    const { weight, height } = this.state;
    let bmi = weight / (height * height) * 10000;
    bmi = numeral(bmi).format('(0.0)');
    console.log(bmi)
    this.setState({bmi: bmi, bmiInfo: this.getCondition(bmi)});
    if(this.state.resultBoxShow === false){
      this.setState({resultBoxShow: true});
    }
  }

  getCondition = (bmi) => {
    if(bmi < 15){
      return {resultColor: "#FFF8E1", condition: "Very severely underweight"}
    } else if (bmi >= 15 && bmi <= 15.9) {
      return {resultColor: "#FFECB3", condition: "Severely underweight"};
    } else if (bmi >= 16 && bmi < 18.5) {
      return {resultColor: "#FFD54F", condition: "Underweight"};
    } else if (bmi >= 18.5 && bmi < 25){
      return {resultColor: "#66BB6A", condition: "Normal (healthy weight)"};
    } else if (bmi >= 25 && bmi < 30) {
      return {resultColor: "#EF5350", condition: "Overweight"};
    } else if (bmi >= 30 && bmi < 35){
      return {resultColor: "#E53935", condition: "Moderately obese"};
    } else if (bmi >= 35 && bmi < 40) {
      return {resultColor: "#C62828", condition: "Severely obese"}
    } else {
      return {resultColor: "#D84315", condition: "Very severely obese"}
    }
  }

  render() {
    return (
      <div className="App">
        <div className="bmi-container">
          <h2>BMI Calculator</h2>
          <div className="hr"></div>
          <InputFields 
            onWeightChange={this.setWeight}
            onHeightChange={this.setHeight}
            generateBMI={this.generateBMI}
          />
          
        </div>
        <div className="bmi-container2" 
          style={{backgroundColor: this.state.bmiInfo.resultColor, opacity: `${(this.state.resultBoxShow) ? '1' : '0'}`}}>
          <p>{this.state.bmiInfo.condition}</p>
          <h1>{this.state.bmi}</h1>
        </div>
      </div>
    );
  }
}

export default App;
