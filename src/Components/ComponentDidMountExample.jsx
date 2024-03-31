import React, { Component } from "react";
import "../App.css";

export default class ComponentDidMountExample extends Component {
  constructor() {
    super();

    this.state = {
      name: "bilal",
      age: 20,
    };

    console.log("constructor called");
  }

  componentDidMount() {
    console.log("componentDidMount called");
  }

  render() {
    console.log("render called");
    return (
      <div className="App">
        <h1>Component Did Mount Example</h1>
        <button onClick={() => this.setState({ name: "javed" })}> click</button>
      </div>
    );
  }
}

/**
 * at first call print messages to console [constructor called,render called, componentDidMount called]
 * on update the state of the component then [render called] only
 * Should not update the state of the component in the render mehhod
 */
