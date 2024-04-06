import React, { Component, createRef } from "react";
import "../App.css";

export default class RefWithClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      Age: 10,
    };
  }

  inputreff = createRef();

  handleInput() {
    this.inputreff.current.focus();
    this.inputreff.current.value = "bilal javeed";
  }

  render() {
    return (
      <div className="App">
        <h1>Ref With Class</h1>
        <br />
        <input type="text" placeholder="enter your name" ref={this.inputreff} />
        <br />
        <button onClick={() => this.handleInput()}>click me</button>
      </div>
    );
  }
}

/**
 * React recommended not to use CreateRef() because it slow downs the react itself (always first try to manipulate the DOM using states and props)
 * It is the same in javascript [document.getElementById()] to directly access the DOM element
 * CreateRef() disrectly manipulate the DOM
 */