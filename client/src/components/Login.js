import React from 'react'

import Button from './Button'

export default function Login() {

const regLink = window.location.origin + '/register';
        

    return (
        <div>
            <h1>
                Login To Your Account!
            </h1>
            <br/>
            <h3>
                Need An Account?
            </h3>
            <Button

            onClick={()=>{window.location = regLink}}
            text = 'Register Today!'



            />

            {/* <a
                href={regLink}
            >
                Need An Accout? Register Today!
            </a> */}

        </div>
    )  
}