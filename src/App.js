import Home from "./pages/Home";
// import Blog from './pages/Blog';
// import Basket from './pages/Basket';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <Blog />
        <Basket />  */}
      <Footer />
    </div>
  );
};

export default App;
