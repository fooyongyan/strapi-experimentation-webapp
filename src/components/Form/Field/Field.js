import React from "react";
import "./Field.css"
export default function Field (props) {

    return (
        <div className = "Field" > 
            <label> {props.label} </label>
            <input 
                autoComplete = "new-password"
                placeholder={props.placeHolder} 
                type={props.type} 
                name={props.name} 
                value={props.value} 
                onChange={ev => props.onChange(ev)}
            />
            <span className="Field__Error"> {props.error}</span>
        </div>
    )

}