import React, { Component } from 'react';
import InputFields from './Components/InputFields';
import BMIResult from './Components/BMIResult';
import About from './Components/About';
import './styles/main/App.css';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import Close from 'material-ui/svg-icons/navigation/close';

const style={
  position: 'fixed',
  top: '20px',
  right: '12px',
  zIndex: '99'
}

const numeral = require('numeral');

class App extends Component {
  constructor(){
    super();
    this.state = {
      navOpen: false,
      resultBoxShow: false,
      bmiInfo: { }
    }
    this.setHeight = this.setHeight.bind(this);
    this.setWeight = this.setWeight.bind(this);
    this.generateBMI = this.generateBMI.bind(this);
  }
  handleNavToggle = () => this.setState({navOpen: !this.state.navOpen});
  handleNavClose = () => this.setState({navOpen: false});
  setWeight(e){
    this.setState({weight: e.target.value});
  }
  setHeight(e){
    this.setState({height: (e.target.value)});
  }

  render() {
    return (
      <div className="App">

        <FloatingActionButton onClick={this.handleNavToggle} style={style}><Menu /></FloatingActionButton>
        <Drawer 
          docked={false}
          width={200}
          containerClassName="drawer"
          openSecondary={true}
          open={this.state.navOpen}
          onRequestChange={(open) => this.setState({navOpen: open})}
        >
          <IconButton onClick={this.handleNavClose}><Close /></IconButton>
          <About />
        </Drawer>

        <div className="wrapper">
          <div className="bmi-container">
            <h2>BMI Calculator</h2>
            <div className="hr"></div>
            <InputFields 
              onWeightChange={this.setWeight}
              onHeightChange={this.setHeight}
              generateBMI={this.generateBMI}
            />
          </div>
          <BMIResult 
            resultBoxShow={this.state.resultBoxShow}
            backgroundColor={this.state.bmiInfo.resultColor}
            condition={this.state.bmiInfo.condition}
            bmi={this.state.bmi}
          />
        </div>


      </div>
    );
  }


  generateBMI(){
    const { weight, height } = this.state;
    let bmi = weight / (height * height) * 10000;
    bmi = numeral(bmi).format('(0.0)');
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
}

export default App;
