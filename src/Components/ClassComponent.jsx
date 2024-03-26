import React from "react";

// Example of class component
class ClassComponent extends React.Component {
  constructor() {
    super();

    // define states in class component
    this.state = {
      name: "bilal",
      age: 14,
    };
  }

  render() {
    return <>Class Component</>;
  }
}

export default ClassComponent;
