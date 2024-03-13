import React, {useState} from "react";

const AuthContext=React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
});

export const AuthContextProvider = (props) => {
    const [token, setToken]=useState(null)
    const userIsLoggedIn =!!token;
    const loginHandler=(token) => {
        setToken(token);
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