import { useEffect, useState } from "react";
import ShimmerMenu from "./ShimmerMenu";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";




const RestaurantMenu = ()=>{
const[showIndex,setShowIndex]=useState(null)
  
const {restId}=useParams();

const restInfo=useRestaurantMenu(restId);


    if(restInfo===null) return (<ShimmerMenu/>);


    
 const {name,costForTwoMessage,cuisines,id} =restInfo?.cards[0]?.card?.card?.info;


let itemCard=null;

if(id==54604){
 itemCard=restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

} else{
     itemCard=restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;  
}

 //console.log(restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

 const categories = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cards)=>{
return cards?.card?.card?.['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"

 }
    
 )


    return (
        
        <div className="text-center">
       
            <h1 className="font-bold mt-10 text-lg">{name}</h1>
         <p className="font-medium">{cuisines.join(',')}</p>
          
          <h2 className="font-semibold">{costForTwoMessage}</h2>
            
           {/* categories accordian... */}

          { 
            categories.map((category,index)=>{

            return <RestaurantCategory key={category?.card?.card?.title} 
            data={category?.card?.card} 
            showItems={index==showIndex ?true :false} 
            setShowIndex={()=>{setShowIndex(index)}}

            />
            
 
    })
          }
       
        
    
        </div>
    )
}

export default RestaurantMenu;