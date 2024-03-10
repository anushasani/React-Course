// import React from "react";
// (destructing in import)
import { Component } from "react";

class userPractice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Child Construtor");
  }
  componentDidMount() {
    console.log("Child component");
  }

  render() {
    console.log("Child Render");
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Add
        </button>
        <h2>{count}</h2>
        <h1> {name}</h1>
      </div>
    );
  }
}
export default userPractice;
