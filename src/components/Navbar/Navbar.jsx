import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const numberOfProduct = useSelector((state) => state.cart.list.length);
  return (
    <nav>
      <div className='nav-container'>
        <button className='navbar-toggler' type='button'>
          <i className='fas fa-2x fa-bars'></i>
        </button>

        <div className='nav-list'>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <NavLink
                exact
                to='/'
                activeClassName='active-link'
                className='nav-link'
              >
                فروشگاه
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                to='/blog'
                activeClassName='active-link'
                className='nav-link'
              >
                مقالات
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                to='/about_us'
                activeClassName='active-link'
                className='nav-link'
              >
                درباره ما
              </NavLink>
            </li>
          </ul>
        </div>

        <div className='nav-title'>
          <NavLink to='/' className='navbar-title'>
            فروشگاه دکوپاژ
          </NavLink>
        </div>

        <div className='cart-wrapper'>
          <Link to='/cart'>
            <button type='button' className='basket'>
              <i className='fas fa-shopping-cart'></i>
              <span className=''>{numberOfProduct}</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
