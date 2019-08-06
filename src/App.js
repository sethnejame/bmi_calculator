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
    };
  }

  methodChange = (event) => {
    this.setState({method: event.target.value})
  }

  componentDidUpdate

  render() {
    return (
      <div className="bmiContainer">
        <h1>BMI Calculator</h1>
        <div style={{ paddingBottom: 10 }} >
          <MethodSelect 
            method={this.state.method}
            onChangeValue={this.methodChange}
          />
        </div>

        <div>
          <label>Weight{this.state.method === "metric" ? "(kg)" : "(lbs)"}</label>{"\n"}
          <input
            name="weight"
            value={this.state.weight}
            onChange={e => this.setState({ weight: e.target.value })}
          />
        </div>

        <div>
          <label>Height{this.state.method === "metric" ? "(cm)" : "(inches)"}</label>{"\n"}
          <input
            name="height"
            value={this.state.height}
            onChange={e => this.setState({ height: e.target.value })}
          />
        </div>

        <DisplayResult weight={this.state.weight} height={this.state.height} method={this.state.method} />
      </div>
    );
  }
}

export default App;
