
import React, {useState} from "react";
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";
import RegisterForm from "./RegisterForm";
import Login from "./Login";

const App = () => {
  const [holdToken, setHoldToken] = useState('')

  return (
    <>
      <Login />
      <PostList />
      <RegisterForm holdToken={holdToken} setHoldToken={setHoldToken}/>
    </>
  );
}

export default hot(App);
