import RestaurantCard from "./RestaurantCard"; //default import
// import restList from '../utils/mockData';
import { useState, useEffect } from "react"; //named import
import Shimmer from "./Shimmer";

const Body = () => {
  let [listOfRestaurant, setListOfRestaurant] = useState([]);
  let [filteredRestraurant, setFilteredRestraurant] = useState([]);
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    getSwiggyData();
  }, []);

  async function getSwiggyData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.8386481&lng=78.7733286&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await data.json();
    
    setListOfRestaurant(result?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants); //optional chaining
    setFilteredRestraurant(result?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
  }


  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black-100"
            placeholder="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 bg-green-200 m-4"
            onClick={() => {
              let filteredRestraurant = listOfRestaurant.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestraurant(filteredRestraurant);
            }}
          >
            Search
          </button>

          <button
          className="px-4 py-1 bg-gray-200 m-4"
          onClick={() => {
            const topRatedRestraurant = listOfRestaurant.filter(
              (res) => res.data.avgRating >= 4
            );
            setListOfRestaurant(topRatedRestraurant);
          }}
        >
          Top Rated Restaurant
          </button>

          <button
            className="px-4 py-1 bg-gray-200 m-4"
            onClick={() => {
              const topRatedRestraurant = listOfRestaurant.filter(
                (res) => res.data.deliveryTime <= 30
              );
              setListOfRestaurant(topRatedRestraurant);
            }}
          >
            Delivery within 30min
          </button>
        </div>
      </div>


      <div className="flex ">

      </div>
      <div className="flex flex-wrap m-4 p-4 content-center">
        {filteredRestraurant.map((restaurant) => (
          // {console.log(restaurant.info)}
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
