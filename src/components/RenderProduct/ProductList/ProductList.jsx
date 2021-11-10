import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProduct,
  getAllProduct,
  getProductStatus,
} from "../../../Redux/productSlice";
import Product from "../Product";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./productList.css";
import { getFilterStatus } from "../../../Redux/filterSlice";
const ProductList = () => {
  const data = useSelector(getAllProduct);
  const status = useSelector(getProductStatus);
  const filter = useSelector(getFilterStatus);

  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProduct());
    }
  }, [status, dispatch]);

  let content;
  if (status === "success") {
    content = data.map((productItem) =>
      filter === "all" || filter === productItem.category ? (
        <Product product={productItem} key={productItem.id} />
      ) : null
    );
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
  }
  return (
    <section className='products'>
      <div className='section-title'>
        <h2>محصولات</h2>
      </div>
      <div className='product-list'>{content}</div>
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
    </section>
  );
};

export default ProductList;
