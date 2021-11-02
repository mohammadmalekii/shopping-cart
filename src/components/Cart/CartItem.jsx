const CartItem = ({ cart }) => {
  return (
    <tr>
      <td className='product-thumbnail'>
        <img src={cart.imageUrl} alt='product-img' />
      </td>
      <td className='product-name'>
        <h2>{cart.title}</h2>
      </td>
      <td>{cart.price}</td>
      <td>
        <div className='quantity'>
          <span className='input-number-decrement'>–</span>
          <input className='input-number' type='text' value='1' min='1' />
          <span className='input-number-increment'>+</span>
        </div>
      </td>
      <td className='total-price'>159,000</td>
      <td>
        <button className='trash'>
          <i className='fas fa-trash-alt'></i>
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
