import React from 'react';
import './Login.css'
import Logo from '../../components/Logo/Logo';
import Field from '../Form/Field/Field';
import Button from '../Form/Button/Button';
import {useHistory} from 'react-router-dom';

export default function LoginForm (props) {
    let history = useHistory();
    const [identity, setIdentity] = React.useState("");
    const [password, setPassword] = React.useState("");

    function redirectToSignup () {
        history.push('/Signup');
    }

    return (
        <div className = "LoginForm"> 
            <div className = "LoginForm__Header"> 
                <Logo height = "150px" />
                <h3> Login </h3>
            </div>
            <div className="LoginForm__Body" autoComplete="nope" > 
                <p style={{color: "red"}}> {props.error} </p>
                <Field 
                    placeHolder = "Your Username or Email" 
                    name= "identity" 
                    type= "text" 
                    label= "Username or email" 
                    value = {identity}
                    onChange={ev => setIdentity(ev.target.value)}
                />
                <Field 
                    placeHolder = "Enter your password here" 
                    name="password" 
                    type="password" 
                    label = "Password" 
                    value = {password}
                    onChange={ev => setPassword(ev.target.value)}
                />
                <a href="/SignUp" style={{textAlign:"right"}}> Forgot Password </a>
                <br />
                <Button buttonType="Primary" clicked={ev => props.login(identity, password)} label = "Login" />
                <br />
                <Button buttonType="Secondary" clicked={ev => redirectToSignup()} label = "Sign Up" />
                <br />
            </div>
        </div>
    );
}
