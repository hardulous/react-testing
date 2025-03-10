import { act, render, renderHook } from "@testing-library/react";
import useCounter from "./useCounter";

describe("useCounter", () => {
  test("should render the initital count", () => {
    // render(useCounter)  // Gets error

    const { result } = renderHook(useCounter); // Unlike regular component which can be asserted using screen, Hooks do not have any DOM elements infact renderHook will wrap the hook in a function component, invokes the hook and returns an object

    // .current is a reference to the latest value returned by your renderHook on which we can apply assertion on
    expect(result.current.count).toBe(0); // Asserting if initial value of custom hook is 0
  });

  test("should accept and render the same initial count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    }); // Here passing the 2nd argument to pass props to the custom hooks

    expect(result.current.count).toBe(10); // Asserting if count has value same as the one pass in as a prop
  });

  test("should increment the count", () => {
    const { result } = renderHook(useCounter); // Here starting with initial count of 0
    // result.current.increment()   // Call the function to increment the count we expect the count become 1 but test will fail because When testing, code that causes React state updates should be wrapped into act(...):

    act(() => {
      result.current.increment();   // This call will lead to state update so wrap in act
    });

    expect(result.current.count).toBe(1);   // After state update is done then applying assertion 
  });

  test("should decrement the count", () => {
    const { result } = renderHook(useCounter); // Here starting with initial count of 0

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(-1);
  });
});

// Here the render() of RTL expect to receive a react node which can be rendered on the UI. But custom hook does not return a jsx so error and hooks cannot be called outside the function component. To solve this we will use "renderHook "

// Now sometime we have a function call in custom hook that make changes to the state as changes to state are asyn operation so in order to call these asyn function we use "Act" (arrange-act-assert) utility. The act utility is used to ensure that all updates related to state or effects are applied before assertions are made. This prevents warnings and ensures tests run correctly.

// React updates (like setState) should be wrapped in act() to ensure all effects and re-renders are processed before making assertions. Without act, React might batch state updates asynchronously, causing incorrect test results or warnings.
