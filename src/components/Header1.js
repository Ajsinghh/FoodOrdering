import { CDN_URL } from "../utilities/constants";
import { useState } from "react";

const Dishes = ({ dishObj }) => {
  const { imageId } = dishObj;
  return (
    <div className="dishes">
      <img src={CDN_URL + imageId} />
    </div>
  );
};
const Header1 = ({jsonData}) => {

  const [allDishes , setAllDishes] = useState(jsonData.data.cards[0].card.card.imageGridCards.info)
  return  (
    <div id="header1">
      {/* <Dishes dishObj={dishList[0]} />
      <Dishes dishObj={dishList[1]} /> */}
      {allDishes.map((dish) => (
        <Dishes key={dish.id} dishObj={dish} />
      ))}
    </div>
  );
};

export default Header1