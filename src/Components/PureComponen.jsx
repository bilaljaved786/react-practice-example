import React, { Component, PureComponent } from "react";
import "../App.css";

// # If extends from the {component} class then it will re-render with the same state
// # If extends from the {PureComponent} class then it will not re-render with the same state
// # Using states in this example to demonstrate PureComponent feature, it is the same with the props as well
export default class PureComponen extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    console.log("pure component render", this.state.count);
    return (
      <div className="App">
        <h1>PureComponen</h1>
        <button onClick={() => this.setState({ count: 1 })}>Click</button>
      </div>
    );
  }
}

/**
 * PureComponent feature is used in class component
 * PureComponent is a feature in React that prevents the component from re-rendering if its props and states have not changed
 * The equivelent of pureComponent feature in functional component is [React.memo]
 */
