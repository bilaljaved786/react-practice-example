import React, { Component } from "react";
import "../App.css";

export default class GetSnapShotBeforeUpdate extends Component {
  constructor() {
    super();

    this.state = {
      count: 1,
    };
  }

  // this function run before the componentDidUpdate
  // return snapshot value that is received by the componentDidUpdate method in the thord argument
  getSnapshotBeforeUpdate(preProps, preStates) {
    console.log("getSnapshotBeforeUpdate", preStates, this.state.count);
    return preStates.count * 10;
  }

  // this method run after the render method
  // this method run after the getsnapshotbeforeupdate method
  componentDidUpdate(preProps, preStates, snapshot) {
    console.log("componentDidUpdate", snapshot);
  }

  render() {
    return (
      <div className="App">
        <h1>GetSnapShotBeforeUpdate</h1>

        {/* update state on click */}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          click me
        </button>
      </div>
    );
  }
}
