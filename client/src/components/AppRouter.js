import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Login from './Login'
import Register from './Register'
import useThem from '../hooks/useTheme'

const [theme, setTheme] = useTheme(true)

export default function AppRouter() {
    return (
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
    )
}
