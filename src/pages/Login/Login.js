import React from 'react';
import LoginForm from '../../components/Login/Login'
import {useHistory} from 'react-router-dom';
import UserApi from '../../api/strapi/Users'
import './Login.css'

export default function Login ( ) {

    let history = useHistory();
    const [errorMessage, setError] = React.useState();
  
    function doLogin(identity, password) {
        console.log("Login::doLogin");
        UserApi.login(identity, password).then(results => {
            console.log(results);
            sessionStorage.setItem("token", results.data.token);
            history.push("/Home");
        }).catch ( error =>{
            console.log(error);
            setError(error.error);
        });
    }

    React.useEffect( () => {
        console.log("Login::useEffect");
    })

    return (
        <div className= "LoginPage"> 
            <LoginForm redirect = "/Home" error = {errorMessage} login={doLogin}/>
        </div>
    )
}
