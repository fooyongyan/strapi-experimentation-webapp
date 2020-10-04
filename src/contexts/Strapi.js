import React from 'react';

const strapiContext = React.createContext({
    api: "http://localhost:1337", 
    isLoggedIn: false,
    sessionData: {
        token: null,
        user: null
    }
});

export default strapiContext;
