import React from 'react';
import Notification from '../assets/notification.svg';

const NotificationPreferences = () => {
  return (
    <div className='hm-np-card'>
        <img src={Notification} alt="bell" className='hm-np-image'/>
      <h3 className='hm-np-title'>Notification Preferences</h3>
    </div>
  );
};

export default NotificationPreferences;
