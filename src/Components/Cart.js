import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";



const Cart=()=>{

const dispatch=useDispatch();

const cartItems=useSelector((store)=>store.cart.items);



const handleClearCart=()=>{
    dispatch(clearCart());
}


    return(
        <div className="text-center m-5 p-5">

        <h1 className="font-bold">Cart</h1>

        {cartItems.length==0?<h1 className="m-5 font-bold">Opss.. Your Cart Is empty,Add some food to your cart</h1>:
        <div className="w-6/12  m-auto shadow-lg">
        <button className="shadow-lg bg-red-400 m-5 p-5 text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
<ItemList items={cartItems} />

        </div>}
            
        </div>
    )
}


export default Cart;