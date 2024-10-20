import { useEffect, useState } from "react";
import Shimmer_dish from "./Shimmer_dish";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utilities/useRestaurantMenu";
import RestaurantsCategories from "./RestaurantsCategories";

const RestaurantsMenu = () => {

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [categories ,setCategories] = useState([]);
  const [vegChecked, setVegChecked] = useState(false);
  const[showIndex, setShowIndex] = useState(null);

  useEffect(()=>{
    if (resInfo !== null) {
       const temp =  resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
        return (
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
      );  
      setCategories(temp);
    }
  },[resInfo])

  if (categories.length === 0) return <Shimmer_dish />;


  const { id, name, city, cuisines, cost } =
    resInfo?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {      
      setVegChecked(true);
    } else {
      setVegChecked(false);
    }
  };
  

  return (
    <div className="restaurants-menu flex flex-col items-start justify-start  border m-8">
      <div className="flex justify-center border w-full py-4 bg-slate-50">
        <h1 className="text-xl text-center font-bold">{name}</h1>
      </div>
      <div className="flex gap-24 w-full">
        <p>
          Cuisines:-
          {cuisines.join(", ")}
        </p>
        <div>
          <label className="toggle-switch">
            <input type="checkbox" onChange={handleCheckboxChange} />
            <span className="slider"></span>
          </label>
          <span className="toggle-feature">Only Veg</span>
        </div>
      </div>
      <div className="w-full">
        {categories.map((c , index) => {
          return <RestaurantsCategories 
          key={index} 
          c={c} 
          vegChecked={vegChecked} 
          expanded={index === showIndex ? true : false}
          setShowIndex = {(expanded) => expanded ? setShowIndex(null) : setShowIndex(index)}/>;
        })}
      </div>
    </div>
  );
};

export default RestaurantsMenu;
