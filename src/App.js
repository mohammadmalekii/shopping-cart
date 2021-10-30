import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import BasketPage from "./pages/BasketPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <HomePage /> */}
      <BlogPage />
      {/* <BasketPage /> */}
      <Footer />
    </>
  );
};

export default App;
