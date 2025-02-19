import { render, screen } from "@testing-library/react";
import Greet from "./Greet/Greet";

test("Greet renders correctly", () => {
  render(<Greet />); // Creating virtual DOM of component we want to test
  const textEle = screen.getByText("Hello"); // Checking in virtual DOM whether link with name "hello" exist or not
  expect(textEle).toBeInTheDocument(); // Here testing the assertion whether "hello" link exist in DOM or not
});

/* CUSTOM TEST 

Here if we run above test everything will be correct and output "Greet renders correctly" will be shown, But keep in mind test that never fails is useless. The goal of test is to fail when application misbehaves.

Now if we change the test name from "Hello" to "hello" and run the test we will see the test fails with reason shown in understandable format. 

" Unable to find an element with the text: Hello. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible. "


*/

// Test group "Greet Test" in which we have group 2 test together.
describe("Greet Test", () => {
  test("Greet test-1", () => {
    render(<Greet />);
    const textEle = screen.getByText("Hello");
    expect(textEle).toBeInTheDocument();
  });

  // test("Greet test-2", () => {
  //   render(<Greet name="aman" />);
  //   const textEle = screen.getByText("Hello aman");
  //   expect(textEle).toBeInTheDocument();
  // });

  // Here the describe() can be nested as well
  describe("Nested Greet Test", () => {
    test("Greet test-2", () => {
      render(<Greet name="aman" />);
      const textEle = screen.getByText("Hello aman");
      expect(textEle).toBeInTheDocument();
    });
  });
});
