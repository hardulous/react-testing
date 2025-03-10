import { render, screen } from "@testing-library/react";
import { CounterTwo } from "./CounterTwo";

describe("Counter Two", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={0} />);
    const textEle = screen.getByText("Counter Two");
    expect(textEle).toBeInTheDocument();
  });
});


// Here 
