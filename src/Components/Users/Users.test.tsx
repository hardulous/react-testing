import { render, screen } from "@testing-library/react"
import Users from "./Users"

describe("Users",()=>{
    test("renders correctly", ()=>{
        render(<Users/>)
        const textEle = screen.getByText("Users")
        expect(textEle).toBeInTheDocument()
    })
})

// 