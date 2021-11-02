import { useDispatch, useSelector } from "react-redux";
import { addToCart, calcTotalPrice } from "../../Redux/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { formatCurrency } from "../formatCurrency";

const Product = ({ product }) => {
  console.log(formatCurrency(product.price));
  console.log(product.price);

  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.list);

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

  const [isInCard, setIsInCard] = useState(false);

  useEffect(() => {
    const isInCart = cartList.find((item) => item.id === product.id);
    if (isInCart) {
      setIsInCard(true);
    } else {
      setIsInCard(false);
    }
  }, [cartList, product.id]);

  return (
    <div className='product'>
      <div className='img-container'>
        <img src={product.imageUrl} className='product-img' alt='img' />
      </div>
      <div className='product-body'>
        <p className='product-title'>{product.title}</p>
        <p className='product-price'>{formatCurrency(product.price)}</p>
      </div>
      <button className='add-to-cart' onClick={addToBasket} disabled={isInCard}>
        {isInCard ? "در سبد خرید موجود است" : "خـریـد"}
      </button>
    </div>
  );
};

export default Product;
