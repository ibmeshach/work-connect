import React from "react";
import { createContext, useState } from "react";

// actual value I want to access
export const UserContext = createContext({
    isLoggedIn: false,
    setIsLoggedIn: () => null,
    postObject: {},
    setPostObject: () => null,
});

export const UserProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [postObject, setPostObject] = useState({});

    const value = { isLoggedIn, setIsLoggedIn, postObject, setPostObject };
    return (<UserContext.Provider value={value} >{children}</UserContext.Provider>);
};