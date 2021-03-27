import React from 'react';
import { Button } from 'react-bootstrap';

const Profile = () => {
  return (
    <div>
      <div>
        <h1>User Name</h1>
        <h3>email</h3>
      </div>
      <hr />
      <div>
        <h1>Profile</h1>
        <ul>
          <li>Perosnal Info</li>
          <li>Payment Options</li>
          <li>Transaction History</li>
        </ul>
      </div>
      <div>
        <h1>Notification Preferences</h1>
      </div>
      <div>
        <h1>Rewards</h1>
      </div>
      <div>
        <h1>Favorite</h1>
      </div>
      <div>
        <h1>Help</h1>
      </div>
      <Button type="button">Log Out</Button>
    </div>

    
  );
};

export default Profile;
