import React, { Component } from "react";
import "../App.css";

export default class Statewithclasscomponent extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="App">
        Statewithclasscomponent
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click
        </button>
      </div>
    );
  }
}

/**
 * Example using states in class component's
 */
