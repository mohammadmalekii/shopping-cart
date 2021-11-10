import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  fetchSearchProduct,
  getSearch,
  updateSearch,
} from "../../Redux/productSlice";
const Search = () => {
  const search = useSelector(getSearch);
  const dispatch = useDispatch();

  const [, setSearchText] = useState("");
  const handleSearch = (e) => {
    const text = e.target.value.trim();
    setSearchText(text);
    dispatch(updateSearch(text));
  };

  useEffect(() => {
    if (search.length !== 0) {
      dispatch(fetchSearchProduct(search));
    } else {
      dispatch(fetchProduct());
    }
  }, [dispatch, search]);

  return (
    <div className='search-container'>
      <input
        className='search'
        type='text'
        placeholder='جستجو...'
        value={search}
        onChange={handleSearch}
      />
      {/* <i class='fas fa-search'></i> */}
    </div>
  );
};

export default Search;
