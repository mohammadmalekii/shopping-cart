import { useState } from "react";
const ProductImage = ({ imageList }) => {
  const [imgSrc, setImgSrc] = useState(null);
  const imageSlider = (src) => {
    setImgSrc(src);
  };
  return (
    <div className='product-image-container'>
      <div className='product-image'>
        <img src={imgSrc === null ? imageList[0] : imgSrc} alt='product-img' />
      </div>
      <div className='sub-image-container'>
        {imageList.map((img) => (
          <ul className='sub-image' key={img}>
            <li>
              <img
                loading='lazy'
                src={img}
                alt='product-img'
                onMouseOver={() => imageSlider(img)}
              />
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
