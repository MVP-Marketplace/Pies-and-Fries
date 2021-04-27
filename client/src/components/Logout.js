import React, {useContext} from 'react';
import axios from 'axios'
import {AppContext} from '../context/AppContext'
const Logout = () => {
  const {userCheck} = useContext(AppContext)

  const logoutFunc = async () => {
    try {
      let res = await axios.post ('/api/users/logout')
    console.log(res)
      userCheck()
    
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='hm-logout-card' onClick={() => logoutFunc()}>
      <div className='hm-logout-image'></div>
      <h3 className='hm-out-title'>LogOut</h3>
    </div>
  );
};

export default Logout;
