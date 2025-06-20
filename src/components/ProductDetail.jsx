import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import products from "../data/products.json";
import NavBar from "./navBar";
import { useDispatch } from "react-redux";
import { addToCart } from "./Redux/cartSlice";
import { ShoppingCart } from "lucide-react";
const ProductDetail = () => {
    
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
  };
  useEffect(() => {
    const prod = products.find((item) => item.id === parseInt(id));
    setProduct(prod);
  }, [id]);
  if (!product) {
    return <div>...Loading</div>;
  }
  return (
    <div className="min-h-screen  bg-gray-100">
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
          onClick={()=>navigate("/cart")}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          <span className="font-semibold">Cart</span>
        </button>
      </nav>
      <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8  items-center justify-center">
        {/* Image Section */}
        <div className="flex justify-center items-center bg-white p-4 shadow rounded-lg">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[400px] w-auto object-contain"
          />
        </div>

        {/* Details Section */}
        <div className="text-gray-800 space-y-4 ml-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-xl text-blue-600 font-semibold">
            ₹{product.price}
          </p>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-sm text-gray-500">Category: {product.category}</p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-2 mt-4">
            <label htmlFor="qty" className="font-medium">
              Quantity:
            </label>
            <input
              id="qty"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, (parseInt(e.target.value) || 1)))
              }
              className="w-16 p-1 border rounded text-center"
            />
          </div>

          {/* Add to Cart */}
          <button
            className="mt-6 bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md font-semibold hover:cursor-pointer"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
