import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import emptyCartSvg from "./empty-cart.svg";

const BasketTable = () => {
  const cart = useSelector((state) => state.cart.list);

  return (
    <div className='basket-section'>
      <div className='basket-list'>
        {cart.length === 0 ? (
          <div className='empty-cart'>
            <img src={emptyCartSvg} alt='empty-cart.svg' />
            <h1>سبد خرید شما خالی است</h1>
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th className='title-img'>عکس</th>
                <th>محصول</th>
                <th>قیمت</th>
                <th>تعداد</th>
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
        )}
      </div>
    </div>
  );
};

export default BasketTable;
