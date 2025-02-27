import { render, screen } from "@testing-library/react"
import Counter from "./Counter"
import user from "@testing-library/user-event"

describe("Counter",()=>{
    
    // Testing if component Counter renders correctly 
    test("Renders correctly",()=>{
       render(<Counter/>)
       const countEle = screen.getByRole('heading')
       expect(countEle).toBeInTheDocument()
       const incBtnEle = screen.getByRole("button",{name:"Increment"})
       expect(incBtnEle).toBeInTheDocument()
    })

    // Testing initial state of the component 
    test("renders a count of 0",()=>{
        render(<Counter/>)
        const countEle = screen.getByRole("heading")
        expect(countEle).toHaveTextContent("0")   // Initially state count is 0 so the countEle holding <h1> element must have innter text "0". 
    })

    // Testing user interaction of button click increment count 
    test("renders a count of 1 after clicking the increment button", async ()=>{

        user.setup()   // Initilize instance user-event 

        render(<Counter/>)   // Craeting virtual DOM for testing

        const incBtnEle = screen.getByRole("button",{name:"Increment"})  // Finds the increment button which user will interact with

         await user.click(incBtnEle)   // Stimulate the user click on the increment button 

         const countEle = screen.getByRole("heading")   // The display element on which the state shown in the UI

         expect(countEle).toHaveTextContent("1")  // Testing the assertion that clicking the button correctly updated the state from 0 to 1.

    })

    test("renders a count of 2 after clicking the increment button twice", ()=>{
        
    })


})

// Here in <Counter/> component we have a button click which will increment the count state by 1 so we need to test if state is getting updated and new UI renders correctly.

// To stimulate user interaction 1st we need to create instance of user-event using "user.setup()". Then we can stimulate user clicking on increment button using "await user.click(incBtnEle);". Here all user-event API are asyncronous. 

// This above simulates a real user clicking the button, triggering a state change in the component.