import { useState } from "react";
import ItemList from "./ItemList";



const RestaurantCategory=({data,showItems,setShowIndex})=>{
   
 
    const handleClick=()=>{
setShowIndex();
    }
  
    return (
        <div className="">
            {/*Header  */}
<div className="w-6/12 mx-auto my-4 bg-gray-200 p-4 shadow-md">
   <div className="flex justify-between cursor-pointer" onClick={handleClick}> 
   <span className="text-lg font-semibold">{data.title}({data.itemCards.length})</span>
    <span>🔻</span>
   </div>
    
  {/*Body  */}
   {showItems && <ItemList items={data.itemCards}/> } 
</div>

           

            
        </div>

    )
}

export default RestaurantCategory;