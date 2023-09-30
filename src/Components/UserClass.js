import React from 'react'
import { Link } from 'react-router-dom';
import { DEV_URL } from '../utils/constants';


class UserClass extends React.Component{
    constructor(props){
    super(props);
       
        console.log('userClass constructor');
        this.state={
            userInfo:{
            name:'dummyName',
            location:'dumyCity',
            avatar_url:null,
           } 
           
         
        }
    }
   async componentDidMount(){
       //Api call...
       console.log('userClass component Did Mount');
       const data=await fetch(DEV_URL);
       const json= await data.json();



this.setState({
userInfo:json,
})

        }

        componentDidUpdate(){
            console.log('userClass component did Update');
        }
        componentWillUnmount(){
            console.log('userClass component will unmount');
        }
    render(){
      
       //destructuring
       console.log('userClass render');
       const{login,avatar_url,html_url,email,name,location}=this.state.userInfo;
       
        return (
            <div className='user-card'>
            <div className='user-img'>

                <img className='img' src={avatar_url==null?'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png':avatar_url} alt='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'/> 
            </div>
           <div className='user-info'>
            <h2>Name:{name===null?"Yash Pardhi":name}</h2>
                <h3>Location:{location===null?"Nagpur":location}</h3>
                <h4>Contact:{email===null?"@Champa123":email}</h4>
                <h4>GitHub Name:{login}</h4>
<Link to={html_url}><h5> click  here to view the profile of developer</h5></Link>
            </div>
               
            </div>
        )
    }
}
export default UserClass;