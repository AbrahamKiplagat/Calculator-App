import React, { Component } from "react";
class Class_Component extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <div>
        <h3>
          Counter value is: {this.state.counter}
          <button onClick={() => this.increment()}>Increment value</button>
        </h3>
      </div>
    );
  }
}

export default Class_Component;