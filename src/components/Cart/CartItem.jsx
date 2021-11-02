import { useState } from "react";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import {
  removeFromCart,
  incremenetQty,
  decremenetQty,
} from "../../Redux/cartSlice";

const CartItem = ({ cart }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const setIncrease = () => {
    setQty((qty) => qty + 1);
    dispatch(incremenetQty(cart.id));
  };

  const setDecrease = () => {
    setQty((qty) => qty - 1);
    dispatch(decremenetQty(cart.id));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(cart.id));
    toast.error(`${cart.title} از سبد خرید حذف شد !`, {
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
        <img src={cart.imageUrl} alt='product-img' />
      </td>
      <td className='product-name'>
        <h2>{cart.title}</h2>
      </td>
      <td>{cart.price}</td>
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
      <td className='total-price'>159,000</td>
      <td>
        <button className='trash' onClick={handleRemove}>
          <i className='fas fa-trash-alt'></i>
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
