import Contact from "../Contact"
import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom"

describe("All testcases of Contact Us page",()=>{
    //we can use test or it keyword
it("Should load contact us page",()=>{
    render(<Contact/>)
    
    //Quering
    const heading = screen.getByRole("heading");
   
    //Assertion
    expect(heading).toBeInTheDocument();
})

test("Should load two input boxes",()=>{
    render(<Contact />)

    //Quering
    const inputBoxes = screen.getAllByRole("textbox");

    //Assertion
    expect(inputBoxes.length).toBe(2);
})
})

