import React from 'react';
import './Navbar.css'
import Navlink from './NavMenu/NavLink';
export default function Navbar (props) {
    const config = [
        { label: "My Articles", link: `/${props.userId}/articles`},
        { label: "About Me", link: `/${props.userId}/articles`}
    ];

    return (
        <div className = "Navbar"> 
            {config.map( e => <Navlink label={e.label} link={e.link}/>)}
        </div>);
}
