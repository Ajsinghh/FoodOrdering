import { BrowserRouter } from "react-router-dom";
import appStore from "../../utilities/appStore";
import Header from "../Header"
import{render,screen} from "@testing-library/react"
import { Provider } from "react-redux";
import "@testing-library/jest-dom"

 // This is called unit testing
 it("Should render a header component with cart button",()=>{
     render(
       <BrowserRouter>
         <Provider store={appStore}>
           <Header />
         </Provider>
       </BrowserRouter>
     );

     const cartText = screen.getByRole("button");

     expect(cartText).toBeInTheDocument();
 })

 it("should ")