import BasketTable from "../../components/Cart/CartTable/CartTable";
import BasketCalc from "../../components/Cart/CartCalcPrice/CartCalcPrice";
import "../../components/Cart/cart.css";
const CartPage = () => {
  return (
    <section id='Basket'>
      <BasketTable />
      <BasketCalc />
    </section>
  );
};

export default CartPage;
