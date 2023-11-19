/* eslint-disable no-unused-vars */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProductApi = createAsyncThunk(
  "products/getProductApi",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:6004/product");
      const data = res.json();
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const insertProduct = createAsyncThunk(
  "products/insertProduct",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:6004/product`, {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return item;
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);

// export const postProduct = createAsyncThunk(
//   "products/postProduct",
//   async (element, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     try {
//       await fetch(`http://localhost:3003/heros/${element.id}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json; charset=utf-8",
//         },
//       });
//       return element;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

const productSlice = createSlice({
  name: "products",
  initialState: { getProduct: [], loading: false },

  extraReducers: {
    [getProductApi.pending]: (state, action) => {
      state.loading = true;
    },
    [getProductApi.fulfilled]: (state, action) => {
      state.getProduct.push(...action.payload);
      // console.log(state.getProduct);
    },
    [getProductApi.rejected]: (state, action) => {
      state.loading = false;
    },




    [insertProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [insertProduct.fulfilled]: (state, action) => {
      // state.getProduct.push(...action.payload);
      console.log(action.payload);
    },
    [insertProduct.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default productSlice.reducer;
