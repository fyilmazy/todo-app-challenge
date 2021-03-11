import React, { useState, useEffect, createContext } from "react";
import {
  localStorageGet,
  localStorageSet,
  localStorageRemove,
} from "../utils/localStorage";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(localStorageGet("userData"));

  const handleLogin = (name, surname) => {
    console.log("user data written to local storage & logged in");
    localStorageSet("userData", { name, surname });
    setIsLoggedIn(true);
  };

  const userLogOut = () => {
    setIsLoggedIn(false);
    setUserData(null);
    localStorageRemove("userData");
    console.log("user logout successfull");
  };

  const checkLoginStatus = () => {
    if (userData) {
      console.log("user login detected");
      setIsLoggedIn(true);
      console.log("login successfull");
    } else {
      setIsLoggedIn(false);
      console.log("user login not detected, must login");
    }
  };

  useEffect(() => {
    checkLoginStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const values = {
    // Values
    userData,
    isLoggedIn,

    // Functions
    handleLogin,
    userLogOut,
  };
  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};
