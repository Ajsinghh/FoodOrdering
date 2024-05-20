import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utilities/useOnlineStatus";
import RestCards from "./RestCards";

const Restaurants = (jsonData) => {
  //This is the local state variable -Super powerful variable
  // It can only be changed by function(2nd argument in array) named

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
          setFilteredResList(filteredList);
          setFilterBtn("All Restaurants");
      }else if(filterBtn === "All Restaurants"){
        setFilteredResList(resList);
        setFilterBtn("Top Rated Restaurants")
      }
  }


  const onlineStatues = useOnlineStatus();
  if(onlineStatues === false) return <h1>Brother eww!</h1>

  return (
    <div className="body mx-16 ">
      <div className="filter my-6 flex justify-between">

        
        <div className="search ">
          <input
            type="text"
            className="search-box border-2 border-solid "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="bg-slate-300 border-black border-2 ml-4 px-2 rounded"
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
          className="filter-btn border-2 bg-slate-300 px-2 rounded-md border-black"
          onClick={handleFilterBtn}
        >
          {filterBtn}
        </button>
      </div>
      <div className="restaurants flex flex-wrap justify-between">
        {filteredResList.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            {
            <RestCards resObj={res} />
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
