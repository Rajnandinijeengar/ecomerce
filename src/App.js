import React from "react";
import { Routes, Route } from "react-router-dom";



import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Contact from "./pages/Contact";
import Aboutus from "./pages/Aboutus";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Faq from "./pages/Faq";
import Team from "./pages/Team";
import Teamdetails from "./pages/Teamdetails";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Blog from "./pages/Blog";
import BlogGrid from "./pages/BlogGrid";
import BlogDetails from "./pages/BlogDetails";
import CategoryManager from "./pages/CategoryManger";
import ProductManager from "./pages/ProductManager";
import ContactAdmin from "./pages/ContactAdmin";
import AllProducts from "./pages/AllProducts";
import Orders from "./pages/Orders";
import Admin from "./pages/Admin";
import User from "./pages/User";





function App() {
  return (
    <div>
      {/* Define your routes */}
      <Routes>
        <Route path="/" element={<Home />} />
           <Route path="/Contact" element={<Contact />} />
       <Route path="/Home2" element={<Home2 />} />
      <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetails />} />

 <Route path="/Faq" element={<Faq />} />
  <Route path="/Team" element={<Team />} />
    <Route path="/Teamdetails" element={<Teamdetails />} />
  <Route path="/Wishlist" element={<Wishlist />} />
    <Route path="/Checkout" element={<Checkout />} />
  <Route path="/Cart" element={<Cart />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/Blog" element={<Blog />} />
    <Route path="/BlogGrid" element={<BlogGrid />} />
    <Route path="/BlogDetails" element={<BlogDetails/>} />
    <Route path="/CategoryManager" element={<CategoryManager />} />
    <Route path="/ProductManager" element={<ProductManager />} />
    <Route path="/ContactAdmin" element={<ContactAdmin />} />
    <Route path="/AllProducts" element={<AllProducts />} />
  <Route path="/Orders" element={<Orders />} />
<Route path="/Admin" element={<Admin />} />
<Route path="/User" element={<User />} />




 




     
        
      </Routes>
    </div>
  );
}

export default App;
