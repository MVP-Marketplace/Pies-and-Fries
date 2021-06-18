import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import CartIcon from '../assets/CartIcon.svg';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import Checkout from '../components/Checkout';
import { set } from 'mongoose';

export const Cart = props => {
  const [name, setName] = useState('Pizza');
  const [price, setPrice] = useState(12.0);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(1);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(null);
  const [contactFree, setContactFree] = useState(false);
  const { userState } = useContext(AppContext);
  const [user] = userState;

  const getTotal = props => {
    setTotal(price * quantity);
  };
  return (
    <>
      <img
        src={CartIcon}
        alt='cart'
        className='hm-cart'
        onClick={() => props.setDisplayModal(!props.displayModal)}
      />
      <div className={`Modal ${props.displayModal ? 'Show' : ''}`}>
        <h3 className='cart-heading'>Cart:</h3>
        <CartItem
          setQuantity={setQuantity}
          quantity={quantity}
          total={total}
          getTotal={getTotal}
        />
        <div className='pc-adderss-card'>
          <div className='pc-location-container'>
            <p className='pc-location-name'>Home</p>
            <p className='pc-address'>{user.delivery_address}</p>
          </div>
          <button className='pc-address-edit-btn'>Edit</button>
        </div>

        <div className='pc-delivery-type-container'>
          <div className='pc-contact-free-delivery-container'>
            <div className='pc-contact-delivery-des'>
              <p className='pc-contact-type-heading'>Contact Free Delivery</p>
              <p className='pc-contact-type-des'>
                Driver will drop off order and notify you
              </p>
            </div>

            <div className='pc-contact-checkbox'>
              <input
                className='pc-check-delivery-type'
                class='pc-check-delivery-type'
                type='checkbox'
                value=''
                id='pc-check-delivery-type-1'
                checked={true}

                // onChange={() => setContactFree(true)}
                // defaultChecked={!contactFree}
              />
            </div>
          </div>
          <div className='pc-door-delivery-container'>
            <div className='pc-contact-delivery-des'>
              <p className='pc-contact-type-heading'>Door Delivery</p>
              <p className='pc-contact-type-des'>
                Driver will drop notify you and meet at your door
              </p>
            </div>
            <div className='pc-contact-checkbox'>
              <input
                className='pc-check-delivery-type'
                class='pc-check-delivery-type'
                type='checkbox'
                value=''
                id='pc-check-delivery-type-2'
              />
            </div>
          </div>
        </div>
        <div className='amount-container'>
          <div className='subtotal-container'>
            <p className='subtotal-heading'>Subtotal</p>
            <p className='subtotal-amount'>${total}</p>
          </div>
          <div className='tax-container'>
            <p className='tax-heading'>Tax</p>
            <p className='tax-amount'>$0.00</p>
          </div>
          <div className='tip-container'>
            <p className='tip-heading'>Tip</p>
            <p className='tip-amount'>$0.00</p>
          </div>
          <div className='total-container'>
            <p className='total-heading'>Total</p>
            <p className='total-amount'>${total}</p>
          </div>
        </div>

        {/* <Link to='/tracking'></Link> */}
        <Checkout
          name={name}
          price={price}
          quantity={quantity}
          total={total}
          size={size}
          contactFree={contactFree}
          className='checkout-btn'
          onClick={() => props.setDisplayModal(!props.displayModal)}
        />
        <button
          className='Close'
          onClick={() => props.setDisplayModal(!props.displayModal)}
        >
          X
        </button>
      </div>
      <div
        className={`Overlay ${props.displayModal ? 'Show' : ''}`}
        onClick={() => props.setDisplayModal(!props.displayModal)}
      />
    </>
  );
};
export default Cart;
