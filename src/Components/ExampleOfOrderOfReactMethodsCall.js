// import React from 'react'
// import UserClass from './UserClass'
// import User from './User'


// class About extends React.Component{

//   constructor(props){
//     console.log('Parent constructor ');
//     super(props);

//   }


// componentDidMount(){
// console.log('Parent component Did Mount');
// }

// render(){
// console.log('Parent render');

//   return (
//     <div>

// <h2 style={{textAlign:'center'}}>About Us!</h2><br/>
//     <h3 style={{textAlign:'center'}}>Welcome To <span id="W_Name1">FoodieFleet</span></h3>
//     <p><span id="W_Name2">FoodieFleet</span> is a Professional <span id="W_Type1">food delivery</span> 
//     Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to 
//     providing you the best of <span id="W_Type2">food delivery</span>, with a focus on dependability and 
//     <span id="W_Spec">food ordering</span>. We're working to turn our passion for <span id="W_Type3">food delivery</span> 
//     into a booming <a href="https://www.blogearns.com/2021/05/free-about-us-page-generator.html" rel="do-follow" 
//     style={{color:'inherit',textDecoration:'none'}}>online website</a>. We hope you enjoy our 
//     <span id="W_Type4">food delivery</span> as much as we enjoy offering them to you.</p><br/>
// <p style={{textAlign:'center'}}>I will keep posting more important posts on my Website for all of you. Please give your support and love.</p>
// <p style={{fontWeight:'bold',textAlign:'center'}}>Thanks For Visiting Our Site<br/>
// <span style={{color:'blue',fontSize:'16px',fontWeight:'bold',textAlign:'center'}}>Have a nice day!</span></p>
// {/**{//<User name={'Champa(function)'} location={'Nagpur(Function)'} contact={'@Champu123(Function)'}/>} */}


// <UserClass name={'Children 1'} location={'Nagpur(class)'} contact={'@Champu123(class)'}/>
// <UserClass name={'Children 2'} location={'Nagpur(class)'} contact={'@Champu123(class)'}/>
// </div>
//   )
// }

// }

// import React from 'react'


// class UserClass extends React.Component{
//     constructor(props){
   
//         super(props);
//         console.log( this.props.name+' constructor ');
        
//         this.state={
//             count:0,
            
//         }
//     }
//     componentDidMount(){
//         console.log(this.props.name+' component Did Mount');
//         }
//     render(){
//         const{name,location,contact}=this.props;
//         const{count}=this.state;
//         console.log(this.props.name+' render');
//         return (
//             <div className='user-card'>
//             <h1>Count:{count}</h1>
          
//             <button onClick={()=>{
//    this.setState({
//     count:this.state.count+1,
//    })
//             }}>Count Increase</button>
//                 <h2>Name:{name}</h2>
//                 <h3>Location:{location}</h3>
//                 <h4>Contact:{contact}</h4>
//             </div>
//         )
//     }
// }
// export default UserClass;


// export default About