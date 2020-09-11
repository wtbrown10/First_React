import React from 'react'

import Button from './Button'

export default function Register() {

const loginLink = window.location.origin + '/login';
const regLink = window.location.origin + '/register';


    return (
        <div>
            <h1>
                Welcome To Our Services!
            </h1>
            <br/>

            <Button 
            
            onClick= {() => {window.location = loginLink}}
            text='Login'
        
            />
            {/* <a
                href={loginLink}
            >
                Login
            </a> */}
            <br/>
            <br/>

            <Button 
            
            onClick= {() => {window.location = regLink}}
            text='Register'
        
            />
            {/* <a
                href={regLink}
            >
                Register
            </a> */}

        </div>
    )  
}