import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  fetchSelectProduct,
  getSelectedProduct,
  removeSelectProduct,
} from "../../Redux/productSlice";
import ProductSellInfo from "../../components/ProductDetail/ProductSellInfo";
import ProductImage from "../../components/ProductDetail/ProductImage";
import ProductInfo from "../../components/ProductDetail/ProductInfo";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./productPage.css";

const ProductPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(getSelectedProduct);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchSelectProduct(productId));
    return () => {
      dispatch(removeSelectProduct());
    };
  }, [dispatch, productId]);

  return Object.keys(product).length === 0 ? (
    <div className='loader-product-page'>
      <Loader type='Oval' color='#0a9878' height={150} width={150} />
    </div>
  ) : (
    <>
      <section id='product-page-section'>
        <div className='product-page'>
          <ProductSellInfo product={product} />
          <ProductImage imageList={product.imageList} />
        </div>
      </section>
      <ProductInfo />
    </>
  );
};

export default ProductPage;
