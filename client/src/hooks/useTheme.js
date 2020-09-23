import React, {useState, useEffect} from 'react';
import {get, set} from '../util/localStorage'


export default (initialVal) => {
    const [theme, setTheme] = useState( () => {    

    return get('theme', initialVal)

})

    useEffect( () => {

        console.log('Theme changed to: ', theme);
        set('theme', theme)

    }, [theme])

    return [theme, setTheme]

}