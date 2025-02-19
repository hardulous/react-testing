import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

// Here defining the test case similar to .test(), It is used mostly for matter of preference and readability.  If you want your test descriptions to read more like a sentence (Behavior-Driven Development - BDD style).
it("Greet Specs Renders", () => {
  render(<Greet />);
  const textEle = screen.getByText("Hello");
  expect(textEle).toBeInTheDocument();
});

// Here another file convention for creating a test file. 