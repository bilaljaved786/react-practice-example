import React, { Component } from "react";
import "../App.css";

export default class Constructor extends Component {
  // define constructor
  constructor() {
    // ! constructor call first
    console.log("Constructor");
    super();

    this.state = {
      name: "bilal",
      age: 20,
    };
  }

  render() {
    // ! render call after constructor
    console.log("render");
    return <div className="App">Constructor</div>;
  }
}

/**
 * constructor is a life cycle method
 * we can use it for initialization of states in class component
 * should not call the Api inside the constructor
 * we can receieve props inside the constructor state object like in that way [this.props.name]
 */
