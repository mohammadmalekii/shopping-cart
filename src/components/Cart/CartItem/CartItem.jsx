import { useState } from "react";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import {
  removeFromCart,
  incremenetQty,
  decremenetQty,
  calcTotalPrice,
} from "../../../Redux/cartSlice";
import { formatCurrency } from "../../formatCurrency";

const CartItem = ({ cart }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const setIncrease = () => {
    setQty((qty) => qty + 1);
    dispatch(incremenetQty(cart.id));
    dispatch(calcTotalPrice());
  };

  const setDecrease = () => {
    setQty((qty) => qty - 1);
    dispatch(decremenetQty(cart.id));
    dispatch(calcTotalPrice());
  };

  const handleRemove = () => {
    dispatch(removeFromCart(cart.id));
    dispatch(calcTotalPrice());
    toast.error(`${cart.title} از سبد خرید حذف شد`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <tr>
      <td className='product-thumbnail'>
        <img src={cart.imageList[0]} alt='product-img' />
      </td>
      <td className='product-name'>
        <h2>{cart.title}</h2>
      </td>
      <td>{formatCurrency(cart.price)}</td>
      <td>
        <div className='quantity'>
          <button
            className='input-number-decrement'
            onClick={setDecrease}
            disabled={qty <= 1}
          >
            –
          </button>
          <input className='input-number' type='text' value={qty} readOnly />
          <button className='input-number-increment' onClick={setIncrease}>
            +
          </button>
        </div>
      </td>
      <td className='total-price'>{formatCurrency(cart.price * qty)}</td>
      <td>
        <button className='trash' onClick={handleRemove}>
          <i className='fas fa-trash-alt'></i>
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
