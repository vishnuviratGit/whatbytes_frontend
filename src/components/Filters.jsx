import React, { useState } from "react";
import { useEffect } from "react";
const Filters = ({products, setFilteredProducts}) => {
  const [sliderValue, setSliderValue] = useState(1000);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const handleFilter=(e)=>{
      setSelectedCategory(e.target.value);
  }
  useEffect(()=>{
     const filterProduts = ()=>{
          let  filtered = products.filter((item)=>{
               if(selectedCategory==="All"){
                    return true;
               }
               else{
                  return item.category === selectedCategory;
               }
          });
          filtered = filtered.filter(item=>item.price<=sliderValue);
            setFilteredProducts(filtered);
         
     }
    filterProduts();
  }, [selectedCategory, sliderValue])


  return (
    <aside className="w-full lg:w-1/4 bg-blue-700 p-4 rounded-2xl shadow-sm mt-5 text-white">
      <h2 className="text-2xl font-semibold mb-4">Filters</h2>

      {/* Category */}
      <div className="mb-4">
        <h3 className="font-medium mb-2">Category</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="radio" name="category" value="All" checked={selectedCategory==="All"} onChange={handleFilter} />
            <span>All</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="category" value="Electronics" checked={selectedCategory==="Electronics"} onChange={handleFilter}/>
            <span>Electronics</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="category" value="Clothing" checked={selectedCategory==="Clothing"} onChange={handleFilter} />
            <span>Clothing</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="category" value="Home" checked={selectedCategory==="Home"} onChange={handleFilter}/>
            <span>Home</span>
          </label>
        </div>
      </div>

      {/* Price */}
      <div className="mb-4">
        <h3 className="font-medium mb-2">Price</h3>
        <input
          type="range"
          min="0"
          max="1000"
          value={sliderValue}
          className="w-full"
          onChange={(e) => setSliderValue(e.target.value)}
        />
        <div className="text-sm text-white flex justify-between">
          <span>0</span>
          <span className="font-bold text-blue-200">₹{sliderValue}</span>
          <span>1000</span>
        </div>
      </div>

      {/* Brand */}
      <div className="mb-4 text-white">
        <h3 className="font-medium mb-2">Brand</h3>
        <select className="w-full bg-blue-600 border border-white rounded px-2 py-1 text-sm text-white focus:outline-none">
          <option>Puma</option>
          <option>Apple</option>
          <option>Samsung</option>
        </select>
      </div>
    </aside>
  );
};

export default Filters;
