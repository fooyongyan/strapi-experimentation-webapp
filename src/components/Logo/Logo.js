import React from 'react';
import LogoImage from '../../resources/images/logo.png'

export default function Logo (props) {
    return (<img src={LogoImage} style = {{height: props.height, objectFit: "cover", width:"auto"}} alt="" />)
}