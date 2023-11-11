import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./SliceProducts"




const store = configureStore({
  reducer: {productSlice,}
});

export default store;
