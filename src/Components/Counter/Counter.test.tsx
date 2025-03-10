import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import user from "@testing-library/user-event";

describe("Counter", () => {
  // Testing if component Counter renders correctly
  test("Renders correctly", () => {
    render(<Counter />);
    const countEle = screen.getByRole("heading");
    expect(countEle).toBeInTheDocument();
    const incBtnEle = screen.getByRole("button", { name: "Increment" });
    expect(incBtnEle).toBeInTheDocument();
  });

  // Testing initial state of the component
  test("renders a count of 0", () => {
    render(<Counter />);
    const countEle = screen.getByRole("heading");
    expect(countEle).toHaveTextContent("0"); // Initially state count is 0 so the countEle holding <h1> element must have innter text "0".
  });

  // Testing user interaction of button click increment count
  test("renders a count of 1 after clicking the increment button", async () => {
    user.setup(); // Initilize instance user-event

    render(<Counter />); // Craeting virtual DOM for testing

    const incBtnEle = screen.getByRole("button", { name: "Increment" }); // Finds the increment button which user will interact with

    await user.click(incBtnEle); // Stimulate the user click on the increment button

    const countEle = screen.getByRole("heading"); // The display element on which the state shown in the UI

    expect(countEle).toHaveTextContent("1"); // Testing the assertion that clicking the button correctly updated the state from 0 to 1.
  });

  test("renders a count of 2 after clicking the increment button twice", async () => {
    user.setup();
    render(<Counter />);

    const incBtnEle = screen.getByRole("button", { name: "Increment" });

    for (let i = 0; i < 2; i++) {
      await user.click(incBtnEle);   // Here instead of calling multiple time just put in loop which will execute 2 times stimulating 2 times click on increment button 
    }

    expect(screen.getByRole("heading")).toHaveTextContent("2");
  });

  // Testing user keyboard interaction on input type number
  test("renders a count of 10 after clicking the set button", async () => {
    user.setup(); // Here creating user instance
    render(<Counter />); // Creating virtual DOM
    const inpEle = screen.getByRole("spinbutton"); // To set the amount we 1st need the input element
    await user.type(inpEle, "10"); // To set the value on the input by stimulating type event .type(input-element, value in string)
    expect(inpEle).toHaveValue(10); // Asserting if input element has value of 10
    const setBtn = screen.getByRole("button", { name: "Set" }); // To stimulate click event get the Set button 1st
    await user.click(setBtn); // Stimulate the click event on button
    const countEle = screen.getByRole("heading");
    expect(countEle).toHaveTextContent("10"); // Asserting if value on heading has changed or not
  });

  // Testing the tab keyboard interaction by user
  test("elements are focused in the right order", async () => {
    user.setup();
    render(<Counter />);
    const amountInp = screen.getByRole("spinbutton");
    const setBtn = screen.getByRole("button", { name: "Set" });
    const incBtn = screen.getByRole("button", { name: "Increment" });

    await user.tab(); // User click on tab
    expect(incBtn).toHaveFocus(); // 1st tab in <Counter/> should focus on increment button
    await user.tab();
    expect(amountInp).toHaveFocus(); // 2nd tab in <Counter/> should focus on input element
    await user.tab();
    expect(setBtn).toHaveFocus(); // 3rd tab in <Counter/> should focus on Set button
  });

  // Utility API of keyboard
  test("render utlity API", async () => {
    user.setup();
    render(<textarea defaultValue={"Hello World!"} />);
    const inpEle = screen.getByRole("textbox");
    await user.clear(inpEle); // Stimulate the user clearing the content of input element
    expect(inpEle).toHaveValue(""); // Asserting if input elemet is now empty

    render(
      <select multiple>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </select>
    );

    const listbox = screen.getByRole("listbox"); // Getting the select element
    await user.selectOptions(listbox, ["1", "C"]); // Stimulating the user select the option with either value 1 or label C
    expect(listbox).toHaveValue(["1", "3"]); // Asserting if user selected the option with value 1 and 3

    await user.deselectOptions(listbox, "C"); // Stimulating the user deselect the option with label C
    expect(listbox).toHaveValue(["1"]); // Asserting if user have new selected options after deselection

    render(
      <div>
        <label htmlFor="file-uploader">Upload File:</label>
        <input id="file-uploader" type="file" />
      </div>
    );

    const file = new File(["hello"], "hello.png", { type: "image/png" }); // Creating a file to upload
    const inputEle: any = screen.getByLabelText(/upload file/i); // Getting the input element to upload file on
    await user.upload(inputEle, file); // Stimulating the user upload file on input element

    expect(inputEle.files).toHaveLength(1); // Asserting if .files array of input type file contain 1 file
    expect(inputEle.files[0]).toStrictEqual(file); // Asserting if uploaded file is same as one that is used for upload
    expect(inputEle.files[0].name).toBe("hello.png"); // Asserting if uploaded file has a name as the one use for upload
  });
});

// Here in <Counter/> component we have a button click which will increment the count state by 1 so we need to test if state is getting updated and new UI renders correctly.

// To stimulate user interaction 1st we need to create instance of user-event using "user.setup()". Then we can stimulate user clicking on increment button using "await user.click(incBtnEle);". Here all user-event API are asyncronous.

// This above simulates a real user clicking the button, triggering a state change in the component.

// Now we have added input element on which user can perform onChange interaction so we will now test keyboard interaction of user.

// To stimulate the type event on input "user-events" provide user.type(input-element, value), which will set the given value on the input element like actual user typed on it.

// Here we can also test the user tab press event using user.tab() which stimulate the user click on tab key.

// Here sometime when using RTl with typescript the element we get using the query methof of screen object sometimes does not contain properties which they actually have like "selected", "files" etc. So in this case use type as "any" to avoid compile time ts error

//
