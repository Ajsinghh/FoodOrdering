import { useEffect, useState } from "react";
import Shimmer_dish from "./Shimmer_dish";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utilities/useRestaurantMenu";
const RestaurantsMenu = () => {
  // const [resInfo , setResInfo] = useState(null);
  // const [filteredResInfo , setFilteredResInfo] = useState([]);
  const { resId } = useParams();
  console.log(resId);
  const [resInfo, setResInfo] = useRestaurantMenu(resId);
  const [filteredResInfo, setFilteredResInfo] = useState([]);
  // useEffect(()=>{
  //     fetchMenu();
  // },[]);

  // const fetchMenu = async ()=>{
  //     const data =
  //       (await fetch(MENU_API + resId +"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"));
  //    const json = await data.json();
  //    console.log(json);
  //    setResInfo(json?.data);
  //    setFilteredResInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards);
  // }
  useEffect(() => {
    if (resInfo !== null) {
      setFilteredResInfo(
        resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
          .card.card.itemCards
      );
    }
  }, []);
  console.log(resInfo);

  if (!filteredResInfo || filteredResInfo.length === 0) return <Shimmer_dish />;

  const { id, name, city, cuisines, cost } =
    resInfo?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
      .card;

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      const filteredList = itemCards.filter(
        (item) => item.card.info.isVeg === 1
      );
      setFilteredResInfo(filteredList || []);
    } else {
      setFilteredResInfo(
        resInfo.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card
          .itemCards || []
      );
    }
  };
console.log("hey");
  return (
    <div className="restaurants-menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {cost}
      </p>
      <h1>Menu</h1>
      <label className="toggle-switch">
        <input type="checkbox" onChange={handleCheckboxChange} />
        <span className="slider"></span>
      </label>
      <span className="toggle-feature">Only Veg</span>
      <ul>
        {filteredResInfo.map((items) => (
          <li key={items.card.info.id}>
            {items.card.info.name} -{" Rs."}
            {items.card.info.defaultPrice
              ? items.card.info.defaultPrice / 100
              : items.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantsMenu;
