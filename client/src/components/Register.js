import React from 'react'
import Button from './Button';

export default function Register() {

const loginLink = window.location.origin + '/login';
        

    return (
        <div>
            <h1>
                Register Today
            </h1>
            <br/>
            <h3>
                Already Registered?
            </h3>

            <Button 
            
            onClick={() => {
                window.location = loginLink
            }}
            text = 'Login!'
            />

            {/* <a
                href={loginLink}
            >
                Already Have an Account? Login
            </a> */}

        </div>
    )  
}