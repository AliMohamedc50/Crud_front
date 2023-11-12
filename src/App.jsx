/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./Components/Header";
import Inputs from "./Components/Inputs";
import { useEffect } from "react";
import { getProductApi } from "./Store/SliceProducts";
import Outputs from "./Components/Outputs";
// useRef
function App() {

  const dispach = useDispatch()

  // const {}

  const { getProduct } = useSelector((state) => state.productSlice);

  useEffect(() => {
    dispach(getProductApi());
  }, [dispach]);
  
// console.log(getProduct);

  return (
    <>
      <div className="crud">
        <Header />
        <Inputs />
        <Outputs />
      </div>
    </>
  );
}

export default App;
