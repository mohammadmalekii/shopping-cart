import ShopPage from "./pages/ShopPage";
import BlogPage from "./pages/BlogPage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/blog' exact>
          <BlogPage />
        </Route>
        <Route path='/cart' exact>
          <CartPage />
        </Route>
        <Route path='/product/:productId' exact>
          <ProductPage />
        </Route>
        <Route path='/' exact>
          <ShopPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
