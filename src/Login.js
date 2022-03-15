import React, { useState, useEffect } from 'react';
import { logIn, logOut } from './api';

//how to remove token for logout function?
//how to format fetch object for login/out?


const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const logInUser = async (event) => {
        event.preventDefault()
        // URL that we're gonna reach out to
        const url = `https://strangers-things.herokuapp.com/api/2112-FTB-ET-WEB-PT/users/login`;
        const userSubmit = await logIn(username, password)
        console.log("usersubmit is ", userSubmit)
        props.setIsLoggedIn(true)
        // props.setHoldToken(userSubmit.data.token)
    };

    const logOut = () => {
        localStorage.removeItem('stranger_things_JWT');
        props.setIsLoggedIn(false)
    } 
    console.log(props.isLoggedIn)
    return (
        <div>
            { props.isLoggedIn ? 
            <>
                <h3>Log In</h3>
                <button
                onClick={logOut}
                >Log Out</button>
            </>
            :  
            <>
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
            </>
            }
        </div>
    );
};

export default Login;