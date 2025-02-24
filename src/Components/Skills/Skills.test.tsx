import { logRoles, render, screen } from "@testing-library/react";
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

  test("Manual query renders",()=>{
    const {container} = render(<Skills skills={skills}/>)  // Create virtual DOM and also return the rendered output which contain "container" propertry which is the reference to the root DOM node of the rendered component. 
    const heading = container.querySelector("#skill")   // Here directly querying the DOM to get element
    expect(heading).toBeInTheDocument()   // Testing the assertion 
  })

  // 
  test("Start learning button is eventually displayed",async ()=>{
    const view = render(<Skills skills={skills}/>)

    // logRoles(view.container)  // Take root component and logs all ARIA roles in that component with innert text as name.
    
    // screen.debug()  // Logs the virtual DOM at this point in time

    // const startLearningBtn = screen.getByRole("button",{name: "Start learning"})

    const startLearningBtn = await screen.findByRole("button",{name: "Start learning"}, {timeout: 2000}) // Here now wait for sometime (default 1000ms) before find the element inside DOM. Now the timeout is 2000ms means findBy* will wait for 2000ms before finding the element in DOM.  

    // screen.debug()  // Logs the virtual DOM at this point in time after above promise is resolved 

    expect(startLearningBtn).toBeInTheDocument()  // Here initially isLoggedIn is false so this assertion will fail, To solve it we have to use findBy* query 
  })

});

// Here we have a Skills.tsx component which accept array of skills as a prop and render it on UI. Now we will test whether individual skill ui is present in DOM or not for this we can not use "getByRole()" as it returns only single element hence we will use "getAllByRole()" to get array of element in the UI.

// Here now in "Skills.tsx" component we will create a scenario where after some time the isLoggedIn state will change and another button will be shown in the UI. So writing test case using getBy* and queryBy* will not work as they does not wait for an element to appear on the screen.

// Here if in "Skill.tsx" we change the timeout from 500ms to 1001ms the test case will fail because findBy* could not find the element within the 1000ms. When writing test case we may come across the need to wait longer for this we can pass 3rd argument in findyBy* which is an object that takes "timeout" property to mention how long the findBy* should wait before finding the element inside the virtual DOM. 

// Here we can also write test case using manual query that is using "querySelector" DOM API. The render() from RTL return the rendered output which we can use to query the DOM directly instead of rely on built-in RTL query methods.

// To understand debugging lets create a failed test case by changing "screen.findByRole("button",{name: "Start learning"}" to "Start learn" which will give no element found error in the terminal. 

// Sometime it is helpful to visualize DOM tree before writing the assertion. For this we can use "screen.debug()" from RTL which will logs the virtual DOM state at given point in time. By looking at virtual DOM different state at different time can help us understand why test case is failing

// Another debug method is "logRoles(element)"  that logs all ARIA roles present in a given element. This helps when your getByRole query is failing because the expected role might be different from what is actually in the DOM.

