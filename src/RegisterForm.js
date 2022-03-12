import React, { useState } from 'react';
import { newUser, testAuthentication } from './api';


const RegisterForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordAgain, setPasswordAgain] = useState('')


    const registerUser = async (event) => {
        event.preventDefault()
        // URL that we're gonna reach out to
        const url = `https://strangers-things.herokuapp.com/api/2112-FTB-ET-WEB-PT/users/register`;
        if (password !== passwordAgain){
            alert("Passwords don't match")
            return
        }
        const userSubmit = await newUser(username, password)
        
    };

    return (
    <>
        <div style= {{ display: 'flex', flexDirection: 'column', width: '250px'}}>
            <label>Username</label>
            <input type='text'
            name='userName'
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            ></input>

            <label>Password</label>
            <input type='text'
            min='8'
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            ></input>

            <label>Re-Enter Password</label>
            <input type='text'
            min='8'
            required
            value={passwordAgain}
            onChange={(event) => setPasswordAgain(event.target.value)}
            ></input>

            <label>Register</label>
            <button type='submit'
            onClick={registerUser}
            >Submit</button>
        </div>
    </>
    );
};

export default RegisterForm;