interface CounterProps {
  count: number;
  handleIncrement?: () => void;
  handleDecrement?: () => void;
}

export const CounterTwo = (props: CounterProps) => {
  return (
    <div>
      <h1>Counter Two</h1>
      <p>{props.count}</p>

      <button onClick={props.handleIncrement}>Increment</button>
      <button onClick={props.handleDecrement}>Decrement</button>
    </div>
  );
};
