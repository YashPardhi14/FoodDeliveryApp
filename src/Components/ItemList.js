import { CDN_URL } from "../utils/constants";




const ItemList=({items})=>{
    
    return (
<div>
   { items.map((item)=>{
    const{name,price,description ,imageId}=item?.card?.info;
        return(
<div key={item.card.info.id} className="m-2 p-4 border-b-2 text-left">
<div className="flex justify-between">


<diV className="w-9/12">
<span className="font-normal">{name} </span>
<span>- ₹ {price/100} </span>
<p className="text-xs">{description}</p>
</diV>
<div className="w-2/12">
<div className="absolute  ">
<button className="p-1 bg-white shadow-lg  m-auto rounded-lg text-green-600 ">Add +</button>
</div>
<img src={CDN_URL+imageId } alt={name} className="w-ful"></img>

</div>

</div>




</div>
        )
    })}
</div>
    )
}

export default ItemList;