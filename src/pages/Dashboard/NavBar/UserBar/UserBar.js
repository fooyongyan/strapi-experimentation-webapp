import React from 'react';
import './UserBar.css';
import UserApi from '../../../../api/strapi/Users';
import {useHistory} from 'react-router-dom';
export default function UserBar ( props ) {
    let history = useHistory();

    function doSignout() {
        console.log("Signing out...");
        UserApi.signOut();
        history.push('/Home');
    }

    return (
        <div className = "UserBar"> 
            <div style={{textAlign: "left", padding: "5px"}}> 
                <h3 > {props.title} </h3> 
            </div>
            <div className = "UserControl">
                <span> Welcome, {props.username} </span> 
                <span> <a href="#" onClick={doSignout}> Sign out </a> </span> 
            </div>
        </div> 
    );
}