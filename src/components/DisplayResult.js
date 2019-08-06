import React, { Component } from "react";
import { bmiCalculation } from "../modules/bmiCalculator";

class DisplayResult extends Component {
  calculate() {
    var weight = this.props.weight;
    var height = this.props.height;
    var method = this.props.method;

    return bmiCalculation(weight, height, method);
  }

  render() {
    return <div id="response">{this.calculate()}</div>;
  }
}

export default DisplayResult;
