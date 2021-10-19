import React, { useState } from 'react'

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { }
});


const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpTime = new Date(expirationTime).getTime();

    const remainingDuration = adjExpTime - currentTime;

    return remainingDuration;
}

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const [token, settoken] = useState(initialToken)

    const userIsLoggedIn = !!token;


    const logOutHandler = () => {
        settoken(null)
        localStorage.removeItem('token')
    }

    const logInHandler = (token, exprirationTime) => {
        settoken(token)
        localStorage.setItem('token', token)

        const remainingTime = calculateRemainingTime(exprirationTime)

        setTimeout(logOutHandler, remainingTime);
    }

    const authContextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: logInHandler,
        logout: logOutHandler
    }

    return (
        <AuthContext.Provider value={authContextValue}>{props.children}</AuthContext.Provider>
    )
}

export default AuthContext;