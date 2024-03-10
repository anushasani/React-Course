import User from "./user";
import UserClassPractice from "./UserClassPractice";

const About = () => {
  return (
    <div>
      <h1>Hello I am Anusha Amin Whatsup </h1>
      <div>
        <User name={"Anusha"} location={"Udupi"} />
        <UserClassPractice name={"AnushaClass"} location={"UdupiClass"} />
      </div>
    </div>
  );
};

export default About;
