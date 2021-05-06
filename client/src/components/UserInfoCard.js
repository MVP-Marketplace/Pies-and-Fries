import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const UserInfoCard = () => {
  const { userState } = useContext(AppContext);
  const [user] = userState;
  return (
    <>
      <div className='hm-user-info-card'>
        <div className='hm-user-image'></div>
        <div className='hm-user-info'>
          <p className='hm-user-name'>{user && user.name}</p>
          <p className='hm-user-email'>{user && user.email}</p>
        </div>
      </div>
    </>
  );
};
export default UserInfoCard;
