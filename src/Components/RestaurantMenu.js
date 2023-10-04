import { useEffect, useState } from "react";
import ShimmerMenu from "./ShimmerMenu";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";




const RestaurantMenu = ()=>{

  
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




    return (
        
        <div>
            <h1>{name}</h1>
          <h2>{costForTwoMessage}</h2>
            
           
        <h2>{cuisines.join(',')}</h2>
        
        <h1>Menu</h1>
       <ul>
    {itemCard.map((item)=>(
        <li key={item.card.info.id}>{item.card.info.name+"  ==> ₹ "} {item.card.info.price/100  || item.card.info.finalPrice/100} </li>
    ))}
</ul> 




        </div>
    )
}

export default RestaurantMenu;