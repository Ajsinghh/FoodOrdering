import { CDN_URL } from "../utilities/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Dishes = ({ dishObj }) => {
  const { imageId } = dishObj;
  return (
      <img src={CDN_URL + imageId} className="h-auto " />  
  );
};
const Header1 = ({jsonData}) => {

  const [allDishes , setAllDishes] = useState(jsonData.data.cards[0].card.card.imageGridCards.info)
  return (
    <div className="  flex justify-normal    overflow-x-scroll scroll-smooth">
      {/* <Dishes dishObj={dishList[0]} />
      <Dishes dishObj={dishList[1]} /> */}
      {allDishes.map((dish) => (
          <Dishes key={dish.id} dishObj={dish} />
      ))}
    </div>
  );
};

export default Header1