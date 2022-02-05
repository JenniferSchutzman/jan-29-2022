import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      touched: {
        firstName: false,
        lastName: false,
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleOnBlur(name) {
    this.setState({
      touched: { ...this.state.touched, [name]: true },
    });
  }

  render() {
    return (
      <>
        <label>Please enter your first Name</label>
        <input
          onChange={this.handleInputChange}
          value={this.state.firstName}
          onBlur={() => this.handleOnBlur("firstName")}
        />
        {this.state.touched.firstName === true && !this.state.firstName ? (
          <div>Sorry you need to enter a first name!</div>
        ) : (
          ""
        )}
        <br />
        {/* <label>Please enter your last Name</label>

        <input
          onChange={this.handleInputChange}
          // value={this.state.lastName}
          onBlur={() => this.handleOnBlur("lastName")}
        /> */}
      </>
    );
  }
}

export default Input;
