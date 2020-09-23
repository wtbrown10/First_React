import React, {useState, useEffect} from 'react'

import {BrowserRouter} from 'react-router-dom'

import { ThemeProvider } from '../hooks/themeContext'

import AppRouter from './AppRouter';


function App(){

    return (
        <BrowserRouter>
            <ThemeProvider>
                <AppRouter />
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App