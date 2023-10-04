import { useEffect, useState } from "react";





//takes no info from the caller....

const useOnlineStatus=()=>{

    //state variable

    const[onlineStatus,setOnlineStatus]=useState(true);


    //want check only once...evert time the page loads...


    useEffect(()=>{
window.addEventListener('offline',()=>{
    setOnlineStatus(false);
})

window.addEventListener('online',()=>{
    setOnlineStatus(true);
})
    },[])

    return onlineStatus;


}


export default useOnlineStatus;