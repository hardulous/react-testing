import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("GetByRole", () => {
  test("renders correctly", () => {
    render(<Application />); // Creating virtual DOM for testing component

    const nameEle = screen.getByRole("textbox", {
      name: "Name", // Here now refining the search and get the element based on accessible value
    }); // Finds an input field (with role "textbox").
    expect(nameEle).toBeInTheDocument(); // Here testing if a input or textarea is found inside component .

    const jobLocationElem = screen.getByRole("combobox"); // Finds a dropdown/select box.
    expect(jobLocationElem).toBeInTheDocument(); // Test passes if a <select> or <input list> exists.

    const termsEle = screen.getByRole("checkbox"); // Finds a checkbox input.
    expect(termsEle).toBeInTheDocument(); // Test passes if a checkbox exists.

    const subBtnEle = screen.getByRole("button"); // Finds a button.
    expect(subBtnEle).toBeInTheDocument(); // Test passes if a button exists or Test fails if no button exists.

    const bioEle = screen.getByRole("textbox", {
      name: "Bio",
    }); // Here finding the element with role textbox and has a accesible name Bio
    expect(bioEle).toBeInTheDocument(); // Test passes if a textarea with label "Bio" exists or Test fails if not exists.

    // const pageHeading = screen.getByRole("heading",{
    //     name:"Job Application Form"
    // });
    // expect(pageHeading).toBeInTheDocument();

    // const sectionHeading = screen.getByRole("heading",{
    //     name: "Section 1"
    // });
    // expect(sectionHeading).toBeInTheDocument();

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const nameEle2 = screen.getByLabelText("Name", {
      selector: "input",
    }); // Here find the label element based on text content "Name" and return the form element associated with the label and using selector the form element must be "input" and other than it will be ignored
    expect(nameEle).toBeInTheDocument(); // Testing assertion

    const termEle = screen.getByLabelText(
      "I agree to the terms and conditions"
    ); // Here find the label element based on text content and return the form element associated with the label
    expect(termEle).toBeInTheDocument(); // Testing assertion

    const nameEle3 = screen.getByPlaceholderText("Fullname"); // Here find the form element based on placeholder attribute "Fullname"
    expect(nameEle3).toBeInTheDocument();

    const paraEle = screen.getByText("All Fields Are Mandatory", {
      exact: false,
    }); // Here get the element based on text content
    expect(paraEle).toBeInTheDocument();

    const paraEle2 = screen.getByText("Please", {
      exact: false,
    }); // Here get the element based on text content and text matching is not strict which is allowing partial and case-insensitive matches.
    expect(paraEle2).toBeInTheDocument();

    const nameEle4 = screen.getByDisplayValue("Aman Bisht"); // Here finds the element who's current value is "Aman Bisht"
    expect(nameEle4).toBeInTheDocument();

    const img = screen.getByAltText("a person with a laptop"); // Here getting the element which has alt attribute with value as "a person with a laptop"
    expect(img).toBeInTheDocument();

    const closeEle = screen.getByTitle("close"); // Finds the element that has title attribute with value as "close"
    expect(closeEle).toBeInTheDocument();

    const customEle = screen.getByTestId("custom-element"); // Here find the element that have "custom-element" as id in data-testid attribute
    expect(customEle).toBeInTheDocument();
  });
});

// Here in above we are checking multiple element to be present inside the component using getByRole() query. To know default role of various HTML elements go to website "https://www.w3.org/TR/html-aria/#docconformance"

// Now we will add a <textarea/> on our component which also has a role of "textbox" similar to <input type="text" />, We will get error "Multiple element have a same role of textbox", To resolve the issue where multiple element have same role this is where "name" option of getByRole() comes to the picture.

// Here "name" option takes regex as a value which can be the, The label of a form element, The text content of a button and The value of aria-label attribute.

// Here now to distinguish the input from textarea we see the input has a label with value as "Name" which will be the value for name option.

// The 2nd option is "level" which is used for heading roles (h1-h6). Example: level: 2 for <h2>. Let say in our component we have two heading tag h1 and h2, Now if we test the heading element in our test case we will get error "Found multiple elements with the role "heading" ", This because all element h1-h6 are of role "heading". We can solve it using "name" option and pass accesible value as "Job Application Form" and "Section 1" but when multiple headings exist, and you need a specific level we use "level" option that can have value 1 or 2 for h1 and h2 and go till value of 6 for h6.

// The getByLabelText("label") return the form element associated with the label having text content as "label", It also work with wrapper label that is form element as a child of label which is the "term and condition" input inside <label></label>.

// The getByLabelText("label",options) also accept 2nd argument called options object to refine the search, One of the option is selector.

// The selector is used for ex we have 2 element which have same label "Name" so in this case we will get error "Found multiple elements with the text of: Name". So in selector we will pass "input" so that the form element associated with label "Name" must be input

// Sometime we need to query element based on placeholder attribute for this we use getByPlaceholderText("placeholder"), In our application.tsx component we have a input with placeholder "Fullname" so we can get it.

// Here in order to work with element content text node like p, h1,h2, div, span etc. We use getByText("text") and find the element based on text. In Application.tsx component we have a <p></p> element which we can get using its text content

// The getByText(text, options) also accept a options which take property like "selector" similar to the one in getByLabelText() and other property called "exact" which controls whether text matching should be strict (default) or flexible. exact: true (Requires an exact match (case-sensitive)) and false (Allows partial and case-insensitive matches.)

// Sometime we test element in component based on current value like input based on value prop on it for this we use "getByDisplayValue(value)" that return element based on current value on it. In Application.tsx component we have <input/> with value props as "Aman Bisht" now we can get this input using this value.

// Sometime we have element which accept attribute like "alt" like img, input, area etc to show some alternate text while content is not available, So we can get these element using "getByAltText(altText)".  In Application.tsx component we have <img/> tag that have some alt text.

// Sometime we use "title" attribute on element like span etc to create tooltip and we can get the element using titile attribute using "getByTitle()" query method.

// Sometime we stuck in scenario where no query method like getByRoles, getByText etc are working so in this case at last we can rely on "getByTestId(testId)" to return element based on data-testid attribute value passed to it.
