import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    useEffect( () => { 
        getRestaurantMenu();
    },[]);

    const [resInfo, setResInfo] = useState(null);

    const getRestaurantMenu  = async () => {
        const data = fetch (
                'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.8386481&lng=78.7733286&restaurantId=249642&catalog_qa=undefined&submitAction=ENTER'
            );

        const json = await (await data).json();
        // console.log(json.data.cards[0].card.card.info);
        setResInfo(json.data);
    }

    if (resInfo == null) return <Shimmer/>;

    const { name, avgRating, costForTwoMessage, cuisines } = resInfo?.cards[0]?.card?.card?.info;
    const itemsMenu = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[1]?.itemCards;
    // console.log(itemsMenu);
    return (
        <div className="menu">
            <h1> { name } </h1>
            <h2> Average rating : {avgRating} </h2>
            <h2> cost For Two : {costForTwoMessage} </h2>
            <h2> cuisines: {cuisines.join(', ')} </h2>
            <h2>Menu</h2>
            <ul>
                {itemsMenu.map((item) => (
                    <li key={item.card.info.id }> { item.card.info.name } :  Rs {item.card.info.price / 100 }</li>
                ))}
            </ul>

        </div>
    );
};

export default RestaurantMenu;