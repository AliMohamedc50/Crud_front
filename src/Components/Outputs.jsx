/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, toggleUpdateData } from '../Store/SliceProducts';

function Outputs() {

  const dispatch = useDispatch();
  const { getProduct } = useSelector((state) => state.productSlice);

  //? send data to store for update
  const handelUpdateData = (product) => {
    dispatch(toggleUpdateData(product));
  }

    const product =  getProduct?.map((product, i) => (
        <tr key={product.id} className="border-y-2 border-slate-400 ">
          <td>{++i}</td>
          <td>{product.title}</td>
          <td>{product.price}</td>
          <td>{product.texes}</td>
          <td>{product.ads}</td>
          <td>{product.discount}</td>
          <td>{product.total}</td>
          <td>{product.categore}</td>
          <td>{product.count}</td>
          <td>
            <button
              onClick={() => handelUpdateData(product)}
              className="bg-red-600 hover:bg-red-900 text-xl rounded-md  p-1"
              id="update"
            >
              update
            </button>
          </td>
          <td>
            <button
              onClick={() => dispatch(deleteProduct(product.id))}
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
