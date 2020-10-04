const api = "http://localhost:1337";


///Return the Necessary Token for Access
function getToken() {
    console.log(sessionStorage);
    return sessionStorage.getItem("token") ? sessionStorage.getItem("token") : null;
}


function isLoggedin () {
    return sessionStorage.getItem("token") ? true: false;
}


export {api, getToken, isLoggedin};
