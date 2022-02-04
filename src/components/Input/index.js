import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super();
    this.state = {
      firstName: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      firstName: event.target.value,
    });
  }

  render() {
    console.log("this.state.firstName", this.state.firstName);
    return (
      <>
        <label>Please enter your first Name</label>
        <input onChange={this.handleInputChange} value={this.state.firstName} />
      </>
    );
  }
}

export default Input;
