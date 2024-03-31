import React, { Component } from "react";
import "../App.css";

export default class GetDerivedStateFromProps extends Component {
  render() {
    return (
      <div className="App">
        <h1>Get Derived State From Props</h1>

        {/* passing props to child */}
        <Child car="Mustang-2022" />
      </div>
    );
  }
}

class Child extends Component {
  constructor() {
    super();

    this.state = {
      carName: "BMW",
    };
  }

  // getDerivedStateFromProps is a life cycle method and its automatically run before render life cycle mehod
  static getDerivedStateFromProps(props, states) {
    console.log("getDerivedStateFromProps called", props);
    return { carName: props.car };
  }

  // run after the render life cycle method
  componentDidMount() {
    console.log("componentDidMount called");
  }

  // render life cycle method
  render() {
    console.log("render called");
    return (
      <div>
        <h1>Child Component</h1>
        <h2>car name is : {this.state.carName}</h2>
      </div>
    );
  }
}
