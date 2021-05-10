import React, {useContext} from 'react';
import axios from 'axios'
import {AppContext} from '../context/AppContext'
import LogoutIcon from '../assets/logout.svg';
import {Link} from 'react-router-dom'

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
      <img src={LogoutIcon} alt="open door arrow"className='hm-logout-image'/>
      <Link to ="/">
      <h3 className='hm-out-title'>LogOut</h3>

      </Link>
    </div>
  );
};

export default Logout;
