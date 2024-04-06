import { CDN_URL } from "../utilities/constants";
import { useEffect, useState } from "react";
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
  // It can only be changed by function(2nd argument in array) named
  console.log("Re-render");
  const [resList, setResList] = useState([]);
  const [filteredresList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9009877&lng=80.2279301&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setResList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredResList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredList = resList.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredResList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter(
              (rest) => rest.info.avgRating > 4
            );
            setResList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div id="restaurants">
        {filteredresList.map((res) => (
          <RestCards key={res.info.id} resObj={res} />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
