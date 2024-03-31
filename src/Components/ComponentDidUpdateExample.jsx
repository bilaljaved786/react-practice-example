import React, { Component } from "react";
import "../App.css";

export default class ComponentDidUpdateExample extends Component {
  constructor() {
    super();

    this.state = {
      name: "bilal",
      age: 20,
    };

    console.log("constructor called");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate called");
    return true;
  }

  // render method run before componentDidUpdate method when states changes
  componentDidUpdate(preProps, preStates, snapshot) {
    console.log("componentDidUpdate called");

    // As we get preprops,prestate,snapShot in the argument list
    console.log(preStates.name, this.state.name);

    if (preStates.name === this.state.name) {
      alert("states are equal now");
    }
  }

  componentDidMount() {
    console.log("componentDidMount called");
  }

  render() {
    console.log("render called");
    return (
      <div className="App">
        <h1>component Did Update Example</h1>
        <span>name : {this.state.name}</span> <br />
        <button onClick={() => this.setState({ name: "javed" })}>
          click me
        </button>
      </div>
    );
  }
}

/**
 * componentdidUpdate method takes three parameters (preProps,preStates,snapshot)
 * snapshot will be the argument that return from the function named is "getSnapshotBeforeUpdate"
 * componentdidUpdate will run when states or props will be updated of the component
 * ShouldComponentUpdate() method bydefault return false (if we define it only) and then the component is not render itslf we need to return true implicitly from the method
 * shouldComponentUpdate() method run before the [render method and componentDidUpdate method]
 * shouldComponentUpdate() method should return true or false (default is undefined)
 * if we update the state inside the componentDidUpdate method without condition it becomes infinite loop
 * ShouldComponentUpdate() will ask you need to update the component on the states change or not
 * always change state inside the componentDidUpdate method with a condition other will be infinite loop
 */
