import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, getFilterStatus } from "../../Redux/filterSlice";
import "./filter.css";
const Filter = () => {
  const filterStatus = useSelector(getFilterStatus);

  const dispatch = useDispatch();

  const [filterBtn] = useState([
    { name: "همه", category: "all" },
    { name: "مبل", category: "sofa" },
    { name: "صندلی", category: "chair" },
    { name: "چراغ", category: "light" },
    { name: "میز", category: "desk" },
  ]);

  return (
    <section className='filter-section'>
      <div className='filter-container'>
        <ul className='filter-btns'>
          {filterBtn.map((filter) => (
            <li className='filter-btn' key={filter.category}>
              <button
                onClick={() => dispatch(changeFilter(filter.category))}
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
