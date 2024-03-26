import React, { Component } from "react";
import "../App.css";

export default class Propsinclasscomponent extends Component {
  constructor() {
    super();
    this.state = {
      id: 100,
      name: "bilal",
      age: 20,
    };
  }

  render() {
    return (
      <div className="App">
        Props in class component
        <Student std={this.state}></Student>
        <button
          onClick={() =>
            this.setState({ ...this.state, name: "javed", id: 200, age: 35 })
          }
        >
          click me
        </button>
      </div>
    );
  }
}

class Student extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <p>student id:{this.props.std.id}</p>
        <p>student name:{this.props.std.name}</p>
        <p>student age:{this.props.std.age}</p>
      </div>
    );
  }
}

/**
 * passing props class to class component
 */
