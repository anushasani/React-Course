import { Component } from "react";

class userPractice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "dummmmy",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/anushasani");
    const json = await data.json();
    console.log("json", json);

    this.setState({
      userInfo: json,
    });
  }
  // when your directed another page

  componentWillUnmount() {
    console.log("directed to another page ");
  }

  render() {
    console.log("Child Render");

    const { name, location } = this.state.userInfo;
    return (
      <div>
        <h1> {name}</h1>
        <h2>{location}</h2>
      </div>
    );
  }
}
export default userPractice;
