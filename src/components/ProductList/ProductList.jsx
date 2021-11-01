import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../../Redux/productSlice";
import Product from "../Product";
import Error from "../Error";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./ProductList.css";
const ProductList = () => {
  const data = useSelector((state) => state.product.productList);
  const status = useSelector((state) => state.product.status);

  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProduct());
    }
  }, [status, dispatch]);

  let content;
  if (status === "success") {
    content = data.map((productItem) => (
      <Product product={productItem} key={productItem.id} />
    ));
  } else if (status === "loading") {
    content = (
      <Loader
        style={{ margin: "0 auto" }}
        type='Oval'
        color='#0a9878'
        height={150}
        width={150}
      />
    );
  } else if (status === "error") {
    content = <Error />;
  }
  // استاد این کتابه اسمش english sentence structure هستش  ؟
  return (
    <section className='products'>
      <div className='section-title'>
        <h2>محصولات</h2>
      </div>
      <div className='product-list'>{content}</div>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default ProductList;
