import React from 'react';
import SignupForm from  '../../components/Signup/Signup';
import './Signup.css'
export default function Signup(props) {
   return (
   <div className = "SignupPage" style = {{margin: "auto"}}>    
        <SignupForm />
   </div>)
}