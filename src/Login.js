import React, { useState, useEffect } from 'react';
import { logIn } from './api';

//store token on state? how do we know if token/login credentials are being held?
//react router / link?
//how does log out work w/ token?
//confusion about helper functions
//what functions etc should go on components vs on api?


const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const logInUser = async (event) => {
        event.preventDefault()
        // URL that we're gonna reach out to
        const url = `https://strangers-things.herokuapp.com/api/2112-FTB-ET-WEB-PT/users/register`;
        console.log(username, password)
        const userSubmit = await logIn(username, password)
        console.log(userSubmit)
        props.setHoldToken(userSubmit.data.token)
    };

    return (
        <div>
            <h3>Log In</h3>
            <input
            placeholder='Username*'
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            ></input>
            <input
            placeholder='Password*'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            ></input>
            <button
            onClick={logInUser}
            >Log In</button>
            
        </div>
    );
};

export default Login;