import { useEffect, useState } from "react";
import ItemList from "./ItemList";
//This component is controlled component beacuse its state is being controled by a parent or ancestor
//We can also say that, we have lifted up the state of the component beacuse state needed to be shared with every siblings
//So, we lift the state up to the closest common  ancestor to make it a sole source of truth
const RestaurantsCategories = ({ c, vegChecked,expanded , setShowIndex }) => {
  const { itemCards } = c.card.card;
  const [vegFilter, SetVegFilter] = useState(itemCards);

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
            {c.card.card.title} ({vegFilter.length})
          </h1>
          <span className="font-bold">{expanded ? "-" : "+"}</span>
        </div>
        <ul className="flex flex-col">
          {expanded && <ItemList vegFilter = {vegFilter}/>
              
            }
        </ul>
      </div>
    </div>
  );
};

export default RestaurantsCategories;
