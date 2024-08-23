import {LOGO_URL} from "../utilities/constants.js"
import {Link} from "react-router-dom"
import UserContext from "../utilities/UserContext.js"
import {useContext} from "react"
import { useSelector } from "react-redux"


const Header = () => { 
  const {loggedInUser} = useContext(UserContext);
  const cartItems = useSelector((store)=> store.cart.items)
  return (
    <div className="flex justify-between items-center m-5 border-2 bg-teal-100">
      <div className="logoContainer">
        <Link to="/">
          <img className="w-24" src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav-items ">
        <ul className="flex justify-evenly gap-x-10 mr-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart">Cart-{cartItems.length}</Link>
          </li>
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header