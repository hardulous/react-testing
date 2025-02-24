import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "Javascript"];

  // Test case for checking if component renders correctly
  test("renders correctly", () => {
    render(<Skills skills={skills} />); // Creating virtual DOM of the component with prop skills
    const listEle = screen.getByRole("list"); // Here getting the element who's role is "list"
    expect(listEle).toBeInTheDocument(); // Asserting if element exist in DOM or not
  });

  // Test case to check if all the list items passed as a prop are also rendered in the UI
  test("renders list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemEles = screen.getAllByRole("listitem"); // Here getting the array of element who's role is "listItem"
    expect(listItemEles).toHaveLength(skills.length); // Asserting if array of element found from virtual DOM has length of props skill length, Means no of li element exists in DOM == skills length
  });

  // Here as on initital state "isLoggedIn" will be false so testing is Login button is renders on UI or not
  test("renders Login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  // Now based on initial state of "isLoggedIn" we want to test the "Start learning" button should not be present in the UI
  test("Start learning button is not rendered",()=>{
    render(<Skills skills={skills} />);

    // const startLearningBtn = screen.getByRole("button", {name: "Start learning"})  // Here the problem is the "Start learning" button is not available on initial state so we will get error here 

    const startLearningBtn = screen.queryByRole("button", {name: "Start learning"})  // Not the return can be either HTMLElement || nulll

    expect(startLearningBtn).not.toBeInTheDocument()  // here by "not" we are testing the reverse of assertion "toBeInTheDocument()", So it will test the element should not be in the DOM
  })

});

// Here we have a Skills.tsx component which accept array of skills as a prop and render it on UI. Now we will test whether individual skill ui is present in DOM or not for this we can not use "getByRole()" as it returns only single element hence we will use "getAllByRole()" to get array of element in the UI.

// Now we have a scenario in "Skill.tsx" component where based on "isLoggedIn" state we will show either "Start learning" or "Login" button. So we want to test based on initial state as "isLoggedIn" is false the "Start learning" button should not be present in the ui.

// Here we can not test the " expect(startLearningBtn).not.toBeInTheDocument() " as an error is coming by "getByRole()" method before it so to fix this we will use "queryByRole()" method which will return null instead of error if not such element is found inside DOM.

// So to ensure or test if element is not present in the DOM we will use "queryBy*" and "queryAllBy*".

 