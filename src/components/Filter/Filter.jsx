import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../Redux/filterSlice";
import "./filter.css";
const Filter = () => {
  const filterStatus = useSelector((state) => state.filter.filter);

  const dispatch = useDispatch();

  const [filterBtn, setFilterBtn] = useState([
    { name: "همه", category: "all", active: true },
    { name: "مبل", category: "sofa", active: false },
    { name: "صندلی", category: "chair", active: false },
    { name: "چراغ", category: "light", active: false },
    { name: "میز", category: "desk", active: false },
  ]);

  const handleFilter = (filter) => {
    dispatch(changeFilter(filter));
    const array = [...filterBtn];
    array.map((item) => {
      if (filterStatus !== item.category) {
        item.active = false;
      }
      return item;
    });
    const item = array.find((item) => item.category === filter);
    item.active = true;
    setFilterBtn(array);
  };

  return (
    <section className='filter-section'>
      <div className='filter-container'>
        <ul className='filter-btns'>
          {filterBtn.map((filter) => (
            <li className='filter-btn' key={filter.category}>
              <button
                onClick={() => handleFilter(filter.category)}
                className={
                  filter.category === filterStatus
                    ? "active-filter"
                    : "deactive-filter"
                }
              >
                {filter.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Filter;
