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


// insert Product to json
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




// delete Product to json
  export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",
    async (id, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        await fetch(`http://localhost:6004/product/${id}`, {
          method: "DELETE",
        });
        return id;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  // Update Product in json
  export const updateProduct = createAsyncThunk(
    "products/updateProduct",
    async ( product , thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        await fetch(`http://localhost:6004/product/${product.id}`);
        return  product ;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );


  // search by Title
  export const searchTitle = createAsyncThunk(
    "products/updateProduct",
    async ( title , thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await fetch(`http://localhost:6004/product?title_like=${title}`);
        const data = await res.json();
        return  data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );


const productSlice = createSlice({
  name: "products",
  initialState: {
    getProduct: [],
    loading: false,
    updateData: true,
    holdeProductUpdate: [],
  },
  reducers: {
    toggleUpdateData: (state, action) => {
      state.updateData = !state.updateData;
      state.holdeProductUpdate = action.payload;
      console.log(action.payload);
    },
  },
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
      state.error = action.payload;
      console.log(state.error);
    },

    // insert Product
    [insertProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [insertProduct.fulfilled]: (state, action) => {
      state.getProduct.push(action.payload);
    },
    [insertProduct.rejected]: (state, action) => {
      state.loading = false;
    },

    // Update Product
    [updateProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [updateProduct.fulfilled]: (state, action) => {
      state.getProduct.push(action.payload);
      console.log(action.payload);
    },
    [updateProduct.rejected]: (state, action) => {
      state.loading = false;
    },

    // insertProduct
    [deleteProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.getProduct = state.getProduct.filter(
        (ele) => ele.id !== action.payload
      );
    },
    [deleteProduct.rejected]: (state, action) => {
      state.loading = false;
    },



    // Search by Title
    [searchTitle.pending]: (state, action) => {
      state.loading = true;
    },
    [searchTitle.fulfilled]: (state, action) => {
      state.getProduct = action.payload;
      // console.log(state.getProduct);
    },
    [searchTitle.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      console.log(state.error);
    },
  },
});

export default productSlice.reducer;
export const { toggleUpdateData } = productSlice.actions;
