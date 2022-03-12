import React, { useState, useEffect } from 'react';

//store token on state? how do we know if token/login credentials are being held?
//react router / link?
//how does log out work w/ token?
//confusion about helper functions
//what functions etc should go on components vs on api?


const Login = () => {

    return (
        <div>
            <h3>Log In</h3>
            <input
            placeholder='Username*'></input>
            <input
            placeholder='Password*'></input>
            <button>Log In</button>
            {/* <link to = './RegisterForm' > Don't have an account? Sign Up</link> */}
        </div>
    );
};

export default Login;