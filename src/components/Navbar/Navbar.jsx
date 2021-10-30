import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className='nav-container'>
        <button className='navbar-toggler' type='button'>
          <i className='fas fa-2x fa-bars'></i>
        </button>

        <div className='nav-list'>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <a className='nav-link'>فروشگاه</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link'>مقالات</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link'>درباره ما</a>
            </li>
          </ul>
        </div>

        <div className='nav-title'>
          <a className='navbar-title'>فروشگاه دکوپاژ</a>
        </div>

        <div className='cart-wrapper'>
          <button type='button' className='basket'>
            <i className='fas fa-shopping-cart'></i>
            <span className=''>5</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
