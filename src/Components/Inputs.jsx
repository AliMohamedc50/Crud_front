/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { insertProduct } from "../Store/SliceProducts";

function Inputs() {
  const dispatch = useDispatch();

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
    // if (title) {
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
      // return data;
      dispatch(insertProduct(data));
    }else {
      console.log("fdgfrdgg")
    }



  };

  // console.log(Boolean(title));

  return (
    <form className="inputs" onSubmit={getData}>
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
      <button
        type="submit"
        className="bg-teal-800 text-xl rounded-md  mb-3 p-1"
        id="submit"
      >
        create
      </button>
    </form>
  );
}

export default Inputs;
