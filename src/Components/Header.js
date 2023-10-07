import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";




const Headers=()=>{

const [btnNameReact,setBtnNameReact]=useState("LogIn");


///////when useEffect is Called...
//1.no DA==>called on every render
//2.empty DA==>called on initial render
//3.non-empty DA==>called only when the depedency changes
useEffect(()=>{
    //console.log("useEffect is called..");
},[btnNameReact])

const onlineStatus = useOnlineStatus();
 
//const userName=useContext(UserContext);

//console.log(userName); returns the object..

const {loggedInUser}=useContext(UserContext);

    return <div className="flex justify-between bg-stone-200 shadow-lg m-5 px-2 sm:bg-yellow-100 lg:bg-pink-300 rounded-lg">
<div className=''>
<Link to='/'><img className='w-40 my-2' src={LOGO_URL}/></Link>


</div>
<div className="flex items-center">
    <ul className="flex">
  <li className="m-1 px-4"> Network Connection: {onlineStatus?'✅' :'❌'}</li>
        <li className="m-1 px-4"><Link to='/' >Home</Link></li>
        <li className="m-1 px-4"><Link to='/about' >About Us</Link></li>
        <li className="m-1 px-4"><Link to='/contact' >Contact us</Link></li>
        <li className="m-1 px-4"><Link to='/cart' >Cart</Link></li>
        <li className="m-1 px-4"><Link to='/grocery'>Grocery</Link></li>
        <button className="m-1 px-4" 
        onClick={()=>{
            //ternary operator....
           btnNameReact==="LogOut"?setBtnNameReact("LogIn"):setBtnNameReact("LogOut")
        }}
        >{btnNameReact}</button>
        <li className="m-1 px-4 font-semibold">{loggedInUser}</li>
       
    </ul>
</div>

    </div>
}

export default Headers;