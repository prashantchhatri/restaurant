import RestaurantCard from './RestaurantCard';
import restList from '../utils/mockData';
import { useState } from "react";


const Body = () => {

    let [listOfRestaurant, setListOfRestaurant] = useState(restList);
    return(
        <div className="body">
            <div className="filter-buttons">
                <button 
                className='filter-rating' 
                onClick={() => {
                    const topRatedRestraurant = listOfRestaurant.filter(
                        (res) => res.data.avgRating >=4
                        ); 
                        setListOfRestaurant(topRatedRestraurant);               
                    }
                }
                >
                    Top Rated Restaurant
                </button>


                <button
                    className='filter-delivery-time'
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
                {listOfRestaurant.map((restaurant) => <RestaurantCard key={restaurant.data.id} resData={restaurant}/>)}
            </div>
        </div>
    )
}

export default Body;