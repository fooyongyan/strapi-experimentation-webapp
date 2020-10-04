import axios from 'axios';
import {api, getToken, isLoggedin} from './Config';

///Return the logged in users' data
async function getMe() {

    const apiUrl = `${api}/users/me`;
    const headers = {
        Authorization: `Bearer ${getToken()}`
    }
    try {
        const response = await axios.get(apiUrl, { headers: headers});
        //console.log(response);
        return {
            status: response.status,
            data: {
                id: response.data.id,
                username: response.data.username,
                email: response.data.email
            }
        }
    } catch ( e ) {
        console.warn(e.response);
        throw new Error({
            status: e.status,
            statusText: e.statusText,
            error: e.response.data.error,
            message: e.response.data.message
        });
    }

} 


///Login to Strapi
async function login (identity, password) {
    sessionStorage.removeItem("token");
    const url = `${api}/auth/local`;
    try {
        const response = await axios.post( url, {identifier: identity, password: password});
        console.log(response);
        return {
            status: response.status,
            data: {
                username: response.data.user.username,
                token: response.data.jwt
            }
        }
    } catch ( e ) {
        console.warn(e.response);
        throw new Error({
            error: "Invalid Username/Password"
        });
    }
}

///Signup User to Strapi
async function signup (userName, email, password ){
    const body = {
        username: userName,
        email: email,
        provider: "local",
        password: password, 
    }
    console.log(body);
    try {
        const response = await axios.post(`${api}/auth/local/register`, body);
        console.log(response);
        return {
            status: response.status,
            data: {
                username: response.data.user.username,
                token: response.data.jwt
            }
        }
    } catch ( exception ) {
        console.error(exception.response.data.message[0].messages[0].message);
        throw exception.response.data.message[0].messages[0].message;
    }
}

function signOut() {
    if ( sessionStorage.getItem("token")) {
        sessionStorage.removeItem("token");
    }
}
export default {getMe, getToken, login, signup, signOut};