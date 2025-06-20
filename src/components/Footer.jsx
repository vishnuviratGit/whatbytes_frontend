import React from 'react'
import { Facebook, Twitter, Instagram } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-6 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        
        {/* Filters Section */}
        <div>
          <h4 className="font-semibold mb-2">Filters</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">All</a></li>
            <li><a href="#" className="hover:underline">Electronik</a></li>
          </ul>
          <p className="mt-4 text-xs text-gray-300">© 2024 American</p>
        </div>

        {/* About Us Section */}
        <div>
          <h4 className="font-semibold mb-2">About Us</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4 mt-1">
            <a href="#" className="bg-blue-600 hover:bg-blue-500 p-2 rounded-full">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="bg-blue-600 hover:bg-blue-500 p-2 rounded-full">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="bg-blue-600 hover:bg-blue-500 p-2 rounded-full">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
