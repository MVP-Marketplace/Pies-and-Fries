import './App.css';
import { Route } from 'react-router-dom'
import SignIn from './components/SignIn'
import UserDashboard from './components/UserDashboard'
import { AppContextProvider } from './context/AppContext'



function App() {
  return (
    <>
    <AppContextProvider>
      <Route exact path="/signin" render={() => (
        <SignIn 
        signIn={true}
        />
      )} />
      <Route exact path="/signup" render={() => (
        <SignIn 
        signIn={false}
        />
      )} />
      <Route exact path="/user" render={() => (
        <UserDashboard 
        />
      )} />
      </AppContextProvider>
    </>
  );
}

export default App;
