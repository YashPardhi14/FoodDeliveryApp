import { useEffect, useState } from "react";
//import restaurantList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {API_URL} from '../utils/constants';
import { Link } from "react-router-dom";






const Body=()=>{


    //Array destructuring....
    const[restList,updateRestList]=useState([]);
    const[filterRestList,updateFilterRestList]=useState([]);
    const[searchText,setSearchText]=useState("");
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
  console.log(json);
}


//Conditional Rendering...

return restList.length==0 ?(<Shimmer/>) :  (
     <div className="body">
     
     <div className="filter">
     <div className="search">
     <input type='text' className="search-box" value={searchText} 
     onChange={(e)=>{
        setSearchText(e.target.value);
     }}
     ></input>
     <button className="search-btn"
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
     <button className="filter-btn" onClick={()=>{

 let newRestList=restList.filter((res)=>res.info.avgRating >4);
 updateFilterRestList(newRestList);

     


      
     }}>click to see the top rated restaurant</button>

     </div>
     <div className='reastaurant-container'>
  
     {filterRestList.map((restaurant, index) => (
      <Link key={restaurant.info.id} to={'/restaurants/'+restaurant.info.id} className='restaurant-card-link'> <RestaurantCard  restaurantData={restaurant}/></Link>   
     ))}
   

       
     </div>

     </div>   
    )
}
export default Body;
////using filterRestList to enable seacrh functionality...