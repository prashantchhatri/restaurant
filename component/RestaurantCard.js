import { rest_img_cdn } from "../utils/globalVariable";

const RestaurantCard = (props) => {
    // console.log(props.resData);
    const { resData } = props;
    const { cloudinaryImageId, name, avgRating, deliveryTime, cuisines, costForTwo } = resData;

    return(
        <div className="res-card">
            <img
                className="res-logo"
                alt="res-logo"
                src={ rest_img_cdn + props.resData.cloudinaryImageId}
            />
            <h3> {name}</h3>
            <h4> { avgRating } Stars</h4>
            <h4> { deliveryTime } MIN</h4>
            <h4> { cuisines.join(', ') }</h4>
            <h4> { costForTwo } </h4>
        </div>
    )
}

export default RestaurantCard;