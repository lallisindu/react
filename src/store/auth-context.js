import React, {useState} from "react";

const AuthContext=React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
});

export const AuthContextProvider = (props) => {
    const initialToken =localStorage.getItem('token');
    const [token, setToken]=useState(initialToken)
    const userIsLoggedIn =!!token;
    const loginHandler=(token) => {
        setToken(token);
        localStorage.setItem('token', token)
    }
    const logoutHandle = () => {
        setToken(null)
    }

    const contextValue= {
        token: token,
        isLoogedIn: userIsLoggedIn,
        login: loginHandler,
        logout:logoutHandle,
    }
    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
};
export default AuthContext;