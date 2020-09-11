import React from 'react'

export default function Button(props) {

    console.log(props);

    return (
        <button

        style={{...buttonStyle,...props.style}}
        onClick={props.onClick}
        
        >
        
        {props.text}

        </button>
    )
}

const buttonStyle = {

    padding: 5,
    borderRadius: 5,
    fontSize: 'large',
    backgroundColor: 'offwhite',
    color: 'black'
}