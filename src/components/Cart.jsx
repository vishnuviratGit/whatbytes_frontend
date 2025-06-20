import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "./Redux/cartSlice";
import { Star, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const products = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const total = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  if(products.length===0){
      return(<div className="flex items-center justify-center"><h1 className="text-2xl font-bold">Cart is Empty</h1></div>)
  }
  return (
    <div>
        {/* navBar */}
      <nav className="bg-blue-700 text-white px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-2xl font-bold hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          Logo
        </div>

        {/* Cart Button */}
        <button
          className="flex items-center bg-blue-900 hover:bg-blue-800 px-4 py-2 rounded-md hover:cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          <span className="font-semibold">Cart</span>
        </button>
      </nav>
      <div className="flex flex-col lg:flex-row p-4 bg-gray-50 gap-6">
        {/* Main Products Section */}
        <main className="w-full lg:w-3/4 p-4">
          <h2 className="text-2xl font-bold mb-4">Cart</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:cursor-pointer"
                onClick={()=>navigate(`/product/${product.id}`)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-contain mb-4"
                />
                <h3 className="font-semibold text-lg">{product.title}</h3>
                <p className="text-blue-700 font-bold mb-2">
                  Rs. {product.price}
                </p>
                {product.rating && (
                  <div className="flex justify-center mb-2">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-500 fill-yellow-400"
                      />
                    ))}
                  </div>
                )}
                {product.category && (
                  <p className="text-xs text-gray-400 mb-2">
                    Category: {product.category}
                  </p>
                )}

                <p className="text-sm text-gray-500 mb-2 flex items-center gap-2">
                  Quantity:
                  <button
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 hover:cursor-pointer"
                    onClick={(e) =>{
                        e.stopPropagation()
                        dispatch(decreaseQuantity(product.id))
                    }}
                  >
                    -
                  </button>
                  <span className="px-2">{product.quantity || 1}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 hover:cursor-pointer"
                    onClick={(e) => {
                        e.stopPropagation()
                        dispatch(increaseQuantity(product.id))
                    }}
                  >
                    +
                  </button>
                </p>
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm hover:cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleRemoveCart(product);
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </main>

        {/* Summary Section */}
        <aside className="w-full lg:w-1/4 bg-white border border-blue-200 p-6 rounded-2xl shadow-md h-fit mt-20">
          <h3 className="text-lg font-semibold mb-4 text-blue-800">
            Cart Summary
          </h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            {products.map((item, index) => (
              <li key={index} className="flex justify-between  pb-1">
                <span>{item.title}</span>
                <span>
                  ₹{item.price} × {item.quantity || 1}
                </span>
              </li>
            ))}
          </ul>
          <div className="border-t mt-4 pt-4 flex justify-between font-semibold text-blue-800">
            <span>Total:</span>
            <span>₹{total}</span>
          </div>
          <button className="mt-6 w-full bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md font-semibold">
            Proceed to Checkout
          </button>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
