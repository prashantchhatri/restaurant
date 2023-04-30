import { rest_img_cdn } from "../utils/globalVariable";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, avgRating, deliveryTime, cuisines, costForTwo } = resData.data;

    return(
        <div className="res-card">
            <img
                className="res-logo"
                alt="res-logo"
                src={ rest_img_cdn + props.resData.data.cloudinaryImageId}
            />
            <h3> {name}</h3>
            <h4> { avgRating } Stars</h4>
            <h4> { deliveryTime } MIN</h4>
            <h4> { cuisines.join(', ') }</h4>
            <h4>₹ { costForTwo / 100 } FOR TWO</h4>
        </div>
    )
}

export default RestaurantCard;