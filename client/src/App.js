import './App.css';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import UserDashboard from './components/UserDashboard';
import { AppContextProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Store from './components/Store';
import Home from './pages/Home';
import Profile from './pages/Profile';

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
      </AppContextProvider>
    </>
  );
}

export default App;
