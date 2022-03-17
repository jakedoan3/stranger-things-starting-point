import React, { useState, useEffect } from 'react';
import { logIn, logOut } from './api';

//how to remove token for logout function?
//how to format fetch object for login/out?


const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessages, setErrorMessages] = useState([])

    const logInUser = async (event) => {
        event.preventDefault()
        // URL that we're gonna reach out to
        const userSubmit = await logIn(username, password)
        console.log("usersubmit is ", userSubmit)
        if (userSubmit) {props.setIsLoggedIn(true)}
        else {
            console.error("Unable to Login")
            setErrorMessages([...errorMessages, "Username or Password is incorrect. Please try again."
            ])
        }
        

    };

    const logOut = () => {
        localStorage.removeItem('stranger_things_JWT');
        props.setIsLoggedIn(false)
    } 

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
                {errorMessages.length ? errorMessages.map((error) => error): null}
            </>
            }
        </div>
    );
};

export default Login;