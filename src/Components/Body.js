import { useEffect, useState } from "react";
//import restaurantList from "../utils/mockData";
import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {API_URL} from '../utils/constants';
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";






const Body=()=>{


    //Array destructuring....
    const[restList,updateRestList]=useState([]);
    const[filterRestList,updateFilterRestList]=useState([]);
    const[searchText,setSearchText]=useState("");

    const RestaurantCardVeg =withVegLabel(RestaurantCard);
    //retuns the array..1->state variable and 2->function to update the state variable
//console.log(useState(restaurantList));

// console.table(restList);

//other way to write the useState line...
              //One-Way
  //  const arr=useState(restaurantList);
 // const[restList,updateRestList]=arr;
            //second way

 //   const arr=useState(restaurantList);
 //    const restList=arr[0];
 //    const updateRestList=arr[1];
   

// console.log("Body Rendering");


 //useEffect()

 useEffect(()=>{
    fetchData();
 },[]);

 const fetchData = async ()=>{
    const data = await fetch(API_URL);
    const json =await data.json();

    //optional chaining...
    
    updateRestList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    updateFilterRestList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 
}
//checking the network connection status...

const status=useOnlineStatus();

if(status==false) 
return (
<h1>404: User Teleported to Another Dimension 🚀</h1>
);

// console.log(restList);
//Conditional Rendering...

return restList.length==0 ?(<Shimmer/>) :  (
     <div className="bg-zinc-100 rounded-lg">
     
     <div className="filter flex">
     <div className="search">
     <input type='text' className='border-black m-4' placeholder="name of the hotel" value={searchText} 
     onChange={(e)=>{
        setSearchText(e.target.value);
     }}
     ></input>
     <button className="m-4 px-2 bg-blue-400 text-cyan-50 py-2 rounded-lg"
    onClick={
        ()=>{
            const filterRestList=restList.filter(
                (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                updateFilterRestList(filterRestList);
        }
    }
     >Search</button>
     </div>
     <button className="m-4 px-2 bg-purple-500 text-white rounded-lg" onClick={()=>{

 let newRestList=restList.filter((res)=>res.info.avgRating >4);
 updateFilterRestList(newRestList);

     

}}>click to see the top rated restaurant</button>

     </div>
     <div className='reastaurant-container flex flex-wrap'>
  
     {filterRestList.map((restaurant, index) => (
      <Link key={restaurant.info.id} to={'/restaurants/'+restaurant.info.id} className='restaurant-card-link'>
      {restaurant.info.veg?<RestaurantCardVeg restaurantData={restaurant}/>: <RestaurantCard  restaurantData={restaurant}/>} 
     </Link>   
     ))}
   

       
     </div>

     </div>   
    )
}
export default Body;
////using filterRestList to enable seacrh functionality...