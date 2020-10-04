import React from 'react';
import './Button.css'

export default function Button (props) {
    const classNames = ["Button", props.buttonType];
    return <button className = {classNames.join(' ')} onClick={props.clicked}> {props.label} </button>
}