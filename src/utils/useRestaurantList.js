import { useState, useEffect } from "react";
import { API_DATA } from "../utils/constants";

const useRestaurantList = () => {
  const [resList, setResList] = useState([]);

  const fetchData = async () => {
    const data = await fetch(API_DATA);
    const json = await data.json();
    setResList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return resList;
};

export default useRestaurantList;
