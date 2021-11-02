import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-text'>
          <p>طراحی و توسعه توسط محمد ملکی</p>
        </div>
        <ul className='social'>
          <li>
            <i className='fab fa-github'></i>
          </li>
          <li>
            <i className='fab fa-telegram'></i>
          </li>
          <li>
            <i className='fas fa-envelope-square'></i>
          </li>
          <li>
            <i className='fab fa-instagram'></i>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
