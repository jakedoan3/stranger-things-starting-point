
import React from "react";
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";
import RegisterForm from "./RegisterForm";
import Login from "./Login";

const App = () => {
  
  return (
    <>
      <Login />
      <PostList />
      <RegisterForm />
    </>
  );
}

export default hot(App);
