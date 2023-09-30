import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";




const Headers=()=>{

const [btnNameReact,setBtnNameReact]=useState("LogIn");
///////when useEffect is Called...
//1.no DA==>called on every render
//2.empty DA==>called on initial render
//3.non-empty DA==>called only when the depedency changes
useEffect(()=>{
    //console.log("useEffect is called..");
},[btnNameReact])


    return<div className="header">
<div className='logo-container'>
<Link to='/'><img className='logo' src={LOGO_URL}/></Link>


</div>
<div className='nav-items'>
    <ul>

        <li ><Link to='/' className='nav-item-list'>Home</Link></li>
        <li><Link to='/about' className='nav-item-list'>About Us</Link></li>
        <li><Link to='/contact' className='nav-item-list'>Contact us</Link></li>
        <li><Link to='/cart' className='nav-item-list'>Cart</Link></li>
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