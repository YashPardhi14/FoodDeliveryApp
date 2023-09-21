import { useState } from "react";
import { LOGO_URL } from "../utils/constants";



const Headers=()=>{

const [btnNameReact,setBtnNameReact]=useState("LogIn");



    return<div className="header">
<div className='logo-container'>
<img className='logo' src={LOGO_URL}/>

</div>
<div className='nav-items'>
    <ul>

        <li>Home</li>
        <li>About Us</li>
        <li>Contact us</li>
        <li>Cart</li>
        <button className="login" 
        onClick={()=>{
            //ternary operator....
           btnNameReact==="LogOut"?setBtnNameReact("LogIn"):setBtnNameReact("LogOut")
        }}
        >{btnNameReact}</button>
    </ul>
</div>

    </div>
}

export default Headers;