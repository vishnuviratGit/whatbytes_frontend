import React, { useEffect, useState } from "react";
import { Search, ShoppingCart } from "lucide-react";
const NavBar = ({products, setFilteredProducts}) => {
  const[searchValue, setSearchValue] = useState("");

  useEffect(()=>{   
      //debouncing for efficient searching
      const timer = setTimeout(()=>{
          const value = searchValue.trim().toLowerCase();
          const filtered = products.filter(item=>{
                if(item.title.toLowerCase().includes(value) || item.category.toLowerCase().includes(value) || item.description.toLowerCase().includes(value)){
              return true;
            }
          })
          setFilteredProducts(filtered);
      }, 300)
      return ()=>clearTimeout(timer);
  }, [searchValue])
  return (
    <nav className="bg-blue-700 text-white px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold">Logo</div>

      {/* Search Bar */}
      <div className="flex-1 mx-6 max-w-xl">
        <div className="flex items-center bg-white rounded-md px-3 py-2">
          <Search className="text-gray-500 w-4 h-4 mr-2" />
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full text-sm focus:outline-none text-black"
            onChange={(e)=>setSearchValue(e.target.value)}
          />
        </div>
      </div>

      {/* Cart Button */}
      <button className="flex items-center bg-blue-900 hover:bg-blue-800 px-4 py-2 rounded-md">
        <ShoppingCart className="w-4 h-4 mr-2" />
        <span className="font-semibold">Cart</span>
      </button>
    </nav>
  );
};

export default NavBar;
