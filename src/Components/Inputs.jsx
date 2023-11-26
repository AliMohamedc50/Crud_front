/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertProduct, toggleUpdateData, updateProduct } from "../Store/SliceProducts";




function Inputs() {

  const dispatch = useDispatch();
  const { updateData, holdeProductUpdate } = useSelector(
    (state) => state.productSlice
  );

  const [title, setTitle] = useState("");
  const [categore, setCategore] = useState("");
  const [price, setPrice] = useState("");
  const [texes, setTexes] = useState("");
  const [ads, setAds] = useState("");
  const [discount, setDiscount] = useState("");
  const [total, setTotal] = useState("");
  const [count, setCount] = useState("");



  useEffect(() => {
    const calculatedTotal = +price + +texes + +ads - +discount;
    setTotal(calculatedTotal);
  }, [price, texes, ads, discount]);


  const getData = (e) => {
    e.preventDefault()
    if (title && categore && price && texes && ads && discount && count) {
      dispatch(toggleUpdateData(""));
      const data = {
        title,
        categore,
        price,
        texes,
        ads,
        discount,
        total,
        count,
      };
      dispatch(insertProduct(data));

      setCategore("")
      setTitle("")
      setPrice("")
      setTexes("")
      setAds("")
      setDiscount("")
      setTotal("")
      setCount("")
      
    }else {
      console.log("fdgfrdgg")
    }
  };

  useEffect(() => {
    if (!updateData) {
      setTitle(holdeProductUpdate.title);
      setCategore(holdeProductUpdate.categore);
      setPrice(holdeProductUpdate.price);
      setTexes(holdeProductUpdate.texes);
      setAds(holdeProductUpdate.ads);
      setDiscount(holdeProductUpdate.discount);
      setCount(holdeProductUpdate.count);
      // setId(holdeProductUpdate.id);
    }else {
      // setId(null)
      setCategore("");
      setTitle("");
      setPrice("");
      setTexes("");
      setAds("");
      setDiscount("");
      setTotal("");
      setCount("");
    }
    
  },[updateData])
  const update = (e) => {
    e.preventDefault();
    if (title && categore && price && texes && ads && discount && count) {
      dispatch(toggleUpdateData(""));
      const data = {
        title,
        id: holdeProductUpdate.id,
        categore,
        price,
        texes,
        ads,
        discount,
        total,
        count,
      };
      dispatch(updateProduct(data));
      setCategore("");
      setTitle("");
      setPrice("");
      setTexes("");
      setAds("");
      setDiscount("");
      setTotal("");
      setCount("");
    }
  }
  

  return (
    <form className="inputs" onSubmit={updateData ? getData : update}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="my-1 px-3 py-5 rounded-md"
        placeholder="title"
        type="text"
        id="title"
      />
      <div className="price">
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="py-5 px-3 rounded-md  my-1 "
          type="number"
          id="price"
          placeholder="price"
        />
        <input
          value={texes}
          onChange={(e) => setTexes(e.target.value)}
          className="py-5 px-3 rounded-md mx-1 my-1"
          type="number"
          id="texes"
          placeholder="texes"
        />
        <input
          value={ads}
          onChange={(e) => setAds(e.target.value)}
          className="py-5 px-3 rounded-md mx-1 my-1"
          type="number"
          id="ads"
          placeholder="ads"
        />
        <input
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          className="py-5 px-3 rounded-md mx-1 my-1"
          type="number"
          id="discount"
          placeholder="discount"
        />
        <small className="p-3 rounded-md mx-1 my-1" id="total">
          {total}
        </small>
      </div>
      <input
        value={count}
        onChange={(e) => setCount(e.target.value)}
        className="py-5 px-3 rounded-md  my-1"
        type="number"
        id="count"
        placeholder="count"
      />
      <input
        value={categore}
        onChange={(e) => setCategore(e.target.value)}
        className="py-5 px-3 rounded-md  my-1"
        placeholder="categore"
        type="text"
        id="categore"
      />
      {updateData ? (
        <button
          // onClick={update}

          type="submit"
          className="bg-teal-800 text-xl rounded-md  mb-3 p-1"
          id="submit"
        >
          create
        </button>
      ) : (
        <button className="bg-teal-800 text-xl rounded-md  mb-3 p-1">
          update
        </button>
      )}
    </form>
  );
}

export default Inputs;
