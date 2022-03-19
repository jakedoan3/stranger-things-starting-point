import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import PostList from "./PostList";
import RegisterForm from "./RegisterForm";
import Login from "./Login";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Posts from "./posts";
import Profile from "./Profile";

const App = () => {
  const [holdToken, setHoldToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  
  //useEffect runs to re-render the page when data changes
  useEffect(() => {
    const token = localStorage.getItem("stranger_things_JWT");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {}, [posts]);

  return (
    <BrowserRouter>
      <div>
        <div
          id="navbar"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly"
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          {isLoggedIn ? <Link to="/profile">Profile</Link> : null}
          {isLoggedIn ? null : <Link to="/Register">Register</Link>}
          {isLoggedIn ? (
            <Link to="/login">Log Out</Link>
          ) : (
            <Link to="/login">Log In</Link>
          )}
          
        </div>

        <div id="main">
          <Switch>
            <Route exact path="/">
              {isLoggedIn ? (
                <Profile posts={posts} setPosts={setPosts}/>
              ) : (
                <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              )}
            </Route>

            <Route path="/posts">
              {isLoggedIn ? <Posts posts={posts} setPosts={setPosts} /> : null}
              <PostList
                posts={posts}
                setPosts={setPosts}
                isLoggedIn={isLoggedIn}
              />
            </Route>

            <Route path="/login">
              <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            </Route>

            <Route path="/register">
              <RegisterForm holdToken={holdToken} setHoldToken={setHoldToken} />
            </Route>

            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default hot(App);
