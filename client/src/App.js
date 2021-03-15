import './App.css';
import {useState, useEffect} from 'react'
import { Route } from 'react-router-dom'
import SignIn from './components/SignIn'
import UserDashboard from './components/UserDashboard'
import { AppContextProvider } from './context/AppContext'
import Navbar from './components/Navbar'
import Store from './components/Store'
import ShoppingCart from './components/ShoppingCart'
import { propTypes } from 'react-bootstrap/esm/Image';
function App() {
  const [userLoggedIn, setUserLogginIn] = useState(false)
  const [cart,setCart] = useState([])
  const [counter,setCounter] = useState(1)
  // for use in shopping cart to delete item 
  const cartLength = cart.length
 useEffect(() => {
   console.log('length',cart)
 },[cart])
  return (
    <>
    <AppContextProvider>
      <Navbar 
      userLoggedIn={userLoggedIn} 
       setUserLogginIn ={setUserLogginIn}
       cartLength={cartLength}/>
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
      <Route exact path="/dashboard" render={() => (
        <UserDashboard 
        setUserLogginIn ={setUserLogginIn}
        />
      )} />
      <Route exact path="/checkout" render={() => (
        <ShoppingCart 
        setUserLogginIn ={setUserLogginIn}
        cart = {cart}
        counter={counter}
        setCart={setCart}

        />
      )} />
       <Route exact path="/store" render={() => (
        <Store 
        cart={cart}
        setCart ={setCart}
        />
      )} />
      </AppContextProvider>
    </>
  );
}

export default App;
