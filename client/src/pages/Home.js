import pizzaMonster from '../assets/pizzamonster.svg';
import '../styles/Home.css';
const home = () => {
  return (
    <div className='hompage-container'>
      <h1 className='heading-homepage'>Shalom, Friend!</h1>
      <div className='box1'>
        <p className='box-1-des'>BEST pizza in the FASTEST way!</p>
        <p className='box-1-des-2'>
          Pizza ordering has never been so easy and simple. Enjoy one click
          pizza ordering experience with Pies & Fries More you order - more free
          pies you earn!
        </p>
      </div>

      <div className='hungry-cont'>
        <h2 className='heading2'>Are You HUNGRY?!</h2>
        <button className='hungry-order-btn'>Order Now</button>
      </div>

      <div className='container-midsection'>
        <div className='midsection-left'>
          <p className='midsection-des-1'>Welcome Bonus!</p>
          <p className='midsection-des-2'>
            10% off on your first order and free delivery !!
          </p>
        </div>
        <div className='midsection-middle'>
          <div className='midsection-top'>
            <div className='midsection-middle-text'>
              <p className='midsection-des-2'>Earn our</p>
              <p className='midsection-des-1'>Rewards!</p>
              <p className='midsection-des-2'>Are you hungry?</p>
            </div>
            <div>
              <img src={pizzaMonster} alt='pizza monster' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
