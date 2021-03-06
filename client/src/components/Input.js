import React from 'react'

//ph, type, onChange, name, id

export default function Input(props) {

    return (
        <input
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        type={props.type}
        placeholder={props.ph}
        style={{...defaultStyle, ...props.style}}
        />
    )
}

const defaultStyle = {
    color: 'white',
    background: '#222',
    border: 'none',
    padding: 10,
    borderRadius: 5
}