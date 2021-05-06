import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  const userCheck = async () => {
    fetch('./api/users/me', 
    {'credentials': 'include'})
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setCurrentUser(res)
    })
    .catch(err => {
       setCurrentUser(null)
        console.log(err)})
    }

  const state = {
    userState: [currentUser,setCurrentUser],
    userCheck: userCheck
  }

  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };