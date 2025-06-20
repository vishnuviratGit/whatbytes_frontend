# 🛒 E-Commerce React App

A responsive and fully functional e-commerce platform built using **React.js**, **Redux Toolkit**, **Tailwind CSS**, and **Lucide React**. This app allows users to browse, filter, search, and purchase products with ease. Cart functionality is implemented using Redux with state persistence via `localStorage`.

---

## 🔗 Live Demo
[👉 View Live Project](https://whatbytes-frontend-six.vercel.app/) <!-- Replace with your actual link -->

---

## 📦 Features

### 🏠 Home Page (`/`)
- **Header:**
  - Logo (left)
  - Search bar (center)
  - Cart icon with item count (right)
- **Main Section:**
  - **Sidebar Filters:**
    - Category filters (radio buttons)
    - Price range slider
    - Brand filter (optional)
  - **Product Grid:**
    - Responsive layout (3 cols desktop, 2 tablet, 1 mobile)
    - Product cards with image, title, price, rating stars, and add-to-cart button
- **Footer:**
  - Copyright info
  - Social media icons

### 📄 Product Detail Page (`/product/:id`)
- Large product image
- Title, price, description, and category
- Quantity selector
- Add to Cart button
- (Optional) Reviews section

### 🛒 Cart Page (`/cart`)
- List of added products
- Quantity update controls
- Remove product option
- Price summary

---

## 🧠 Core Logic & Functionality

- 🔍 **Search filtering** using string matching
- 🧩 **Category & price filters**
- 🛠️ **Dynamic routing** for product detail pages
- 🧠 **Client-side state management** with Redux Toolkit
- 💾 **Persist cart** in `localStorage`
- 🔄 **Conditional rendering** (e.g., show message when no products found)

---

## 🛠️ Tech Stack

- **React.js**
- **Redux Toolkit** (for cart state management)
- **Tailwind CSS** (for styling)
- **Lucide React** (for icons)
- **Vite** (for blazing fast dev environment)

---


## 🧑‍💻 Author
- Vishnu V
