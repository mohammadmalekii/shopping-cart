import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link, useLocation } from "react-router-dom";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  addToCart,
  calcTotalPrice,
  decremenetQty,
  incremenetQty,
} from "../../Redux/cartSlice";
import {
  fetchSelectProduct,
  removeSelectProduct,
} from "../../Redux/productSlice";
import { formatCurrency } from "../formatCurrency";
import "./productDetail.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const url = useParams();
  console.log(url);
  const product = useSelector((state) => state.product.selectProduct);

  const location = useLocation();
  console.log(location.pathname);

  const [qty, setQty] = useState(1);
  const [imgSrc, setImgSrc] = useState(null);

  const dispatch = useDispatch();

  const setIncrease = () => {
    setQty((qty) => qty + 1);
    dispatch(incremenetQty(product.id));
    dispatch(calcTotalPrice());
  };

  const setDecrease = () => {
    setQty((qty) => qty - 1);
    dispatch(decremenetQty(product.id));
    dispatch(calcTotalPrice());
  };

  const imageSlider = (src) => {
    setImgSrc(src);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchSelectProduct(productId));
    return () => {
      dispatch(removeSelectProduct());
    };
    // }
  }, [dispatch, productId]);

  //   useEffect(() => {
  //     if (status === "idle") {
  //       console.log("render");
  //     }
  //     return () => {
  //       console.log("unmount");
  //     };
  //   }, [status]);

  return Object.keys(product).length === 0 ? (
    <div className='loader-product-page'>
      <Loader
        // style={{ textAlign: "center" }}
        type='Oval'
        color='#0a9878'
        height={150}
        width={150}
      />
    </div>
  ) : (
    <>
      <section id='product-page-section'>
        <div className='product-page'>
          <div className='product-info'>
            <div className='product-info-top'>
              <p className='route'>
                <Link to='/'>فروشگاه</Link>/{product.title}
              </p>
            </div>
            <div className='product-info-body'>
              <h1>{product.title}</h1>
              <h5>{formatCurrency(product.price)}</h5>
            </div>

            <div className='product-info-bottom'>
              <button className='add-to-cart-btn'>خـریـد </button>
              <div className='quantity-product'>
                <button
                  className='input-number-decrement'
                  onClick={setDecrease}
                  disabled={qty <= 1}
                >
                  –
                </button>
                <input
                  className='input-number'
                  type='text'
                  value={qty}
                  readOnly
                />
                <button
                  className='input-number-increment'
                  onClick={setIncrease}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className='product-image-container'>
            <div className='product-image'>
              <img
                src={imgSrc === null ? product.imageList[0] : imgSrc}
                alt={product.title}
              />
            </div>
            <div className='sub-image-container'>
              {product.imageList.map((img) => (
                <div className='sub-image' key={img}>
                  <a href='#'>
                    <img
                      src={img}
                      alt='product-img'
                      onMouseOver={() => imageSlider(img)}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id='description-section'>
        <div className='btn-tab'>
          <button>توضیحات</button>
          <button>بررسی</button>
        </div>

        <div className='description'>
          <div className='description-title'>
            <h1>توضیحات</h1>
          </div>
          <div className='description-body'>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
              گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
              که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
              متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
              و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
              طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
              الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
              صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
              شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
              دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
              اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
