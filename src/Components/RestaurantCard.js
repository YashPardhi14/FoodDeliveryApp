import { CDN_URL } from "../utils/constants";



const RestaurantCard=(props)=>{
    //destructure..
    const{restaurantData}=props;

    //optional chaining....
    const{
        name,cuisines,costForTwo,avgRating,sla
    }=restaurantData?.info;
    return (
        <div className='restaurant-card'>
        <img className='rest-pic' alt='rest-logo' src={CDN_URL+restaurantData.info.cloudinaryImageId}/>
            <h3>{name}</h3>
            <h5>{cuisines.join(',')}</h5>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} star</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;