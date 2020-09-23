import React from 'react'

import {useTheme, useThemeUpdate} from '../hooks/themeContext'
export default function Controls() {

const theme = useTheme()

const updateTheme = useThemeUpdate()

console.log(theme);

return(
    <div>

    <h1>
        {theme ? 'Light Mode' : 'Dark Mode'}
    </h1>
    
    <button
    onClick={updateTheme}
    >
        Toggle Theme
    </button>

    </div>
)
}