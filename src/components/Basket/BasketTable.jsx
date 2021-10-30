import sofia from "./era-chair3.jpeg";
const BasketTable = () => {
  return (
    <div className='basket-section'>
      <div className='basket-list'>
        <table>
          <thead>
            <tr>
              <th class='title-img'>عکس</th>
              <th>محصول</th>
              <th>قیمت</th>
              <th>تعداد</th>
              <th>قیمت کل</th>
              <th>حذف</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className='product-thumbnail'>
                <img src={sofia} alt='product-img' />
              </td>
              <td className='product-name'>
                <h2>مبل سوفیا</h2>
              </td>
              <td>47,000</td>
              <td>
                <div className='quantity'>
                  <span className='input-number-decrement'>–</span>
                  <input
                    className='input-number'
                    type='text'
                    value='1'
                    min='1'
                  />
                  <span className='input-number-increment'>+</span>
                </div>
              </td>
              <td>159,000</td>
              <td>
                <button className='trash'>
                  <i className='fas fa-trash-alt'></i>
                </button>
              </td>
            </tr>

            <tr>
              <td className='product-thumbnail'>
                <img src={sofia} alt='product-img' />
              </td>
              <td className='product-name'>
                <h2>مبل سوفیا</h2>
              </td>
              <td>47,000</td>
              <td>
                <div className='quantity'>
                  <span className='input-number-decrement'>–</span>
                  <input
                    className='input-number'
                    type='text'
                    value='1'
                    min='1'
                  />
                  <span className='input-number-increment'>+</span>
                </div>
              </td>
              <td>159,000</td>
              <td>
                <button className='trash'>
                  <i className='fas fa-trash-alt'></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BasketTable;
