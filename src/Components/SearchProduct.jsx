/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { searchTitle } from "../Store/SliceProducts";

const SearchProduct = () => {

  const dispatch = useDispatch();
//   const { getProduct } = useSelector((state) => state.productSlice);
  const handleSearchtitle = (title) => {
    dispatch(searchTitle(title));
    // console.log(title);
  }
  const sdfsdaf = (e) => {
    console.log(e.target.style.background = 'red')
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
      <div className="btnSearch">
        <button  onClick={(e) => sdfsdaf(e)} className="bg-teal-800 m-1 p-2" id="searchTitle">
          Search By Title
        </button>
        <button onClick={(e) => sdfsdaf(e)} className="bg-teal-800 m-1 p-2" id="searchCategory">
          Search By Category
        </button>
      </div>
    </>
  );
};

export default SearchProduct;
