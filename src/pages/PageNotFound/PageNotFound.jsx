import { Link } from "react-router-dom";
import img404 from "./404.png";
import "./pageNotFound.css";
const PageNotFound = () => {
  return (
    <div className='not-found'>
      <h1>صفحه ای که دنبال آن بودید پیدا نشد!</h1>
      <img src={img404} alt='404 not found' />
      <Link to='/'>بازگشت به فروشگاه</Link>
    </div>
  );
};

export default PageNotFound;
