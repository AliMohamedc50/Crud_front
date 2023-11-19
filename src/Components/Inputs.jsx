/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

function Inputs() {

        const [price, setPrice] = useState("");
        const [texes, setTexes] = useState("");
        const [ads, setAds] = useState("");
        const [discount, setDiscount] = useState("");
        const [total, setTotal] = useState("");

      useEffect(() => {
        // console.log(price);
        const calculatedTotal = +price + +texes + +ads - +discount;
        setTotal(calculatedTotal);
      }, [price, texes, ads, discount]);

      const post = () => {
        const data = {
          price,
          texes,
          ads,
          discount,
          total,
        };
        return JSON.parse(data);
      }


  return (
    <div className="inputs">
      <input
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
        className="py-5 px-3 rounded-md  my-1"
        type="number"
        id="count"
        placeholder="count"
      />
      <input
        className="py-5 px-3 rounded-md  my-1"
        placeholder="categore"
        type="text"
        id="categore"
      />
      <button
        onClick={() => console.log(post())}
        className="bg-teal-800 text-xl rounded-md  mb-3 p-1"
        id="submit"
      >
        create
      </button>
    </div>
  );
}

export default Inputs
