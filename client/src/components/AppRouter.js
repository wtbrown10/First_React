import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Login from './Login'
import Register from './Register'
import useTheme from '../hooks/useTheme'
import Controls from './Controls'


export default function AppRouter() {
    return (
        <div>

            <Controls />
            {/* <h1>
                {theme ? 'Light Mode' : 'Dark Mode'}
            </h1>
            <button
            onClick= {() => {
                setTheme( prevTheme =>{
                    return !prevTheme
                })
            }}
            >
                {!theme ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button> */}
        <Switch>
            <Route
              exact path='/'
            >
                <Home />
            </Route>
            <Route
              exact path='/login'
            >
                <Login />
            </Route>
            <Route
              exact path='/register'
            >
                <Register />
            </Route>
            <Route
               path='/'
            >
                <div>
                    <h1>
                        404
                    </h1>
                </div>
            </Route>

        </Switch>
        </div>
    )
}
