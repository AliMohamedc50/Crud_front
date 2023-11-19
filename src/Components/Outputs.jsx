/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux';

function Outputs() {



      const { getProduct } = useSelector((state) => state.productSlice);
    //   console.log(getProduct);


    const product =
      getProduct &&
      getProduct.map((product) => (
        <tr key={product.id} className="border-y-2 border-slate-400 ">
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td>{product.price}</td>
          <td>{product.texes}</td>
          <td>{product.ads}</td>
          <td>{product.discount}</td>
          <td>{product.total}</td>
          <td>{product.categore}</td>
          <td>{product.count}</td>
          <td>
            <button className='bg-red-600 hover:bg-red-900 text-xl rounded-md  p-1' id="update">update</button>
          </td>
          <td>
            <button
              className="bg-red-600 hover:bg-red-900 text-xl rounded-md  p-1"
              id="delete"
            >
              delete
            </button>
          </td>
        </tr>
      ));







  return (
    <div className="outputs">
      <div className="searchBlock">
        <input
          className="py-5 px-3 rounded-md"
          type="text"
          placeholder="search"
          id="search"
        />
      </div>
      <div className="btnSearch">
        <button className="bg-teal-800 m-1 p-2" id="searchTitle">
          Search By Title
        </button>
        <button className="bg-teal-800 m-1 p-2" id="searchCategory">
          Search By Category
        </button>
      </div>
      <div id="deleteAll"></div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>price</th>
            <th>taxes</th>

            <th>ads</th>
            <th>discount</th>
            <th>total</th>

            <th>catagory</th>
            <th>Count</th>
            <th>update</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody id="tbody">{product}</tbody>
      </table>
    </div>
  );
}

export default Outputs
