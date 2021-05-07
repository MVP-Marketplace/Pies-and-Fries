import '../assets/CurrentOrders.svg';

const CurrentOrderHm = () => {
  return (
    <div className='hm-Current-order-card'>
      <img
        src={require('../assets/CurrentOrders.svg').default}
        alt='question mark'
        className='hm-Current-order-image'
      />
      <h3 className='hm-Current-order-title'>Current Orders</h3>
    </div>
  );
};
export default CurrentOrderHm;
