// import { render, screen } from "@testing-library/react"
import { render, screen } from "../../Test-util";
import Typography from "./Typography";
import { AppProvider } from "../Providers/AppProvider";

describe("Provider", () => {
  test("renders mode correctly", () => {
    //  render(<Typography/>, {
    //     wrapper: AppProvider
    //  })  // Since we are testing the component that is making use of some Provider value so using wrapper option by which it wraps the <Typography/> component with AppProvider before rendering.

    render(<Typography />);  // A custom render() in which wrapper option is pre-configured, And because of Omit of ts we can not specify wrapper option again. 

    const headingEle = screen.getByRole("heading");
    expect(headingEle).toHaveTextContent("Context Heading h1 dark");
  });
});

// Here the <Typography/> component in our application is wrapped in AppProvider context so it have access to latest context value which is palette.mode = "dark", But our test environment does not have AppProvider as a wrapper component as we rendering only "render(<Typography/>)"

// To solve this RTL also provides "wrapper" option with render() function.

// But in pratical application our majority of the components are always wrapped with Providers like, redux provider, react router provider, context provider etc. So it means when testing any component in our app we have to manually always put wrapper option in every render. so to solve this issue of repeatitive task we create "CUSTOM RENDER() method"

// A custom render() is a way to acheive a single wrapper component across all tests. RTL recommends to create a "test-utils.ts" file where we can define a custom render() that has all the providers specified with the wrapper option.
