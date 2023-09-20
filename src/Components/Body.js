import { useState } from "react";
import restaurantList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";





const Body=()=>{
   let newList =[
   { "info": {
        "id": "55051",
        "name": "Reddy's ",
        "cloudinaryImageId": "fogfnatzbqcn5nytgb7e",
        "locality": "Laxminagar",
        "areaName": "Dharampeth",
        "costForTwo": "₹140 for two",
        "cuisines": [
        "South Indian",
        "Beverages"
        ],
        "avgRating": 4.6}},
        { "info": {
            "id": "55052",
            "name": " Gokul",
            "cloudinaryImageId": "fogfnatzbqcn5nytgb7e",
            "locality": "Laxminagar",
            "areaName": "Dharampeth",
            "costForTwo": "₹350 for two",
            "cuisines": [
            "South Indian",
            "Beverages"
            ],
            "avgRating": 4.2}},
            { "info": {
                "id": "55053",
                "name": " Brindavan ",
                "cloudinaryImageId": "fogfnatzbqcn5nytgb7e",
                "locality": "Laxminagar",
                "areaName": "Dharampeth",
                "costForTwo": "₹650 for two",
                "cuisines": [
                "South Indian",
                "Beverages"
                ],
                "avgRating": 3.6}},
                { "info": {
                    "id": "55054",
                    "name": " Restaurant",
                    "cloudinaryImageId": "fogfnatzbqcn5nytgb7e",
                    "locality": "Laxminagar",
                    "areaName": "Dharampeth",
                    "costForTwo": "₹950 for two",
                    "cuisines": [
                    "South Indian",
                    "Beverages"
                    ],
                    "avgRating": 1.6}}
    
   ]
    const[restList,updateRestList]=useState(restaurantList);
   
    return (
     <div className="body">
     {/* <div className="search">
     <h3>Seacrh</h3>
     </div> */}
     <div className="filter">
     <button className="filter-btn" onClick={()=>{

 let newRestList=restList.filter((res)=>res.info.avgRating >4);
 updateRestList(newRestList);

     


      
     }}>click to see the top rated restaurant</button>

     </div>
     <div className='reastaurant-container'>

     {restList.map((restaurant, index) => (
          <RestaurantCard key={restaurant.info.id} restaurantData={restaurant}/>
     ))}
   

       
     </div>

     </div>   
    )
}
export default Body;