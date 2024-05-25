/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { searchTitle } from "../Store/SliceProducts";

const SearchProduct = () => {

  const dispatch = useDispatch();
  const handleSearchtitle = (title) => {
    dispatch(searchTitle(title));
  }


  return (
    <>
      <div className="searchBlock">
        <input
          onChange={(e) => handleSearchtitle(e.target.value)}
          className="py-5 px-3 rounded-md"
          type="text"
          placeholder="search"
          id="search"
        />
      </div>
    </>
  );
};

export default SearchProduct;
