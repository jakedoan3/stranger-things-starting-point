
import React, {useEffect, useState} from "react";
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";
import RegisterForm from "./RegisterForm";
import Login from "./Login";
import {BrowserRouter, Route} from "react-router-dom"

const App = () => {
  const [holdToken, setHoldToken] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  //useEffect runs to re-render the page when data changes
  useEffect(() => {
    const token = localStorage.getItem('stranger_things_JWT')
    if (token){
      setIsLoggedIn(true)
    } else {setIsLoggedIn(false)}
  }, [])

  return (
    <BrowserRouter>
      <>
        <Route path='/'>
          <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
          <RegisterForm holdToken={holdToken} setHoldToken={setHoldToken}/>
        </Route>
        
        <Route path='/login'>
          <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        </Route>

        <PostList />

        <Route path='/register'>
          <RegisterForm holdToken={holdToken} setHoldToken={setHoldToken}/>
        </Route>
        
      </>
    </BrowserRouter>
  );
}

export default hot(App);
