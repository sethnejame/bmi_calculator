import React, { Component } from "react";
import DisplayResult from "./components/DisplayResult";
import MethodSelect from "./components/MethodSelect";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: "",
      height: "",
      method: "metric",
      unitHeight: "(cm)",
      unitWeight: "(kg)"
    };
  }

  methodChange = (method) => {
    this.setState({method: method.target.value})
    if(method === "metric" ) {
      this.setState({unitHeight: "(cm)", unitWeight: "(kg)"})
    } else {
      this.setState({unitHeight: "(inches)", unitWeight: "(lbs)"})
    }
    console.log(this.state.method)
  }

  render() {
    return (
      <div className="bmiContainer">
        <h2>BMI Calculator</h2>
        <div>
          <MethodSelect 
            method={this.state.method}
            methodChange={this.methodChange}
          />
        </div>

        <div>
          <label>Weight{this.state.unitWeight}</label>
          <input
            name="weight"
            value={this.state.weight}
            onChange={e => this.setState({ weight: e.target.value })}
          />
        </div>

        <div>
          <label>Height{this.state.unitHeight}</label>
          <input
            name="height"
            value={this.state.height}
            onChange={e => this.setState({ height: e.target.value })}
          />
        </div>

        <DisplayResult weight={this.state.weight} height={this.state.height} />
      </div>
    );
  }
}

export default App;
