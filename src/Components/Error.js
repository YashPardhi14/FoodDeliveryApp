import { useRouteError } from "react-router-dom"



const Error=()=>{
const err=useRouteError();
console.group(err);
    return (
        <div>
<h1 style={{textAlign:'center'}}>{err.status + ": "+err.data}</h1>
<h2 style={{textAlign:'center'}}>{err.statusText}</h2>
        </div>
    )
}

export default Error;