import { CDN_URL } from "../utilities/constants";
import { restList } from "../utilities/mockData";
import { useState } from "react";

const RestCards = ({ resObj }) => {
  const { info } = resObj;
  return (
    <div className="restcards" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-img"
        alt="res-img"
        src={CDN_URL + info.cloudinaryImageId}
      />
      <h3>{info.name}</h3>
      <div id="rating-time">
        <h3>{info.avgRating}</h3>
        <h3>{info.sla.slaString}</h3>
      </div>
      <h4>{info.cuisines.join(", ")}</h4>
    </div>
  );
};

const Restaurants = () => {
  //This is the local state variable -Super powerful variable
  // It can only be changed by function(2nd argument in array) named setReslist
  const [resList, setResList] = useState([...restList]);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter(
              (rest) => rest.info.avgRating > 4
            );
            setResList(filteredList);
            console.log(restList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div id="restaurants">
        {resList.map((res) => (
          <RestCards key={res.info.id} resObj={res} />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
