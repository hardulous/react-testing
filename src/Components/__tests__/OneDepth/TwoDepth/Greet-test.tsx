import { render, screen } from "@testing-library/react";
import Greet from "../../../Greet/Greet";

// fit similar to .only() to run only this test case
fit("Greet __tests__ Renders", () => {
  render(<Greet />);
  const textEle = screen.getByText(/Hello/);
  expect(textEle).toBeInTheDocument();
});

// xit similar to .skip() to skip this test case 
xit("Greet __tests__ Renders", () => {
  render(<Greet />);
  const textEle = screen.getByText(/Hello/);
  expect(textEle).toBeInTheDocument();
});

// Here another file convention is to have test case in "__tests__" folder. 