import ItemList from "./ItemList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utilities/cartSlice";
const Cart = ()=>{
    
    const dispatch = useDispatch();

    const cartItems = useSelector((store)=>{
        return store.cart.items;
    });

    const handleClearCart = ()=>{
      dispatch(clearCart());
    }

  return (
    <div>
      <ItemList vegFilter={cartItems}/>
      <div className="flex justify-center">{ cartItems.length > 0 ? (
      <div className=" text-red-600 border-red-600 border inline p-1" onClick={handleClearCart}>
        Clear Cart
      </div>
      ):<div>No Item in Cart</div>
        }</div>
    </div>
  );
};

export default Cart;