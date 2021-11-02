import basket from "./basket.png";
const BasketCalc = () => {
  return (
    <div className='price-section'>
      <div className='price-container'>
        <div className='price-line'></div>
        <div className='price-top'>
          <p>
            قیمت نهایی : <span> 750,000 تومان</span>
          </p>
        </div>
        <div className='price-body'>
          <button className='checkout'>تسویه حساب</button>
        </div>
        <div className='price-footer'>
          <img src={basket} alt='basket' />
        </div>
      </div>
    </div>
  );
};

export default BasketCalc;
