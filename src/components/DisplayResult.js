import React, { Component } from 'react';
import { bmiCalculation } from '../modules/bmiCalculator';

class DisplayResult extends Component {
  calculate() {
    var weight= this.props.weight;
    var height= this.props.height;

    return bmiCalculation(weight, height);
  }

  render() {
    return (
      <div id='response'>
        {this.calculate()}
      </div>
    )
  }
}

export default DisplayResult