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
import { useState } from 'react';
import { Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import UserDashboard from './components/UserDashboard';
import { AppContextProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Store from './components/Store';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const [userLoggedIn, setUserLogginIn] = useState(false);
  return (
    <>
      <AppContextProvider>
        <Navbar userLoggedIn={userLoggedIn} setUserLogginIn={setUserLogginIn} />
        <Route exact path='/' component={Home} />
        <Route exact path='/signin' render={() => <SignIn signIn={true} />} />
        <Route exact path='/signup' render={() => <SignIn signIn={false} />} />
        <Route
          exact
          path='/dashboard'
          render={() => <UserDashboard setUserLogginIn={setUserLogginIn} />}
        />
        <Route exact path='/store' render={() => <Store />} />
        <Route exact path='/profile' render={() => <Profile />} />
        {/* <Route exact path="/checkout" render={() => <ShoppingCart setUserLogginIn ={setUserLogginIn} cart = {cart} counter={counter} setCart={setCart}/>} /> */}
      </AppContextProvider>
    </>
  );
}

export default App;
