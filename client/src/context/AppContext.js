import React, { createContext, useState } from "react";
import {io} from "socket.io-client"

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  const userCheck = () => {
    fetch('./api/users/me', 
    {'credentials': 'include'})
    .then(res => res.json())
    .then(res => {
      // console.log(res)
      setCurrentUser(res)
    })
    .catch(err => {
       setCurrentUser(null)
        // console.log(err)
      })
    }

    const socket = io("http://localhost:8080")

  const state = {
    userState: [currentUser,setCurrentUser],
    userCheck: userCheck,
    socket: []
  }

  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };