import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import FeatureProducts from "../components/FeatureProducts";
import Banner from "../components/Banner";
import HotDeals from "../components/HotDeals";
import FlashProductArea from "../components/FlashProductArea";
import About from "../components/About";
import FeaturedProducts from "../components/FeaturedProducts";
import FlashSale from "../components/FlashSale";
import FlashSaleSlider from "../components/FlashSaleSlider";
import TestimonialSlider from "../components/TestimonialSlider";
import BlogSection from "../components/BlogSection";
import Newsletter from "../components/Newsletter";

// Old (causes error):
// import { Navigation } from "swiper";

// New (correct for Swiper 10+):


import "swiper/css";
import "swiper/css/navigation";

const Home = () => {
    const categories = [
    { img: "assets/img/category/cat-1-1.jpg", title: "Fresh Fruits", items: "16 ITEMS" },
    { img: "assets/img/category/cat-1-2.jpg", title: "Green Veggies", items: "29 ITEMS" },
    { img: "assets/img/category/cat-1-3.jpg", title: "Canned Goods", items: "105 ITEMS" },
    { img: "assets/img/category/cat-1-4.jpg", title: "Fresh Milk", items: "23 ITEMS" },
    { img: "assets/img/category/cat-1-5.jpg", title: "Snack Foods", items: "20 ITEMS" },
    { img: "assets/img/category/cat-1-6.jpg", title: "Cooking Oils", items: "39 ITEMS" },
    { img: "assets/img/category/cat-1-7.jpg", title: "Dry Grains", items: "30 ITEMS" },
    { img: "assets/img/category/cat-1-8.jpg", title: "Dairy Products", items: "33 ITEMS" },
    { img: "assets/img/category/cat-1-9.jpg", title: "Frozen Foods", items: "55 ITEMS" },
    { img: "assets/img/category/cat-1-10.jpg", title: "Soft Drinks", items: "65 ITEMS" },
  ];


  const products = [
  {
    id: 1,
    img: "/assets/img/product/feature-1-1.jpg",
    name: "Green Spinach",
    weight: "500 gm",
    price: "$29.00",
    delPrice: "$62.00",
    offer: "40%",
  },
  {
    id: 2,
    img: "/assets/img/product/feature-1-2.jpg",
    name: "organic Green Broccoli",
    weight: "500 gm",
    price: "$20.00",
    delPrice: "$26.00",
    offer: "40%",
  },
  {
    id: 3,
    img: "/assets/img/product/feature-1-3.jpg",
    name: "Zesty Orange Mandarin",
    weight: "500 gm",
    price: "$12.00",
    delPrice: "$20.00",
    offer: "40%",
  },
   {
    id: 1,
    name: "Green Spinach",
    img: "/assets/img/product/feature-1-13.png",
    weight: "500 gm",
    offer: "40%",
    price: "$29.00",
    delPrice: "$62.00",
  },
  {
    id: 2,
    name: "Organic Green Broccoli",
    img: "/assets/img/product/feature-1-12.png",
    weight: "500 gm",
    offer: "40%",
    price: "$20.00",
    delPrice: "$26.00",
  },
  {
    id: 3,
    name: "Zesty Orange Mandarin",
    img: "/assets/img/product/feature-1-11.png",
    weight: "500 gm",
    offer: "40%",
    price: "$12.00",
    delPrice: "$20.00",
  },
  {
    id: 4,
    name: "Sweet Purple Grapes",
    img: "/assets/img/product/feature-1-10.png",
    weight: "500 gm",
    offer: "40%",
    price: "$9.00",
    delPrice: "$16.00",
  },
  {
    id: 5,
    name: "Yellow Corn",
    img: "/assets/img/product/feature-1-9.png",
    weight: "500 gm",
    offer: "40%",
    price: "$6.00",
    delPrice: "$12.00",
  },
  {
    id: 6,
    name: "Tropical Yellow Pineapple",
    img: "/assets/img/product/feature-1-8.png",
    weight: "500 gm",
    offer: "40%",
    price: "$12.00",
    delPrice: "$15.00",
  },
  {
    id: 7,
    name: "Green Broccoli",
    img: "/assets/img/product/feature-1-7.png",
    weight: "500 gm",
    offer: "40%",
    price: "$10.00",
    delPrice: "$17.00",
  },
  {
    id: 8,
    name: "Black Pepper",
    img: "/assets/img/product/feature-1-6.png",
    weight: "500 gm",
    offer: "40%",
    price: "$23.00",
    delPrice: "$36.00",
  },
  {
    id: 9,
    name: "Creamy Yellow Banana",
    img: "/assets/img/product/feature-1-5.jpg",
    weight: "500 gm",
    offer: "40%",
    price: "$15.00",
    delPrice: "$22.00",
  },
  {
    id: 10,
    name: "White Potato",
    img: "/assets/img/product/feature-1-4.jpg",
    weight: "500 gm",
    offer: "40%",
    price: "$6.00",
    delPrice: "$9.00",
  },

    {
    id: 1,
    name: "Green Spinach",
    img: "/assets/img/product/feature-1-10.png",
    weight: "500 gm",
    offer: "40%",
    price: "$29.00",
    delPrice: "$62.00",
  },
  {
    id: 2,
    name: "Organic Green Broccoli",
    img: "/assets/img/product/feature-1-9.png",
    weight: "500 gm",
    offer: "40%",
    price: "$20.00",
    delPrice: "$26.00",
  },
  {
    id: 3,
    name: "Zesty Orange Mandarin",
    img: "/assets/img/product/feature-1-8.png",
    weight: "500 gm",
    offer: "40%",
    price: "$12.00",
    delPrice: "$20.00",
  },
  {
    id: 4,
    name: "Sweet Purple Grapes",
    img: "/assets/img/product/feature-1-7.png",
    weight: "500 gm",
    offer: "40%",
    price: "$9.00",
    delPrice: "$16.00",
  },
  {
    id: 5,
    name: "Yellow Corn",
    img: "/assets/img/product/feature-1-6.png",
    weight: "500 gm",
    offer: "40%",
    price: "$6.00",
    delPrice: "$12.00",
  },
  {
    id: 6,
    name: "Tropical Yellow Pineapple",
    img: "/assets/img/product/feature-1-5.jpg",
    weight: "500 gm",
    offer: "40%",
    price: "$12.00",
    delPrice: "$15.00",
  },
  {
    id: 7,
    name: "Green Broccoli",
    img: "/assets/img/product/feature-1-4.jpg",
    weight: "500 gm",
    offer: "40%",
    price: "$10.00",
    delPrice: "$17.00",
  },
  {
    id: 8,
    name: "Black Pepper",
    img: "/assets/img/product/feature-1-13.png",
    weight: "500 gm",
    offer: "40%",
    price: "$23.00",
    delPrice: "$36.00",
  },
  {
    id: 9,
    name: "Creamy Yellow Banana",
    img: "/assets/img/product/feature-1-12.png",
    weight: "500 gm",
    offer: "40%",
    price: "$15.00",
    delPrice: "$22.00",
  },
  {
    id: 10,
    name: "White Potato",
    img: "/assets/img/product/feature-1-10.png",
    weight: "500 gm",
    offer: "40%",
    price: "$6.00",
    delPrice: "$9.00",
  },

   
  // Add more products following the same structure
];



const recentItems = [
  { id: 1, image: "assets/img/product/recent-1-1.png", name: "Organic Broccoli", price: 12.0, weight: "1KG" },
  { id: 2, image: "assets/img/product/recent-1-2.png", name: "Whole White Mushrooms", price: 9.5, weight: "1KG" },
  { id: 3, image: "assets/img/product/recent-1-3.png", name: "Yellow Bananas", price: 15.0, weight: "1KG" },
  { id: 4, image: "assets/img/product/recent-1-4.png", name: "Green Spinach", price: 8.0, weight: "500g" },
  { id: 5, image: "assets/img/product/recent-1-5.png", name: "Red Tomatoes", price: 10.0, weight: "1KG" },
  { id: 6, image: "assets/img/product/recent-1-6.png", name: "Yellow Mangoes", price: 20.0, weight: "1KG" },
  { id: 7, image: "assets/img/product/recent-1-7.png", name: "Meat Curry Masala", price: 30.0, weight: "200g" },
  { id: 8, image: "assets/img/product/recent-1-8.png", name: "Tropical Pineapple", price: 11.0, weight: "1KG" },
];

  return (
    <div>
{/* Scroll to top */}
<button id="back-to-top">
  <i className="far fa-arrow-up"></i>
</button>

{/* Preloader */}


{/* Offcanvas */}
<div className="mt-offcanvas">
  <div className="mt-offcanvas-wrapper">
    <div className="mt-offcanvas-header d-flex justify-content-between align-items-center mb-40">
      <div className="mt-offcanvas-logo">
        <a href="index.html">
          <img src="assets/img/logo/black-logo.png" alt="Logo" />
        </a>
      </div>
      <div className="mt-offcanvas-close">
        <button type="button" className="mt-offcanvas-close-toggle">
          <i className="fal fa-times"></i>
        </button>
      </div>
    </div>

    <div className="mtheader__bottom-bar-wrap offcanvas-cate mb-40">
      <div className="mtheader__bottom-bar d-flex align-items-center justify-content-between">
        <div className="mtcategories-bar">
          <i className="fa-regular fa-bars"></i>
          <span>All Categories</span>
        </div>
        <div className="mtcategories-icon">
          <i className="fa-regular fa-angle-down"></i>
        </div>
      </div>

      <div
        id="mtheader__bottom-category-offcanvas"
        className="mtheader__bottom-category-offcanvas"
      >
        <nav>
          <ul>
            {[
              { img: "cat-menu-1-1.png", name: "Vegetables" },
              { img: "cat-menu-1-2.png", name: "Soft Drinks" },
              { img: "cat-menu-1-3.png", name: "Fresh Fruits" },
              { img: "cat-menu-1-4.png", name: "Meat & Fish" },
              { img: "cat-menu-1-5.png", name: "Milk & Cream" },
              { img: "cat-menu-1-6.png", name: "Frozen Foods" },
              { img: "cat-menu-1-7.png", name: "Dairy Products" },
              { img: "cat-menu-1-8.png", name: "Bottled Water" },
            ].map((item, index) => (
              <li key={index}>
                <a href="shop.html">
                  <img
                    src={`assets/img/category/${item.img}`}
                    alt={item.name}
                  />
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>

          <a href="shop.html" className="mtheader__bottom-category-btn">
            View All <i className="fa-light fa-angle-right"></i>
          </a>
        </nav>
      </div>
    </div>

    <div className="mt-offcanvas-menu d-xl-none mb-50">
      <nav></nav>
    </div>

    <div className="mt-offcanvas-content mb-50 d-none d-xl-block">
      <h2 className="mt-offcanvas-title">Hello There!</h2>
      <p>Lorem ipsum dolor sit amet, consect etur adipiscing elit.</p>
    </div>

    <div className="mt-offcanvas-info mb-50">
      <h3 className="mt-offcanvas-sm-title">Information</h3>
      <span><a href="tel:+42077001007">+4 20 7700 1007</a></span>
      <span>
        <a href="mailto:[email protected]">
          <span className="__cf_email__">[email&nbsp;protected]</span>
        </a>
      </span>
      <span><a href="dd">Avenue de Roma 158b, Lisboa</a></span>
    </div>

    <div className="mt-offcanvas-social mb-50">
      <h3 className="mt-offcanvas-sm-title">Follow Us</h3>
<a href="aa"><i className="fab fa-facebook-f"></i></a>
      <a href="ff"><i className="fab fa-twitter"></i></a>
      <a href="ss"><i className="fab fa-linkedin-in"></i></a>
      <a href="vv"><i className="fab fa-instagram"></i></a>
    </div>
  </div>
</div>

<div className="mt-offcanvas-overlay"></div>

{/* Cart Mini */}
<div className="mtcartmini__area">
  <div className="mtcartmini__wrapper d-flex justify-content-between flex-column">
    <div className="mtcartmini__top-wrapper">
      <div className="mtcartmini__top p-relative">
        <div className="mtcartmini__top-title">
          <h4>Shopping cart</h4>
        </div>
        <div className="mtcartmini__close">
          <button type="button" className="mtcartmini__close-btn mtcartmini-close-btn">
            <i className="fal fa-times"></i>
          </button>
        </div>
      </div>

      <div className="mtcartmini__shipping">
        <p>
          Free Shipping for all orders over <span>$50</span>
        </p>
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="70"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "70%" }}
          ></div>
        </div>
      </div>
    </div>

    <div className="mtcartmini__checkout">
      <div className="mtcartmini__checkout-title mb-30">
        <h4>Subtotal:</h4>
        <span>$213.00</span>
      </div>
      <div className="mtcartmini__checkout-btn text-center">
        <a href="cart.html" className="mt-btn mb-10 w-100">
          View Cart
        </a>
        <a href="checkout.html" className="mt-btn-3 w-100">
          Checkout
        </a>
      </div>
    </div>
  </div>
</div>


        <header className="mtheader__area mtheader-top-border p-relative">
      {/* header top area start */}
      <div className="mtheader__top-area mtheader-border pt-6 pb-6 p-relative d-none d-lg-block">
        <div className="container">
          <div className="mtborder__top-wrapper d-flex align-items-center justify-content-between">
            <div className="mtheader__top-left">
              <a href="/Aboutus">About Us</a>
              <span>
                <img src="assets/img/icon/star-icon-1.svg" alt="star" />
              </span>
              <a href="/Login">My Account</a>
              <span>
                <img src="assets/img/icon/star-icon-1.svg" alt="star" />
              </span>
              <a href="/Wishlist">Wishlist</a>
            </div>
            <div className="mtheader__top-right d-flex align-items-center justify-content-between">
              <div className="mtheader__top-social">
                <button href="#"><i className="fa-brands fa-pinterest-p"></i></button>
                <button href="#"><i className="fa-brands fa-instagram"></i></button>
                <button href="#"><i className="fa-brands fa-facebook-f"></i></button>
              </div>
              <span>
                <img src="assets/img/icon/star-icon-1.svg" alt="star" />
              </span>
            <div
  className="mtheader__top-lang"
  style={{
    position: "relative",
    display: "inline-block",
    width: "120px", // adjust width
  }}
>
  <select
    style={{
      width: "100%",
      border: "none",
      outline: "none",
      background: "transparent",
      padding: "5px 20px 5px 5px", // right padding matches arrow width
      appearance: "none",
      WebkitAppearance: "none",
      MozAppearance: "none",
      cursor: "pointer",
    }}
  >
    <option  value="1">Eng </option>
    <option   value="2">Bang</option>
    <option  value="3">Lang</option>
    <option  value="4">Latin</option>
  </select>

  {/* Custom arrow */}

</div>


              <span>
                <img src="assets/img/icon/star-icon-1.svg" alt="star" />
              </span>
             <div class="mtheader__top-currency">
  <select id="currencySelect"      style={{
      width: "100%",
      border: "none",
      outline: "none",
      background: "transparent",
      padding: "5px 20px 5px 5px", // right padding matches arrow width
      appearance: "none",
      WebkitAppearance: "none",
      MozAppearance: "none",
      cursor: "pointer",
    }}>
    <option value="1">USD</option>
    <option value="2">URO</option>
    <option value="3">BDT</option>
    <option value="4">RCS</option>
  </select>
</div>

            </div>
          </div>
        </div>
      </div>

      {/* header midel area start */}
      <div className="mtheader__midel-area pt-15 pb-15 d-none d-lg-block">
        <div className="container">
          <div className="mtheader__midel-wrapper d-flex align-items-center justify-content-between">
            <div className="mtheader__logo">
              <a href="index.html">
                <img src="assets/img/logo/black-logo.png" alt="Rosun" />
              </a>
            </div>
            <div className="mtheader__midel-search p-relative">
              <form action="#" method="POST">
                <input
                  type="text"
                  placeholder="Search by category, products or brand"
                  className="mt__border-effect"
                />
                <button type="submit">
                  <i className="fa-regular fa-magnifying-glass"></i>
                  <span>SEARCH</span>
                </button>
              </form>
            </div>
            <div className="mtheader__midel-account-wrap p-relative d-flex align-items-center justify-content-between">
              <div className="mtheader__midel-wishlist">
                <a href="/Wishlist"><i className="fa-regular fa-heart"></i></a>
              </div>
              <span>
                <img src="assets/img/icon/star-icon-2.svg" alt="star" />
              </span>
              <div className="mtheader__midel-login">
                <a href="/Login" className="mtheader__midel-login-inner">
                  <i className="fa-solid fa-user-plus"></i>
                  <span>Login your</span>
                  <h6>Account</h6>
                </a>
              </div>
              <span>
                <img src="assets/img/icon/star-icon-2.svg" alt="star" />
              </span>
              <div className="mtheader__midel-login">
                <div className="mtcartmini-open-btn">
                  <div className="mtheader__midel-card-value">
                    <a href="/Cart"> 
                    <i className="fa-solid fa-basket-shopping"></i></a>
                    <p>2</p>
                    <span>Cart Items</span>
                    <h6>$570.00</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* header Menu area start */}
      <div id="mt-header-sticky" className="mtheader__bottom-area mtheader__bottom-bg mt-sticky-theme theme-bg p-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-6">
              <div className="mtheader__bottom-category-wrap p-relative">
                <div className="mtheader__bottom-category">
                  <div className="mtheader__logo d-lg-none">
                    <a href="index.html"><img src="assets/img/logo/black-logo.png" alt="Rosun" /></a>
                  </div>
                  <div className="mtheader__bottom-bar-wrap">
                    <div className="mtheader__bottom-bar d-flex align-items-center justify-content-between">
                      <div className="mtcategories-bar">
                        <i className="fa-regular fa-bars"></i>
                        <span>All Categories</span>
                      </div>
                      <div className="mtcategories-icon">
                        <i className="fa-regular fa-angle-down"></i>
                      </div>
                    </div>
                  </div>
                  <div id="mtheader__bottom-category-list" className="mtheader__bottom-category-list">
                    <nav>
                      <ul>
                        <li>
                          <a href="shop.html">
                            <img src="assets/img/category/cat-menu-1-1.png" alt="" />
                            <span>Vegetables</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop.html">
                            <img src="assets/img/category/cat-menu-1-2.png" alt="" />
                            <span>Soft Drinks</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop.html">
                            <img src="assets/img/category/cat-menu-1-3.png" alt="" />
                            <span>Fresh Fruits</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop.html">
                            <img src="assets/img/category/cat-menu-1-4.png" alt="" />
                            <span>Meat & Fish</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop.html">
                            <img src="assets/img/category/cat-menu-1-5.png" alt="" />
                            <span>Milk & Cream</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop.html">
                            <img src="assets/img/category/cat-menu-1-6.png" alt="" />
                            <span>Frozen Foods</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop.html">
                            <img src="assets/img/category/cat-menu-1-7.png" alt="" />
                            <span>Dairy Products</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop.html">
                            <img src="assets/img/category/cat-menu-1-8.png" alt="" />
                            <span>Bottled Water</span>
                          </a>
                        </li>
                      </ul>
                      <a href="shop.html" className="mtheader__bottom-category-btn">
                        View All <i className="fa-light fa-angle-right"></i>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side menu */}
            <div className="col-lg-9 col-6">
              <div className="mtheader__bottom-wrapper p-relative d-flex align-items-center justify-content-end justify-content-xxl-between">
                <div className="mtheader__bottom-menu d-none d-lg-block">
                  <nav className="mt-mobile-menu-active">
                    <ul>
                      <li className="has-dropdown">
                        <a href="/">Home</a>
                        <ul className="sub-menu mt-submenu">
                          <li><a href="/">Home One</a></li>
                          <li><a href="/Home2">Home Two</a></li>
                        </ul>
                      </li>
                      <li><a href="/Aboutus">About</a></li>
                      <li style={{color:"white"}} className="has-dropdown">
                        <button href="#" >Shop</button>
                        <ul className="sub-menu mt-submenu">
                          <li><a href="/Shop">Shop</a></li>
                         
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <button href="#"  style={{color:"white"}}>Pages</button>
                        <ul className="sub-menu mt-submenu">
                          <li><a href="/About">About</a></li>
                          <li><a href="/Contact">Contact</a></li>
                          <li><a href="/Faq">Faq</a></li>
                          <li><a href="/Team">Team</a></li>
                          <li><a href="Teamdetails">Team Details</a></li>
                         
                          <li><a href="/Wishlist">Wishlist</a></li>
                          <li><a href="/Checkout">Checkout</a></li>
                          <li><a href="/Cart">Cart</a></li>
                          <li><a href="/Login">Login</a></li>
                          <li><a href="/Register">Register</a></li>
                            <li><a href="/AllProducts">AllProducts</a></li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <button href="#" style={{color:"white"}}>Blog</button>
                        <ul className="sub-menu mt-submenu">
                          <li><a href="/Blog">Blog</a></li>
                          <li><a href="/BlogGrid">Blog Grid</a></li>
                          <li><a href="/BlogDetails">Blog Details</a></li>
                        </ul>
                      </li>
                      <li><a href="/Contact">Contact</a></li>
                    </ul>
                  </nav>
                </div>
                <div className="mtheader__bottom-right d-none d-xxl-block">
                  <a href="tel:9112456859">Hotline: <span> +(00)91 1245 6859</span></a>
                  <a href="shop.html" className="mt-btn mt-btn-sm"><i className="fa-solid fa-bolt"></i>FLASH SALE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main>
    <section className="mthero__area mt-40 fix">
      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-9">
            <div className="mthero__wrapper p-relative">
              <div className="swiper mt-hero-active">
                <div className="swiper-wrapper">

                  {/* ===== Slide 1 ===== */}
                  <div
                    className="swiper-slide"
                  >
                    <div
                      className="mthero__banner"
                      data-background="assets/img/hero/hero-bg-1.jpg"
                    >
                      <div className="row">
                        <div className="col-lg-7">
                          <div className="mthero__content">
                            <h5 className="mthero__subtitle">
                              <img src="assets/img/icon/star-icon-3.svg" alt="" />
                              <span>Get up to 30% off</span>
                            </h5>

                            <h1 className="mthero__title">
                              Try Best <span>Organic</span> <br />
                              Products
                            </h1>

                            <p>
                              Visit our discount shop will get 30% off every organic
                              products, fruits and vegetables.
                            </p>

                            <div className="mthero__btn mt-40">
                              <a href="shop.html" className="mt-btn">
                                <i className="fa-solid fa-basket-shopping"></i> Shop Now
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-5">
                          <div className="mthero__img">
                            <img src="assets/img/hero/hero-1-1.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ===== Slide 2 ===== */}
                  <div className="swiper-slide">
                    <div
                      className="mthero__banner"
                      data-background="assets/img/hero/hero-bg-1.jpg"
                    >
                      <div className="row">
                        <div className="col-lg-7">
                          <div className="mthero__content">
                            <h5 className="mthero__subtitle">
                              <img src="assets/img/icon/star-icon-3.svg" alt="" />
                              <span>Get up to 30% off</span>
                            </h5>

                            <h1 className="mthero__title">
                              Try Best <span>Organic</span> <br />
                              Products
                            </h1>

                            <p>
                              Visit our discount shop will get 30% off every organic
                              products, fruits and vegetables.
                            </p>

                            <div className="mthero__btn mt-40">
                              <a href="shop.html" className="mt-btn">
                                <i className="fa-solid fa-basket-shopping"></i> Shop Now
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-5">
                          <div className="mthero__img">
                            <img src="assets/img/hero/hero-1-2.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ===== Slide 3 ===== */}
                  <div className="swiper-slide">
                    <div
                      className="mthero__banner"
                      data-background="assets/img/hero/hero-bg-1.jpg"
                    >
                      <div className="row">
                        <div className="col-lg-7">
                          <div className="mthero__content">
                            <h5 className="mthero__subtitle">
                              <img src="assets/img/icon/star-icon-3.svg" alt="" />
                              <span>Get up to 30% off</span>
                            </h5>

                            <h1 className="mthero__title">
                              Try Best <span>Organic</span> <br />
                              Products
                            </h1>

                            <p>
                              Visit our discount shop will get 30% off every organic
                              products, fruits and vegetables.
                            </p>

                            <div className="mthero__btn mt-40">
                              <a href="shop.html" className="mt-btn">
                                <i className="fa-solid fa-basket-shopping"></i> Shop Now
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-5">
                          <div className="mthero__img">
                            <img src="assets/img/hero/hero-1-1.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="mthero-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

 <section className="mtfeature__area pt-20 fix">
      <div className="container">
        <div className="row">

          {/* Left Offer Box */}
          <div className="col-lg-3">
            <div
  className="mtfeature__offer"
  style={{ backgroundImage: "url('assets/img/feature/feature-1.jpg')" }}
>
              <div className="mtfeature__text">
                <span
                  className="img-custom-anim-left"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.1s"
                >
                  Hurry Up
                </span>

                <h6
                  className="mtfeature__offer-title wow img-custom-anim-left"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.1s"
                >
                  20% off
                </h6>

                <button
                  href="#"
                  className="wow img-custom-anim-left"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.1s"
                >
                  Buy Now{" "}
                  <span>
                    <i className="fa-solid fa-circle-chevron-right"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Features */}
          <div className="col-lg-9">
            <div className="mtfeature__bg pt-30 pb-30 pl-15">
              <div className="row">

                {/* Feature Item 1 */}
                <div className="col-lg-4 col-md-4">
                  <div className="mtfeature__wrapper d-flex align-items-center">
                    <div className="mtfeature__icon">
                      <img src="assets/img/feature/feature-1-1.jpg" alt="" />
                    </div>

                    <div className="mtfeature__content">
                      <h5 className="mtfeature__title">Free Shipping</h5>
                      <p>
                        shipping on your order. No <br />
                        extra charges for delivery.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature Item 2 */}
                <div className="col-lg-4 col-md-4">
                  <div className="mtfeature__wrapper d-flex align-items-center">
                    <div className="mtfeature__icon">
                      <img src="assets/img/feature/feature-1-1.jpg" alt="" />
                    </div>

                    <div className="mtfeature__content">
                      <h5 className="mtfeature__title">Secure Payments</h5>
                      <p>
                        your financial information is <br />
                        protected
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature Item 3 */}
                <div className="col-lg-4 col-md-4">
                  <div className="mtfeature__wrapper d-flex align-items-center">
                    <div className="mtfeature__icon">
                      <img src="assets/img/feature/feature-1-1.jpg" alt="" />
                    </div>

                    <div className="mtfeature__content">
                      <h5 className="mtfeature__title">24 Hour Support</h5>
                      <p>
                        We're here to help whenever <br />
                        you need us.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="mtshop__category-area pt-85 pb-50 p-relative fix">
  <div className="container">
    <div className="row align-items-center mb-15">
      <div className="col-md-6">
        <div className="mt-section-content mb-30">
          <h3 className="mt-section-title">
            Shop By <span>Categories</span>
          </h3>
        </div>
      </div>
    </div>

    <Swiper
     
      slidesPerView={10}
      spaceBetween={20}
      loop={true}
      breakpoints={{
        320: { slidesPerView: 2 },
        576: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        992: { slidesPerView: 5 },
      }}
      className="mtshop__category_active"
    >
      {categories.map((cat, index) => (
        <SwiperSlide key={index}>
          <div className="mtshop__category-item text-center p-2 border rounded" style={{width:"180px"}}>
            <a href="shop.html" style={{ textDecoration: "none", color: "#000" }}>
              <img src={cat.img} alt={cat.title} className="mb-2" style={{  height:" 70px",    width: "40%", borderRadius: "10px" }} />
              <h5 className="mtshop__category-title">{cat.title}</h5>
              <span>{cat.items}</span>
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

<FeatureProducts> </FeatureProducts>
<Banner></Banner>
<HotDeals></HotDeals>
 <section
      className="mtbanner__area mtbanner__2-bg pb-50 pt-80 mt-50 mb-55 p-relative fix"
      style={{ backgroundImage: "url(assets/img/banner/banner-bg-2-1.jpg)" }}
    >
      <div className="mtbanner__shape">
        <img src="assets/img/banner/shape-2-1.png" alt="Rosun" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 mb-30">
            <div
              className="mtbanner__wrapper mtbanner__2 p-relative wow img-custom-anim-left"
              data-wow-duration="1.5s"
              data-wow-delay="0.1s"
            >
              <div className="mtbanner__img">
                <img src="assets/img/banner/banner-2-1.png" alt="" />
              </div>
              <div className="mtbanner__discount">
                <img src="assets/img/banner/discount-1-1.png" alt="" />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6 mb-30">
            <div
              className="mtbanner__wrapper mtbanner__2 p-relative wow img-custom-anim-right"
              data-wow-duration="1.5s"
              data-wow-delay="0.1s"
            >
              <div className="mtbanner__item">
                <div className="mtbanner__content">
                  <h5 className="mtbanner__subtitle mb-20">
                    Hurry Up!<span>Offer End In</span>{" "}
                    <img src="assets/img/icon/star-icon-3.svg" alt="" />
                  </h5>

                  {/* Countdown */}
                  <div
                    className="mtbanner__countdown mb-20 pb-20"
                    data-countdown
                    data-date="Nov 19 2025 20:20:22"
                  >
                    <div className="countdown d-flex align-items-center">
                      <div className="mtbanner__countdown-item">
                        <span data-days className="countdown-value">
                          05
                        </span>
                        <span className="countdown-label">DAYS</span>
                      </div>
                      <div className="countdown-separator">:</div>
                      <div className="mtbanner__countdown-item">
                        <span data-hours className="countdown-value">
                          12
                        </span>
                        <span className="countdown-label">Hours</span>
                      </div>
                      <div className="countdown-separator">:</div>
                      <div className="mtbanner__countdown-item">
                        <span data-minutes className="countdown-value">
                          34
                        </span>
                        <span className="countdown-label">Mins</span>
                      </div>
                      <div className="countdown-separator">:</div>
                      <div className="mtbanner__countdown-item">
                        <span data-seconds className="countdown-value">
                          44
                        </span>
                        <span className="countdown-label">Secs</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="mtbanner__title mb-20">
                    Pure & Organic Fruits, Veggies, and Meat
                  </h3>
                  <p>
                    Enjoy a massive 45% discount on your entire order. That's
                    right, save big on your favorite items and treat yourself
                    to something special.
                  </p>
                  <div className="mtbanner__btn mt-50">
                    <a href="shop.html" className="mt-btn">
                      <i className="fa-solid fa-basket-shopping"></i>{" "}
                      <span>Shop Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   <section className="mtpopular__product-area pt-55 pb-120 p-relative fix">
 <div className="mtpopular__product-shape-wrap">
      <div className="mtpopular__product-shape">
        <img src="/assets/img/shape/shape-1-1.png" alt="" />
      </div>
      <div className="mtpopular__product-shape-2">
        <img src="/assets/img/shape/shape-1-2.png" alt="" />
      </div>
    </div>

 <div class="container">
     <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="mt-section-content mb-45">
          <h3 className="mt-section-title">
            Popular
            <span>Products</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                <path
                  d="M9 1.82196L10.429 6.82929L10.5619 7.29477L11.0314 7.17707L16.0824 5.91098L12.4604 9.65222L12.1237 10L12.4604 10.3478L16.0824 14.089L11.0314 12.8229L10.5619 12.7052L10.429 13.1707L9 18.178L7.57097 13.1707L7.43813 12.7052L6.9686 12.8229L1.91761 14.089L5.53957 10.3478L5.87627 10L5.53957 9.65222L1.91761 5.91098L6.9686 7.17707L7.43813 7.29477L7.57097 6.82929L9 1.82196Z"
                  fill="#FDD057"
                  stroke="#060121"
                />
              </svg>
            </span>
          </h3>
          <p>Our bestsellers! Discover the customer favorites that everyone's talking about.</p>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="mtpopular__product-wrapper mb-45 text-lg-end">
          <div className="mtpopular__product-tab">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  View All
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Vegetable
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Fresh Fruit
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-contact-tab1"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact1"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact1"
                  aria-selected="false"
                >
                  Meats
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-contact-tab2"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact2"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact2"
                  aria-selected="false"
                >
                  Dairies
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  <div className="   row tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
  <div className="row">
    {products.map((product) => (
      <div key={product.id} className="col-md-4 mb-4"> {/* mb-4 adds spacing between rows */}
        <div className="mtfeature__product-item p-relative fix">
          <div className="mtfeature__product-shape">
            <img src="/assets/img/product/feature-shape-1.png" alt="" />
          </div>
          <div className="mtfeature__product-offer">
            <span>{product.offer} <br />OFF</span>
          </div>
          <div className="mtfeature__product-img mb-15">
            <a href="product-details.html">
              <img src={product.img} alt={product.name} className="img-fluid" />
            </a>
          </div>
          <div className="mtfeature__product-content mb-15">
            <span>{product.weight}</span>
            <h5 className="mtfeature__product-title">
              <a href="product-details.html">{product.name}</a>
            </h5>
          </div>
          <div className="mtfeature__product-rating mb-15">
            {[...Array(5)].map((_, i) => (
              <span key={i}><i className="fa-solid fa-star-sharp"></i></span>
            ))}
          </div>
          <div className="mtfeature__product-price mb-15">
            <span>{product.price}</span>
            <del>{product.delPrice}</del>
          </div>
          <div className="mtfeature__product-btn">
            <a href="cart.html" className="mt-btn-3">Add To Cart</a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
<div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
  <div className="row">
    {products.map((product) => (
      <div key={product.id} className="col-md-4 mb-4">
        <div className="mtfeature__product-item p-relative fix">
          <div className="mtfeature__product-shape">
            <img src="/assets/img/product/feature-shape-1.png" alt="" />
          </div>
          <div className="mtfeature__product-offer">
            <span>{product.offer} <br />OFF</span>
          </div>
          <div className="mtfeature__product-img mb-15">
            <a href="product-details.html">
              <img src={product.img} alt={product.name} className="img-fluid" />
            </a>
          </div>
          <div className="mtfeature__product-content mb-15">
            <span>{product.weight}</span>
            <h5 className="mtfeature__product-title">
              <a href="product-details.html">{product.name}</a>
            </h5>
          </div>
          <div className="mtfeature__product-rating mb-15">
            {[...Array(5)].map((_, i) => (
              <span key={i}><i className="fa-solid fa-star-sharp"></i></span>
            ))}
          </div>
          <div className="mtfeature__product-price mb-15">
            <span>{product.price}</span>
            <del>{product.delPrice}</del>
          </div>
          <div className="mtfeature__product-btn">
            <a href="cart.html" className="mt-btn-3">Add To Cart</a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
 <div className="tab-pane fade" id="pills-contact1" role="tabpanel" aria-labelledby="pills-contact-tab1">
      <div className="cols">
        {products.map((product) => (
          <div key={product.id} className="mtfeature__product-item p-relative fix">
            <div className="mtfeature__product-shape">
              <img src="/assets/img/product/feature-shape-1.png" alt="" />
            </div>
            <div className="mtfeature__product-offer">
              <span>{product.offer} <br />OFF</span>
            </div>
            <div className="mtfeature__product-img mb-15">
              <a href="product-details.html">
                <img src={product.img} alt={product.name} />
              </a>
            </div>
            <div className="mtfeature__product-content mb-15">
              <span>{product.weight}</span>
              <h5 className="mtfeature__product-title">
                <a href="product-details.html">{product.name}</a>
              </h5>
            </div>
            <div className="mtfeature__product-rating mb-15">
              {[...Array(5)].map((_, index) => (
                <button key={index} href="#"><i className="fa-solid fa-star-sharp"></i></button>
              ))}
            </div>
            <div className="mtfeature__product-price mb-15">
              <span>{product.price}</span>
              <del>{product.delPrice}</del>
            </div>
            <div className="mtfeature__product-btn">
              <a href="cart.html" className="mt-btn-3">Add To Cart</a>
            </div>
          </div>
        ))}
      </div>
    </div>





  </div>


    
</div>
</section>
<FlashProductArea></FlashProductArea>
<About></About>
<section
  className="mtrecent__product-area mtrecent__product-bg pb-50 pt-50 p-relative fix"
  style={{ backgroundImage: "url('/assets/img/bg/recent-1-1.png')" }}
>
  <div className="mtrecent__product-watermark">
    <h2 className="mtrecent__product-watermarktitle">ROSUN</h2>
  </div>

<div className="container">
  <div className="row align-items-center">
    <div className="col-lg-6 col-md-8">
      <div className="mt-section-content mb-45">
        <h3 className="mt-section-title">
          Recently <span>Added</span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
              <path
                d="M9 1.82196L10.429 6.82929L10.5619 7.29477L11.0314 7.17707L16.0824 5.91098L12.4604 9.65222L12.1237 10L12.4604 10.3478L16.0824 14.089L11.0314 12.8229L10.5619 12.7052L10.429 13.1707L9 18.178L7.57097 13.1707L7.43813 12.7052L6.9686 12.8229L1.91761 14.089L5.53957 10.3478L5.87627 10L5.53957 9.65222L1.91761 5.91098L6.9686 7.17707L7.43813 7.29477L7.57097 6.82929L9 1.82196Z"
                fill="#FDD057"
                stroke="#060121"
              />
            </svg>
          </span>
        </h3>
      </div>
    </div>
    <div className="col-lg-6 col-md-4">
      <div className="mtrecent__product-viewall mb-45 text-md-end">
        <a href="shop.html" className="mt-btn">View All</a>
      </div>
    </div>
  </div>

  <div className="mtrecent__product-wrapper mb-90">
    <div className="row g-3 ">
      <div className="col-xl-8 col-lg-7">
        <div className="mtrecent__product-left">
      <div className="row g-3">
        {recentItems.map((item) => (
          <div key={item.id} className="col-xl-6">
            <div className="mtrecent__product-left-wrap">
              <div className="mtrecent__product-item p-relative fix d-flex align-items-center justify-content-between">
                <div className="mtrecent__product-img">
                  <button href="#">
                    <img src={item.image} alt={item.name} />
                  </button>
                </div>
                <div className="mtrecent__product-content">
                  <div className="mtrecent__product-category d-flex justify-content-between">
                    <div className="mtrecent__product-price mb-6">
                      <span>${item.price.toFixed(2)}</span>
                      <i>/{item.weight}</i>
                    </div>
                    <div className="mtrecent__product-wishlist">
                      <a href="wishlist.html">
                        <i className="fa-regular fa-heart"></i>
                      </a>
                    </div>
                  </div>
                  <h4 className="mtrecent__product-title mb-20">
                    <a href="product-details.html">{item.name}</a>
                  </h4>
                  <div className="mtrecent__product-count-wrap d-flex align-items-center justify-content-between">
                    <div className="mt-shop-details__quantity proquantity">
                      <div className="mt-cart-minus mt-cart-min-plus">
                        <i className="fal fa-minus"></i>
                      </div>
                      <input type="text" value="01" readOnly />
                      <div className="mt-cart-plus mt-cart-min-plus">
                        <i className="fal fa-plus"></i>
                      </div>
                    </div>
                    <div className="mtrecent__product-rating">
                      {[...Array(5)].map((_, i) => (
                        <button key={i} href="#">
                          <i className="fa-solid fa-star-sharp"></i>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>

      <div className="col-xl-4 col-lg-5">
        <div className="mtrecent__product-right p-relative fix text-center">
          <div className="mtrecent__product-offer">
            <div className="mtrecent__product-offer-img mb-20 p-relative fix wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.1s">
              <h4 className="mtrecent__product-offertitle"><span>Best Sell</span></h4>
              <a href="product-details.html">
                <img src="assets/img/product/recent-big-1-1.png" alt="Rosun" />
              </a>
            </div>
            <div className="mtrecent__product-offer-price mb-20 text-center">
              <span>$16.00</span>
              <del>$56.00</del>
            </div>
            <div className="mtrecent__product-offer-wrap mb-10 text-center">
              <h4 className="mtrecent__product-offer-title">
                <a href="product-details.html">Juicy Sweet Mango and <br /> Green Broccoli</a>
              </h4>
            </div>
            <div className="mtrecent__product-offer-review mb-20 text-center">
              <button href="#"><i className="fa-solid fa-star-sharp"></i></button>
              <button href="#"><i className="fa-solid fa-star-sharp"></i></button>
              <button href="#"><i className="fa-solid fa-star-sharp"></i></button>
              <button href="#"><i className="fa-solid fa-star-sharp"></i></button>
              <button href="#"><i className="fa-solid fa-star-sharp"></i></button>
            </div>
            <div className="mtrecent__product-offer-cate mb-30 text-center">
              <span>1kg</span>
              <span>500g</span>
            </div>
            <div className="mtrecent__product-offer-btn mb-20 d-flex justify-content-center align-items-center">
              <div className="offer-view">
                <a href="product-details.html"><i className="fa-sharp fa-regular fa-eye"></i></a>
              </div>
              <div className="offer-cart ml-10 mr-10">
                <a href="shop.html" className="mt-btn">
                  <i className="fa-solid fa-basket-shopping"></i> Shop Now
                </a>
              </div>
              <div className="offer-wishlist">
                <a href="wishlist.html"><i className="fa-regular fa-heart"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
<div className="mttop__product-area">
      <div className="container">
        {/* Top Sale */}
        <div className="mttop__product-main mb-80">
          <div className="cols ">
            <div className="mttop__product-category">
              <div className="mttop__product-category-wrap mb-25">
                <h3 className="mttop__product-cattitle">Top Selling</h3>
              </div>
              <div className="mttop__product-categories-item">
                <ul
                  className="flex-column nav-pills mb-65"
                  id="v-pills-tab2"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <li
                    className="nav-link active mt-cat-sale"
                    id="mt-milk-sugars1"
                    data-bs-toggle="pill"
                    data-bs-target="#mt-milk-sugar1"
                    role="tab"
                    aria-controls="mt-milk-sugar1"
                    aria-selected="true"
                  >
                    Milk & Sugar
                  </li>
                  <li
                    className="nav-link mt-cat-sale"
                    id="mt-grocery-items1"
                    data-bs-toggle="pill"
                    data-bs-target="#mt-grocery-item1"
                    role="tab"
                    aria-controls="mt-grocery-item1"
                    aria-selected="true"
                  >
                    Grocery Items
                  </li>
                  <li
                    className="nav-link mt-cat-sale"
                    id="mt-meat-chickens1"
                    data-bs-toggle="pill"
                    data-bs-target="#mt-meat-chicken1"
                    role="tab"
                    aria-controls="mt-meat-chicken1"
                    aria-selected="true"
                  >
                    Meat & Chicken
                  </li>
                  <li
                    className="nav-link mt-cat-sale"
                    id="mt-fresh-vegetabless1"
                    data-bs-toggle="pill"
                    data-bs-target="#mt-fresh-vegetables1"
                    role="tab"
                    aria-controls="mt-fresh-vegetables1"
                    aria-selected="true"
                  >
                    Fresh Vegetables
                  </li>
                  <li
                    className="nav-link mt-cat-sale"
                    id="mt-organic-foods1"
                    data-bs-toggle="pill"
                    data-bs-target="#mt-organic-food1"
                    role="tab"
                    aria-controls="mt-organic-food1"
                    aria-selected="true"
                  >
                    Organic Food
                  </li>
                </ul>
                <div className="mttop__product-slider-wrap">
                  <div className="mttop__product-slider-left">
                    <span>
                      <i className="fa-regular fa-angle-left"></i>
                    </span>
                  </div>
                  <div className="mttop__product-slider-right">
                    <span>
                      <i className="fa-regular fa-angle-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
<FeaturedProducts></FeaturedProducts>







        </div>
        {/*flash sale*/}
<FlashSale></FlashSale>
<FlashSaleSlider></FlashSaleSlider>
      </div>  
    </div>
</section>
<TestimonialSlider></TestimonialSlider>
<BlogSection></BlogSection>
<Newsletter></Newsletter>

    </main>

        <footer
      className="mt-footer-area mt-footer-space p-relative fix"
      style={{ backgroundImage: "url('/assets/img/footer/footer-bg-1-1.jpg')" }}
    >
      <div className="mt-footer-wraper pb-55 p-relative">
        <div className="container">
          <div className="row">
            {/* Footer Left */}
            <div className="col-lg-3 col-md-4 mb-50">
              <div className="mt-footer-widget">
                <div className="mt-footer-logo mb-30">
                  <a href="index.html">
                    <img src="/assets/img/logo/black-logo.png" alt="Logo" />
                  </a>
                </div>
                <div className="mt-footer-content">
                  <p className="mb-25">
                    Roshun is an online grocery shop. We are selling grocery products.
                  </p>
                  <div className="mt-footer-content-box mb-30">
                    <a href="tel:12345678901" className="d-flex align-items-center">
                      <div className="mt-footer-content-boxicon">
                        <span>
                          <i className="fa-regular fa-headset"></i>
                        </span>
                      </div>
                      <div className="mt-footer-content-boxtext">
                        <span>Emergency Support.</span>
                        <h5 className="mttitle">+123 4567 8901</h5>
                      </div>
                    </a>
                  </div>

                  <div className="mt-footer-box-list">
                    <div className="mt-footer-box-item mb-20">
                      <button href="#">
                        <span>
                          <i className="fa-sharp fa-solid fa-location-dot"></i>
                        </span>
                        <p>123 Main Street, Anytown, California 90210 USA</p>
                      </button>
                    </div>
                    <div className="mt-footer-box-item mb-20">
                      <button href="#">
                        <span>
                          <i className="fa-solid fa-envelope-open-text"></i>
                        </span>
                        <p>info@example.com</p>
                      </button>
                    </div>
                    <div className="mt-footer-box-item mb-20">
                      <a href="tel:001235555888">
                        <span>
                          <i className="fa-regular fa-headset"></i>
                        </span>
                        <p>+00 123 5555 888</p>
                      </a>
                    </div>
                    <div className="mt-footer-box-item mb-20">
                      <button href="#">
                        <span>
                          <i className="fa-light fa-clock"></i>
                        </span>
                        <p>10:00 - 18:00 Monday - Saturday</p>
                      </button>
                    </div>
                    <div className="mt-footer-box-item mt-50">
                      <div className="mt-footer-box-follow">
                        <h5 className="mtfollow-title">Follow Us :</h5>
                      </div>
                      <div className="mt-footer-box-social">
                        <button href="#"><i className="fab fa-facebook-f"></i></button>
                        <button href="#"><i className="fab fa-linkedin-in"></i></button>
                        <button href="#"><i className="fab fa-twitter"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Right */}
            <div className="col-lg-9 col-md-8">
              <div className="mt-footer-wrapper mb-30">
                <div className="row">
                  {/* Company */}
                  <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                    <div className="mt-footer-widget footer-cols-2">
                      <h2 className="mt-footer-title mb-50">Company</h2>
                      <ul className="mt-footer-list">
                        <li><a href="about.html">About Us</a></li>
                        <li><button href="#">Delivery Information</button></li>
                        <li><button href="#">Privacy Policy</button></li>
                        <li><button href="#">Terms & Condition</button></li>
                        <li><a href="contact.html">Contact Us</a></li>
                        <li><a href="faq.html">Careers</a></li>
                      </ul>
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                    <div className="mt-footer-widget footer-cols-3">
                      <h2 className="mt-footer-title mb-50">Quick Links</h2>
                      <ul className="mt-footer-list">
                        <li><a href="about.html">About Company</a></li>
                        <li><a href="blog.html">Articles & Blogs</a></li>
                        <li><a href="shop.html">Flash Sales</a></li>
                        <li><a href="checkout.html">Checkout</a></li>
                        <li><a href="faq.html">FAQs Page</a></li>
                      </ul>
                    </div>
                  </div>

                  {/* Support */}
                  <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                    <div className="mt-footer-widget footer-cols-4">
                      <h2 className="mt-footer-title mb-50">Support</h2>
                      <ul className="mt-footer-list">
                        <li><a href="login.html">My Account</a></li>
                        <li><a href="login.html">Payment Method</a></li>
                        <li><button href="#">License & Permit</button></li>
                        <li><a href="about.html">Our Partners</a></li>
                        <li><a href="contact.html">Support Center</a></li>
                        <li><a href="cart.html">Shopping Cart</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* App & Newsletter */}
              <div className="mt-footer-wrapper">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="mt-footer-app mt-footer-app-space mb-20">
                      <h4 className="mt-footer-app-title">Download App</h4>
                      <p>
                        Download our app and unlock exclusive savings! Enjoy a fantastic 15% discount
                      </p>
                      <div className="mt__footer-app-img mt-20">
                        <button href="#"><img src="/assets/img/footer/goolge-play.png" alt="Google Play" /></button>
                        <button href="#"><img src="/assets/img/footer/app-store.png" alt="App Store" /></button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mt-footer-subscribe-content mb-20 mt-footer-subscribe-space">
                      <h4 className="mt-footer-app-title">Sign Up Newsletter</h4>
                      <p>
                        Enjoy early access to sales, new product launches, expert advice, and special offers
                      </p>
                      <form>
                        <div className="mt-footer-subscribe p-relative mt-20">
                          <input type="email" placeholder="Enter email address" />
                          <button type="submit" className="mt-btn">Subscribe</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Copy-right */}
      <div className="mt-copyright-area mt-copyright-border pt-20 pb-20">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center text-md-start">
              <p>Copyright 2025 © Rosun. All rights reserved.</p>
            </div>
            <div className="col-lg-6 text-center text-md-end">
              <img src="/assets/img/footer/payment.png" alt="Payment Methods" />
            </div>
          </div>
        </div>
      </div>
    </footer>
     </div>
    
  );
};

export default Home;
