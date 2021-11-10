import { formatCurrency } from "../../formatCurrency";
import {
  addToCart,
  calcTotalPrice,
  getCartList,
} from "../../../Redux/cartSlice";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductSellInfo = ({ product }) => {
  const dispatch = useDispatch();
  const [isInCard, setIsInCard] = useState(false);
  const cartList = useSelector(getCartList);

  const addToBasket = () => {
    dispatch(addToCart(product));
    dispatch(calcTotalPrice());

    toast.success(`${product.title} به سبد خرید اضافه شد`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    const isInCart = cartList.find((item) => item.id === product.id);
    if (isInCart) {
      setIsInCard(true);
    } else {
      setIsInCard(false);
    }
  }, [cartList, product.id]);

  return (
    <div className='product-info'>
      <div className='product-info-top'>
        <p className='route'>
          <Link to='/'>فروشگاه</Link>/{product.title}
        </p>
      </div>
      <div className='product-info-body'>
        <h1>{product.title}</h1>
        <h5>{formatCurrency(product.price)}</h5>
      </div>

      <div className='product-info-bottom'>
        <button
          className='add-to-cart-btn'
          onClick={addToBasket}
          disabled={isInCard}
        >
          {isInCard ? "در سبد خرید موجود است" : "خـریـد"}
        </button>
      </div>
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
  );
};

export default ProductSellInfo;
