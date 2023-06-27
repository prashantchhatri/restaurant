import RestaurantCard from "./RestaurantCard"; //default import
// import restList from '../utils/mockData';
import { useState, useEffect } from "react"; //named import
import Shimmer from "./Shimmer";

const Body = () => {
  let [listOfRestaurant, setListOfRestaurant] = useState([]);
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    getSwiggyData();
  }, []);

  async function getSwiggyData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.8386481&lng=78.7733286&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await data.json();
    // console.log(result.data.cards[2].data.data.cards);
    setListOfRestaurant(result?.data?.cards[2]?.data?.data?.cards); //optional chaining
  }
  // console.log(listOfRestaurant.length == 0);
  //conditional rendering
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            let restraurant = listOfRestaurant.filter((res) =>
              res.data.name.includes(searchText)
            );
            setListOfRestaurant(restraurant);
          }}
        >
          Search
        </button>
      </div>

      <div className="filter-buttons">
        <button
          className="filter-rating"
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
          className="filter-delivery-time"
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
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
