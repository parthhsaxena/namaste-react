import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const API_DATA =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  const fetchData = async () => {
    const data = await fetch(API_DATA);

    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[1 ]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Ternary operator-- ? for then and : for else
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
         <div className="search">
          <input type="text" className="search-box "/>
          <button>Search</button>
         </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
        ;
      </div>
    </div>
  );
};

export default Body;
