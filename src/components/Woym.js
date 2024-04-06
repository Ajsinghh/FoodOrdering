import { CDN_URL } from "../utilities/constants";
import {useState,useEffect} from "react";
import Shimmer_dish from "./Shimmer_dish"

const Dishes = ({ dishObj }) => {
  const { imageId } = dishObj;
  return (
    <div className="dishes">
      <img src={CDN_URL + imageId} />
    </div>
  );
};
const Header1 = () => {
  const [allDishes, setAllDishes] = useState([]);
  useEffect(()=>{
    fetchData();
  },[])
  const fetchData = async ()=>{
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9009877&lng=80.2279301&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
      setAllDishes(json.data.cards[0].card.card.imageGridCards.info)
  }
  
  return allDishes.length === 0? <Shimmer_dish/> : (
    <div id="header1">
      {/* <Dishes dishObj={dishList[0]} />
      <Dishes dishObj={dishList[1]} /> */}
      {allDishes.map((dish) => (
        <Dishes key={dish.id} dishObj={dish} />
      ))}
    </div>
  );
};
//what's on your mind(Woym)
const Woym = () => {
  return (
    <div id="woym">
      <h1>What's on your mind</h1>
      <Header1 />
      <div className="underline"></div>
    </div>
  );
};

export default Woym;
