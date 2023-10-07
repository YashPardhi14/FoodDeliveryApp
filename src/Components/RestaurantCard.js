import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";



const RestaurantCard=(props)=>{
    //destructure..
    const{restaurantData}=props;
    const {loggedInUser}=useContext(UserContext);

    //optional chaining....
    const{
        name,cuisines,costForTwo,avgRating,sla
    }=restaurantData?.info;
    return (
        <div className='restaurant-card m-4 p-4 bg-neutral-200 h-[450px] w-[330px] rounded-lg shadow-lg  ' >
        <img className='rest-pic rounded-lg my-4 mx-6 w-64 h-52 hover:scale-110' alt='rest-logo' src={CDN_URL+restaurantData.info.cloudinaryImageId}/>
            <h3 className="font-bold text-center">{name}</h3>
            <h5>{cuisines.join(',')}</h5>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} star</h4>
            <h4>{sla.deliveryTime} minutes</h4>
            <h4 className="font-extrabold">User Name : {loggedInUser}</h4>
        </div>
    )
}


export const withVegLabel=(RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
                <label className="absolute  bg-green-500 text-white w-10 p-1 rounded-md">veg</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;