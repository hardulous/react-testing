import { render, screen } from "@testing-library/react";
import CounterTwo from "./CounterTwo";
import userEvent from "@testing-library/user-event";

describe("CounterTwo", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={0} />);
    const textEle = screen.getByText("Counter Two");
    expect(textEle).toBeInTheDocument();
  });

  test("handlers are called", async () => {

    userEvent.setup()

    // Creating mock function in place of handler
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();

    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );   // Here passing mock functions as handlers will make sure the handler functions are rendered inside virtual DOM for querying button

    const incBtn = screen.getByRole('button', {name:"Increment"})
    const decBtn = screen.getByRole('button', {name:"Decrement"})

     await userEvent.click(incBtn)
     await userEvent.click(decBtn)

     // Here below asserting if the handler functions are called or not
     expect(incrementHandler).toHaveBeenCalledTimes(1)
     expect(decrementHandler).toHaveBeenCalledTimes(1)

  });
});

// Here we are testing Counter Two component which is props driven which have count and 2 handler functions.

// But when coming to testing the click of handler button we don't know what to pass in handler function as we don't know what parent function is passing it can be anything

// From testing point of view we only need to care about whether these handler functions are called when button is clicked.

// To mimic the handler functions we use "JEST MOCK FUNCTIONS API" like jest.mock() and jest.fn().
