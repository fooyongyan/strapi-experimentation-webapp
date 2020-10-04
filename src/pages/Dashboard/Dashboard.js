import React from 'react';
import './Dashboard.css'
import { useHistory } from "react-router-dom";
import {isLoggedin} from '../../api/strapi/Config';
import UserApi from '../../api/strapi/Users';
import Navbar from './NavBar/Navbar'
import UserBar from './NavBar/UserBar/UserBar';

export default function Dashboard (props) {
    const history = useHistory();
    const [userData, setUserData] = React.useState();
    React.useEffect ( () => {
        console.log("Dashboard::useEffect");
        if ( isLoggedin() ) {
            if ( !userData ) {
                UserApi.getMe().then ( results => {
                    console.log("Successful!")
                    console.log(results);
                    setUserData(results.data);
                })
                .catch ( exception => 
                {
                    console.log("Error");
                    console.log(exception);
                });
            }
        } else {
            console.log("User not logged in");
            history.push('/Login');
        }
    });

    return (
        <div className = "Dashboard"> 
            <Navbar />
            <UserBar username = {userData ? userData.username : ""} title={props.title}/>
            <div className = "Dashboard__Body"> 
                {props.children}
            </div>
            <br />
            <div className = "Dashboary__Footer"> <span style = {{padding: "10px"}}> Created using React JS </span> </div>
        </div>
    )

}
