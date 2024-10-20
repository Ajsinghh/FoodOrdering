import { addItem } from "../utilities/cartSlice";
import { DISH_URL } from "../utilities/constants";
import { useDispatch } from "react-redux";


const ItemList = ({ vegFilter }) => {
    const dispatch = useDispatch();
    
    const handleAddItem= (item) => {
       dispatch(addItem(item));
    }
  return (
    <div>
      {vegFilter.map((d,index) => {return (
        <div className="px-4 border-b-4 my-4 flex flex-row justify-between pb-4" key={index}>
          <li className="w-3/5" key={d.card.info.id}>
            <div>
              <span className="font-medium">{d.card.info.name} - </span>
              <span>Rs.{d.card.info.price / 100}</span>
            </div>
            <div>{d?.card?.info?.description}</div>
          </li>
          <div className="relative">
            <div
              className="absolute border text-white bg-black p-1 rounded-md left-1/2 -translate-x-1/2"
              onClick={() => handleAddItem(d)}
            >
              add+
            </div>
            <img
              className="w-40 rounded-lg"
              alt="Image not Available"
              src={DISH_URL + d?.card?.info?.imageId}
            />
          </div>
        </div>)
      })}
    </div>
  );
};

export default ItemList;
