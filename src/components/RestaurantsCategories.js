import { useEffect, useState } from "react";
import { DISH_URL } from "../utilities/constants";
//This component is controlled component beacuse its state is being controled by a parent or ancestor
//We can also say that, we have lifted up the state of the component beacuse state needed to be shared with every siblings
//So, we lift the state up to the closest common  ancestor to make it a sole source of truth
const RestaurantsCategories = ({ c, vegChecked,expanded , setShowIndex }) => {
  const { itemCards } = c.card.card;
  const [vegFilter, SetVegFilter] = useState(itemCards);
  // const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (vegChecked) {
      const temp = itemCards.filter((i) => {
        return i?.card?.info?.isVeg == 1;
      });
      SetVegFilter(temp);
    } else {
      SetVegFilter(itemCards);
    }
  }, [vegChecked, itemCards]);

  const toggleExpression = () => {
    setShowIndex(expanded);
  };

  return (
    <div>
      <div
        className="border rounded-md m-auto flex flex-col bg-gray-50 justify-between shadow-lg w-6/12 my-4 py-4 pl-4 pr-4"
        onClick={toggleExpression}
      >
        <div className="flex flex-row justify-between">
          <h1 className="text-center font-medium">
            {c.card.card.title} ({itemCards.length})
          </h1>
          <span className="font-bold">{expanded ? "-" : "+"}</span>
        </div>
        <ul className="flex flex-col">
          {expanded &&
            vegFilter.map((d) => {
              {
                return (
                  <div className="px-4 border-b-4 my-4 flex flex-row justify-between pb-4">
                    <li className="w-3/5" key={d.card.info.id}>
                      <div>
                        <span className="font-medium">
                          {d.card.info.name} -{" "}
                        </span>
                        <span>Rs.{d.card.info.price / 100}</span>
                      </div>
                      <div>{d?.card?.info?.description}</div>
                    </li>
                    <div>
                      <img
                        className="w-40 rounded-lg"
                        alt="Image not Available"
                        src={DISH_URL + d?.card?.info?.imageId}
                      />
                    </div>
                  </div>
                );
              }
            })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantsCategories;
