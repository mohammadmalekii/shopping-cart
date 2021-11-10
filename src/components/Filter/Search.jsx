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
    setSearchText(e.target.value);
    dispatch(updateSearch(e.target.value));
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
        placeholder='جستجو ...'
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
