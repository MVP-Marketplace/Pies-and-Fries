import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const user = sessionStorage.getItem('user')

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
 
  // useEffect(()=> {
  //   if(user && !currentUser){
  //     axios
  //     //not sure if this is the correct route
  //     .get(`/api/users/me` , {
  //       withCredentials:true
  //     }).then
  //     (({ data })=> {
  //       setCurrentUser(data);
  //     }).catch
  //     ((error)=> console.error(error))
  //   }
  // },[]);
  const state = {
    user: [currentUser,setCurrentUser],
    userCheck: userCheck
  }

  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };