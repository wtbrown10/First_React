import React from 'react'

export default function Login() {

const regLink = window.location.origin + '/register';
        

    return (
        <div>
            <h1>
                Login to you Account
            </h1>
            <br/>
            <a
                href={regLink}
            >
                Need An Accout? Register Today!
            </a>

        </div>
    )  
}
