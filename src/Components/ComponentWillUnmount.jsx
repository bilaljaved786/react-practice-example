import React, { Component } from "react";
import "../App.css";

export default class ComponentWillUnmount extends Component {
  constructor() {
    super();
    this.state = {
      flag: true,
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Component Will Unmount</h1>
        <h4>{this.state.flag ? <Child /> : null}</h4>
        <button onClick={() => this.setState({ flag: false })}>Hide</button>
        <button onClick={() => this.setState({ flag: true })}>Show</button>
      </div>
    );
  }
}

class Child extends Component {
  componentWillUnmount() {
    console.log("componentWillUnmount called");
  }

  render() {
    console.log("child component render called");
    return <div>Child Component</div>;
  }
}

/**
 * when the component is removed from the DOM, at that time componentWillUnmount method will call
 * When we hide [display:none] the component, then it means the component completely remove from the DOM
 */
