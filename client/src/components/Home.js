import React from 'react'

export default function Register() {

const loginLink = window.location.origin + '/login';
const regLink = window.location.origin + '/register';


    return (
        <div>
            <h1>
                Welcome to our services
            </h1>
            <br/>
            <a
                href={loginLink}
            >
                Login
            </a>
            <br/>
            <a
                href={regLink}
            >
                Register
            </a>

        </div>
    )  
}