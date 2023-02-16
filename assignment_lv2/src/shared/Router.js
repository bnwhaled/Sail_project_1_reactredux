import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { Location } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* localhost 3000이 기본 */}
        <Route path="/" element={<Home />} />
        {/* localhost 3000/detail이 Detail */}
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
