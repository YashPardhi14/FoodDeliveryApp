import { useState } from "react";




const User = ({name,location,contact}) => {
    //destructure on the fly...

    const[count]=useState(0);
    const[count1]=useState(1);
    return (
        <div className='user-card'>
        <h1>Count:{count}</h1>
        <h1>Count1:{count1}</h1>
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h4>Contact:{contact}</h4>
        </div>
  )
}

export default User;