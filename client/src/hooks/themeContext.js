import React, {useState, useEffect, useContext, createContext} from 'react'

const {get, set} = require('../util/localStorage')

const ThemeContext = createContext()

const ThemeUpdateContext = createContext()

export function useTheme() {
    return useContext(ThemeContext)
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}

export function ThemeProvider({children }) {

const [theme, setTheme] = useState( () => {
    return get('theme', true)
})

useEffect( () => {

    set('theme', JSON.stringify(theme))

    console.log('The Theme Changed: ', theme)

    document.getElementById('root').style.backgroundColor = theme ? 'white' : 'black';

}, [theme])

const themeToggle = () => {
    setTheme( curTheme => !curTheme)
}

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeUpdateContext.Provider value={themeToggle}>
            {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}