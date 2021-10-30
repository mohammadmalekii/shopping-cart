import BasketTable from "../components/Basket/BasketTable";
import BasketCalc from "../components/Basket/BasketCalc";
import "../components/Basket/Basket.css";
const BasketPage = () => {
  return (
    <section id='Basket'>
      <BasketTable />
      <BasketCalc />
    </section>
  );
};

export default BasketPage;
