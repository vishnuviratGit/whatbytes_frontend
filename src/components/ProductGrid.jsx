import React from 'react'
import { Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addToCart } from './Redux/cartSlice';
const ProductGrid = ({products}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleProductClick=(id)=>{
         navigate(`/product/${id}`)
    }
    const handleAddToCart=(product)=>{
         dispatch(addToCart({...product, quantity: 1}));
    }
  return (
    <main className="w-full lg:w-3/4 p-4">
        <h2 className="text-2xl font-bold mb-4">Product Listing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:cursor-pointer"
              onClick = {()=>handleProductClick(product.id)}
            >
              <img src={product.image} alt={product.title} className="w-full h-40 object-contain mb-4" />
              <h3 className="font-semibold text-lg">{product.title}</h3>
              <p className="text-blue-700 font-bold mb-2">Rs.{product.price}</p>
              {product.rating && (
                <div className="flex justify-center mb-2">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-400" />
                  ))}
                </div>
              )}
            
              {product.category && (
                <p className="text-xs text-gray-400 mb-2">Category: {product.category}</p>
              )}
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm" 
              onClick={(e)=>{
                  e.stopPropagation();
                  
                  handleAddToCart(product);
              }}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
  )
}

export default ProductGrid
