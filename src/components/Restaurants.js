import { CDN_URL } from "../utilities/constants";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import Shimmer_dish from "./Shimmer_dish";
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

const Restaurants = (jsonData) => {
  //This is the local state variable -Super powerful variable
  // It can only be changed by function(2nd argument in array) named
  console.log("Re-render");
  const [resList, setResList] = useState(jsonData?.jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  const [filteredResList, setFilteredResList] = useState(jsonData?.jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  const [searchText, setSearchText] = useState("");
  const [filterBtn, setFilterBtn] = useState("Top Rated Restaurants")
 console.log(filteredResList);
 console.log(resList);
 console.log(jsonData);
  const handleFilterBtn = ()=>{
      if(filterBtn === "Top Rated Restaurants"){
          const filteredList = resList.filter(
            (rest) => {return rest.info.avgRating > 4}
          );
          console.log("top")
          setFilteredResList(filteredList);
          setFilterBtn("All Restaurants");
      }else if(filterBtn === "All Restaurants"){
        console.log("all")
        setFilteredResList(resList);
        setFilterBtn("Top Rated Restaurants")
      }
  }
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
          onClick={handleFilterBtn}
        >
          {filterBtn}
        </button>
      </div>
      <div id="restaurants">
        {filteredResList.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            <RestCards resObj={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
