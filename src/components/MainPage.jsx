import React from 'react';
import Footer from "./Footer";
import Filters from "./Filters";
import ProductGrid from "./ProductGrid"
import products from "../data/products.json"
import NavBar from './NavBar';
import { useState } from 'react';
const MainPage = () => {
    const[filteredProducts, setFilteredProducts] = useState(products);
  return (
    <div>
      
      <NavBar products={products} setFilteredProducts={setFilteredProducts}/>
      <div className="flex flex-col lg:flex-row p-4 bg-gray-50">
        <Filters products={products} setFilteredProducts={setFilteredProducts}/>
        <ProductGrid products={filteredProducts} />
      </div>
      <Footer />
    </div>
  )
}

export default MainPage
