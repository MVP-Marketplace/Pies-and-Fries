import './App.css';
import './styles/Home.css';
import './styles/Navbar.css';
import './styles/Signin.css';
import './styles/Cart.css';
import './styles/HamburgerMenu.css';
import './styles/UserInfoCard.css';
import './styles/Profile.css';
import './styles/Feedback.css';
import './styles/InviteFriends.css';
import './styles/Legal.css';
import './styles/NotficationPreferences.css';
import './styles/Rewards.css';
import './styles/Help.css';
import './styles/Logout.css';
import './styles/CreateAccountForm.css';
import { useState, useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import SignIn from './components/SignIn';
import Admin from './components/Admin';
import UserDashboard from './components/UserDashboard';
import Navbar from './components/Navbar';
import Store from './components/Store';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Tracking from './pages/Tracking';
import ShoppingCart from './components/ShoppingCart';
import './styles/Admin.css';

import { AppContext } from './context/AppContext';
import Driver from './components/Driver';

function App() {
  const { userState, userCheck } = useContext(AppContext);
  const [user, setUser] = userState;
  const checkUser = userCheck;

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <>
      <Navbar />
      <Route exact path = '/'>
        {user && user.driver ? <Redirect to="/driver"/> : <Redirect to="/" />}
      </Route>
      <Route exact path = '/'>
        {user && user.admin ? <Redirect to="/admin"/> : <Redirect to="/" />}
      </Route>
      <Route exact path='/' component={Home} />
      

      <Route exact path='/signin' render={() => <SignIn signIn={true} />} />

      <Route exact path='/tracking' render={() => <Tracking />} />
      <Route exact path='/signup' render={() => <SignIn signIn={false} />} />
      
      <Route exact path='/admin' render={() => <Admin />} /> 
      {/* {user && user.admin === true ?  <Route exact path='/admin' render={() => <Admin />} /> : <Redirect to="/" />} */}
    
      {user && user.driver ? <Route exact path='/driver' render={() => <Driver />} /> : <Redirect to="/" />}
      {user && user.admin ? <Route exact path='/admin' render={() => <Admin />} /> : <Redirect to="/" />}

    
      <Route exact path='/dashboard' render={() => <UserDashboard />} />
      <Route exact path='/store' render={() => <Store />} />
      <Route exact path='/profile' render={() => <Profile />} />

      {/* <Route exact path="/checkout" render={() => <ShoppingCart setUserLogginIn ={setUserLogginIn} cart = {cart} counter={counter} setCart={setCart}/>} /> */}
    </>
  );
}

export default App;
