import { rest_img_cdn } from "../utils/globalVariable";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, avgRating, deliveryTime, cuisines, costForTwo, sla } = resData;
    

    return(
        <div className="m-6 p-6 w-[270px] rounded-lg bg-gray-100 hover:shadow-lg hover:bg-gray-200">
            <img
                className="rounded-lg"
                alt="res-logo"
                src={ rest_img_cdn + props.resData.cloudinaryImageId}
            />
            <h3 className="py-2 font-bold text-lg"> {name}</h3>
            <h4> { avgRating } Stars</h4>
            <h4> { sla.deliveryTime } MIN</h4>
            <h4> { cuisines.join(', ') }</h4>
            <h4> { costForTwo } </h4>
        </div>
    )
}

export default RestaurantCard;