import {  useContext } from 'react';
import { AppContext } from '../context/AppContext';
import rating from '../assets/rating.svg';
// import pizzaPaddle from '../assets/pizzaPaddle.svg';
import pizzaMonster from '../assets/pizzamonster.svg';
import pizzaSlice from '../assets/pizzaSlice.svg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import PreviousOrder from '../components/PreviousOrder';
import Cart from '../components/Cart';

const AuthHome = props => {
  const { userState } = useContext(AppContext);
  const [user] = userState;
  return (
    <div className='homepage-container'>
      <h1 className='home-greeting'>Shalom, {user.name}</h1>
      <div className='hero-wrapper'>
        <div className='hero-container'>
          <h1 className='hero-title hero-text'>
            ONE click away to your Pizza!
            <br />
            Earn rewards as you go!
          </h1>
        </div>
      </div>
      <div className='previous-order-wrapper'>
        {/* <div className="previous-order-header">
      <h3>
        Reordering?
      </h3>
      <p>One Click away from Express Reorder</p>
      </div> */}
        {/* <div id='test'>
          <PreviousOrder />
          <PreviousOrder />
        </div> */}
      </div>
      <div className='pizza-wrapper'>
        <div className='pizza-card left-card'>
          <h3>Classic Plain Cheese Pie</h3>
          <p>Estimated Delivery</p>
          <p>30 minutes</p>
          <img src={rating} alt='rating' id='rating-img' />
          <button
            className='btn-order'
            onClick={() => props.setDisplayModal(!props.displayModal)}
          >
            Order Now!
          </button>
        </div>
        <div className='pizza-card right-card'>
          {/* <img src={pizzaPaddle} alt='pizza' /> */}
        </div>
      </div>
      <Carousel
        className='carousel-wrapper'
        autoPlay
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        swipeable={true}
        emulateTouch={true}
      >
        <div className='first-carousel'>
          <div>
            <p> Discounts up to</p>
            <h3>10%</h3>
            <p>for first time orders!</p>
          </div>
          <img src={pizzaSlice} alt='pizza slice' id='pizza-img' />
        </div>
        <div className='jumbotron second-carousel'>
          <div>
            <p>Earn our</p>
            <h3>Rewards</h3>
            <p>today!</p>
          </div>
          <img src={pizzaMonster} alt='pizza monster' id='pizza-monster' />
        </div>
      </Carousel>
    </div>
  );
};

export default AuthHome;
