import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const UserInfoCard = () => {
  const { userState } = useContext(AppContext);
  const [user] = userState;
  return (
    <>
      <div className='hm-user-info-card'>
        <img
          src={require(`../assets/profilepic.svg`).default}
          className='profile-pic-cart-hm'
          alt='pizza-img'
        />

        <div className='hm-user-info'>
          <p className='hm-user-name'>{user && user.name}</p>
          <p className='hm-user-email'>{user && user.email}</p>
        </div>
      </div>
    </>
  );
};
export default UserInfoCard;
