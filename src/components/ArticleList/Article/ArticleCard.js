import React from 'react';
import './ArticleCard.css'
import {useHistory} from 'react-router-dom';
export default function ArticleCard ( props ) {
    const history = useHistory();
    return ( 
    <div className = "ArticleCard" onClick= {ev => { history.push(`Article/${props.id}`)}}> 
        <h3 style = {{textAlign:"left"}}> {props.title.substring(0,20) + "..."} </h3>
        <div className = "ArticleCard__Body"> 
            <p style = {{textAlign: "left"}}> {props.body.substring(0,160) + "..."}</p>
        </div>
        <div style= {{textAlign: "right"}}> 
            <strong > {props.author ? props.author : "Unknown"} </strong>
        </div>
    </div>)
}