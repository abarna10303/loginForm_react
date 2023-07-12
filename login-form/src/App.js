import React from "react";
import FunctionForm from "./functionForm/functionForm";
import ClassForm from "./ClassForm/ClassForm";
import SignIn from "./MetirialForm/SignIn";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home/Home";
function App() {
  return (
    <>
      {/* <FunctionForm /> */}
      {/* <ClassForm /> */}
      {/* <SignIn /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/gotoFunctionComponent" element={<FunctionForm />}></Route>
          <Route path="/gotoClassComponent" element={<ClassForm />}></Route>
          <Route path="/gotoMetirialUI" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
