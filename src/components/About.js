import User from "./user";
import UserClassPractice from "./UserClassPractice";

import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>Hello I am Anusha Amin Whatsup </h1>
        <div>
          {/* <User name={"Anusha"} location={"Udupi"} /> */}
          <UserClassPractice name={"AnushaClass"} location={"UdupiClass"} />
          <UserClassPractice name={"AnushaClass"} location={"UdupiClass"} />
        </div>
      </div>
    );
  }
}

export default About;
