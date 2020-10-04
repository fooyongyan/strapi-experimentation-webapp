import React from 'react';
import './Signup.css'
import Field from '../../components/Form/Field/Field';
import Button from '../Form/Button/Button';
import {useHistory} from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import UserApi from '../../api/strapi/Users';
export default function SignupForm (props) {

    let history = useHistory();
    const [userName, setUserName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [error, setError]  = React.useState('');

    function doSignup () {
        if ( password === confirmPassword ) {
            UserApi
            .signup(userName, email, password)
            .then( result => {
                console.log(result);
                sessionStorage.setItem("token", result.data.token);
                history.push('/Home');
            }).catch( exception => {
                console.log(exception);
                setError ( exception);
            });
        } else {
            setError ( "Password does not match");
        }
    }

    return (
        <div className = "SignupForm"> 
            <div className = "SignupForm__Header"> 
                <Logo height="150px"/>
                <h3> Signup </h3>
            </div>
            <div className = "SignupForm__Body" autoComplete = "false"> 
                <p style={{color: "red"}}> {error} </p>
                <Field placeHolder="Enter your user name" label="User Name" value={userName} type="text" onChange = {ev=>{setUserName(ev.target.value) }}/> 
                <Field placeHolder= "Enter your email" label = "Email" type="text" value={email} onChange = {ev=>{setEmail(ev.target.value)}}/> 
                <Field placeHolder= "Enter your password" label = "Password" type="password" value={password} onChange = {ev=>{setPassword(ev.target.value)}}/> 
                <Field placeHolder= "Confirm your password" label = "ConfirmPassword" type="password" value={confirmPassword} onChange = {ev=>{setConfirmPassword(ev.target.value)}}/> 
                <br />
                <Button buttonType = "Primary" label = "Sign Up" clicked={doSignup} />
                <br />
                <Button buttonType = "Secondary" label = "Login" clicked={() => {
                    history.push("/Login");
                }} />
            </div>
        </div>
    );
}
