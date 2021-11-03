import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../../Redux/cartSlice";
import { ToastContainer } from "react-toastify";
import CartItem from "../CartItem/CartItem";
import emptyCartSvg from "./empty-cart.svg";

const BasketTable = () => {
  const cart = useSelector((state) => state.cart.list);
  const dispatch = useDispatch();
  const removeAllProduct = () => {
    dispatch(clearCart());
  };

  return (
    <div className='basket-section'>
      <div className='basket-list'>
        {cart.length === 0 ? (
          <div className='empty-cart'>
            <img src={emptyCartSvg} alt='empty-cart.svg' />
            <h1>سبد خرید شما خالی است !</h1>
          </div>
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th className='th-img'>عکس</th>
                  <th>محصول</th>
                  <th>قیمت</th>
                  <th className='th-qty'>تعداد</th>
                  <th>قیمت کل</th>
                  <th>حذف</th>
                </tr>
              </thead>

              <tbody>
                {cart.map((item) => (
                  <CartItem key={item.id} cart={item} />
                ))}
              </tbody>
            </table>
            <div className='clear-cart'>
              <button onClick={removeAllProduct}>خالی کردن سبد خرید</button>
            </div>
          </>
        )}
        <ToastContainer
          position='top-right'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};

export default BasketTable;
