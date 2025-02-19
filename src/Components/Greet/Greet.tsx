type GreetProp = {
  name?: string;
};

const Greet: React.FC<GreetProp> = ({ name }) => {
  return <div>Hello {name}</div>;
};

export default Greet;

// A component for testing whether it renders correctly.
