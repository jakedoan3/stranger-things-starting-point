
import React, {useEffect, useState} from "react";
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";
import RegisterForm from "./RegisterForm";
import Login from "./Login";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom"
import Posts from "./posts";
import Profile from "./Profile";

const App = () => {
  const [holdToken, setHoldToken] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [posts, setPosts] = useState([]);
  //useEffect runs to re-render the page when data changes
  useEffect(() => {
    const token = localStorage.getItem('stranger_things_JWT')
    if (token){
      setIsLoggedIn(true)
    } else {setIsLoggedIn(false)}
  }, [])

  useEffect(() => {
    
  },[posts])
  
  return (
    <div>
      {/* <Profile/> */}
      <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Posts posts={posts} setPosts={setPosts}/>
      <RegisterForm holdToken={holdToken} setHoldToken={setHoldToken}/>
      <PostList posts={posts} setPosts={setPosts}/>
      

    </div>
  )
    // <BrowserRouter>
    //   {isLoggedIn ? 
    //   <>
    //     <div id='navbar'>
    //       {/* <Link to='/profile'></Link> */}
    //       <Link to='/posts'>Posts</Link>
    //       <Link to='/login'>Log Out</Link>
    //     </div>
    //     <div id='main'>
    //       {/* <Route path='/profile'>
    //         <Profile />
    //       </Route> */}

    //       <Route path='/posts'>
    //         <PostList />
    //       </Route>
          
    //       <PostList />

    //       <Posts posts={posts} setPosts={setPosts}/>

    //       <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

    //       <Route path='/login'>
    //         <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    //       </Route>

    //       <Route exact path='/'>
    //         {/* <Profile /> */}
    //       </Route>

    //     </div>

    //   </>
            
    //   : 
      
    //   <>
    //     <div id='navbar'>
    //       <Link to='/Register'>Register</Link>
    //       <Link to='/posts'>Posts</Link>
    //       <Link to='/login'>Log In</Link>
    //     </div>

    //     <div id='main'>
    //       <Route path='/login'>
    //         <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    //       </Route>

    //       <Route path='/posts'>
    //         <PostList />
    //       </Route>

    //       <Route path='/register'>
    //         <RegisterForm holdToken={holdToken} setHoldToken={setHoldToken}/>
    //       </Route>

    //       <Route exact path='/'>
    //         <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    //       </Route>

    //     </div>
    //   </>
      
    //   }
    // </BrowserRouter>
    
}


                

export default hot(App);


