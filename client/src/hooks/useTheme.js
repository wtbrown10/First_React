import React, {useState, useEfect} from 'react';
import {get, set} from '../util/localStorage'

export default useTheme = (initalVal) => {

    const [theme, setTheme] = useState( (initalVal) => {

        return get('theme', initalVal)
    })

    useEffect( ()=> {
        console.log(`theme changed to: `, theme);

        set('theme', theme)
    }, [theme])

    return [theme, setTheme]
}


// function get (key) {


// }

// function set (key, value) {

// }