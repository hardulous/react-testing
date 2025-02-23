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
});

// Here we have a Skills.tsx component which accept array of skills as a prop and render it on UI. Now we will test whether individual skill ui is present in DOM or not for this we can not use "getByRole()" as it returns only single element hence we will use "getAllByRole()" to get array of element in the UI.

//
