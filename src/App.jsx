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
  useEffect(() => {
    dispach(getProductApi());
  }, [dispach]);

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
