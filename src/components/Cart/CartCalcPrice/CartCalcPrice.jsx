import { useSelector } from "react-redux";
import { formatCurrency } from "../../formatCurrency";
import basket from "./basket.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { clearCart } from "../../../Redux/cartSlice";
const BasketCalc = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    dispatch(clearCart());
    toast.success("پرداخت انجام شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className='price-section'>
      <div className='price-container'>
        <div className='price-line'></div>
        <div className='price-top'>
          <p>
            قیمت نهایی : <span> {formatCurrency(totalPrice)}</span>
          </p>
        </div>
        <div className='price-body'>
          <button className='checkout' onClick={handleCheckout}>
            تسویه حساب
          </button>
        </div>
        <div className='price-footer'>
          <img src={basket} alt='basket' />
        </div>
      </div>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
};

export default BasketCalc;
