import React, { createContext, useState, useEffect } from "react";
import axios from 'axios'

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setloading] = useState(false)
  const user = sessionStorage.getItem('user')

  useEffect(()=> {
    if(user && !currentUser){
      axios
      //not sure if this is the correct route
      .get(`/api/users/me` , {
        withCredentials:true
      }).then
      (({ data })=> {
        setCurrentUser(data);
      }).catch
      ((error)=> console.error(error))
    }
  },[currentUser, user]);

  return (
    <AppContext.Provider value={{
      currentUser,
      setCurrentUser,
      loading,
      setloading

    }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };