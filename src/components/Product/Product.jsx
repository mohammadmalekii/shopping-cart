const Product = ({ product }) => {
  return (
    <div className='product'>
      <div className='img-container'>
        <img src={product.imageUrl} className='product-img' alt='img' />
      </div>
      <div className='product-body'>
        <p className='product-title'>{product.title}</p>
        <p className='product-price'>{product.price} تومان</p>
      </div>
      <button className='add-to-cart'>خـریـد</button>
    </div>
  );
};

export default Product;
