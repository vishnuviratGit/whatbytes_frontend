import React, { useState } from "react";

import { Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import MainPage from "./components/MainPage";
import Cart from "./components/Cart";

const App = () => {
  
  

  return (
    <div>
      <Routes>
         <Route path="/product/:id" element={<ProductDetail/>}/>
         <Route path="/" element={<MainPage/>}/>
         <Route path="/cart" element={<Cart/>}/>
      </Routes>
      
    </div>
  );
};

export default App;
