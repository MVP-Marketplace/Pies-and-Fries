import './App.scss';
import './styles/Home.scss';
import './styles/Navbar.scss';
import './styles/Signin.scss';
import './styles/Cart.scss';
import './styles/HamburgerMenu.scss';
import './styles/UserInfoCard.scss';
import './styles/Profile.scss';
import './styles/Feedback.scss';
import './styles/InviteFriends.scss';
import './styles/Legal.scss';
import './styles/NotficationPreferences.scss';
import './styles/Rewards.scss';
import './styles/Help.scss';
import './styles/Logout.scss';
import './styles/Tracking.scss';
import './styles/CreateAccountForm.scss';
import './styles/CurrentOrderHm.scss';
import './styles/CustomerDetails.scss';
import './styles/OrderHistoryHm.scss';
import './styles/DriverDetails.scss';
import { useContext, useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import SignIn from './components/SignIn';
import Admin from './components/Admin';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AuthHome from './pages/AuthHome';
import Tracking from './pages/Tracking';
import './styles/Admin.scss';
import { AppContext } from './context/AppContext';
import Driver from './components/Driver';
import OrderHistory from './pages/OrderHistory';

function App() {
  const { userState, userCheck} = useContext(AppContext);
  const [displayModal, setDisplayModal] = useState(false);
  const [user] = userState;


  useEffect(userCheck, []);

  return (
    <>
      <Navbar displayModal={displayModal} setDisplayModal={setDisplayModal} />
      <Route exact path='/'>
        {user && user.driver ? <Redirect to='/driver' /> : <Redirect to='/' />}
      </Route>
      <Route exact path='/'>
        {user && user.admin ? <Redirect to='/admin' /> : <Redirect to='/' />}
      </Route>

      <Route exact path='/'>
        {user ? (
          <AuthHome
            displayModal={displayModal}
            setDisplayModal={setDisplayModal}
          />
        ) : (
          <Home />
        )}
      </Route>

      <Route exact path='/signin' render={() => <SignIn signIn={true} />} />
      <Route exact path='/tracking' render={() => <Tracking />} />
      <Route exact path='/signup' render={() => <SignIn signIn={false} />} />
      {user && user.driver ? (
        <Route exact path='/driver' render={() => <Driver />} />
      ) : (
        <Redirect to='/' />
      )}
      {user && user.admin ? (
        <Route exact path='/admin' render={() => <Admin />} />
      ) : (
        <Redirect to='/' />
      )}
      {/* <Route exact path='/store' render={() => <Store />} />
      <Route exact path='/profile' render={() => <Profile />} /> */}
      <Route exact path='/orderhistory' render={() => <OrderHistory />} />
    </>
  );
}

export default App;
