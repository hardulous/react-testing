import { GreetProp } from "./Greet.types";

const Greet: React.FC<GreetProp> = ({ name }) => {
  return <div>Hello {name? name :"Guest"}</div>;
};

export default Greet;

// A component for testing whether it renders correctly.

// {name? name :"Guest"} here a branch logic if we test this component in test case without any prop name then the first "name" condition will not execute means does not get test as a result uncovered statement is created in jest test case. 