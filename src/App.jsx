import React, { useState } from "react";

import { Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import MainPage from "./components/MainPage";

const App = () => {
  
  

  return (
    <div>
      <Routes>
         <Route path="/product/:id" element={<ProductDetail/>}/>
         <Route path="/" element={<MainPage/>}/>
      </Routes>
      
    </div>
  );
};

export default App;
