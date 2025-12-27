import React from 'react'
import BrandTitleSlide from '../components/Organic'
import ShopCategories from '../components/ShopCategories'
import BannerArea from '../components/BannerArea'
import FeatureProductArea from '../components/FeatureProductArea'
import ProductArea from '../components/ProductArea'
import HotProductArea from '../components/HotProductArea '
import WeeklyHotDeals from '../components/WeeklyHotDeals'
import BrandSlider from '../components/BrandSlider'
import Slope from '../components/Slope'
import Area from '../components/Area'
import Blank from '../components/Blank'

const products = [
  {
    id: 1,
    name: "Local Organic Green Broccoli",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-1.jpg",
    link: "product-details.html",
  },
  {
    id: 2,
    name: "Sweet Juicy Mango",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-2.jpg",
    link: "product-details.html",
  },
  {
    id: 3,
    name: "Creamy Yellow Pumkin",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-3.jpg",
    link: "product-details.html",
  },
  {
    id: 4,
    name: "Fresh packaged Red Tomato",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-4.jpg",
    link: "product-details.html",
  },
  {
    id: 5,
    name: "Whole White Mushrooms",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-5.jpg",
    link: "product-details.html",
  },
  {
    id: 6,
    name: "Red Bull Cow Fresh Meat",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-6.jpg",
    link: "product-details.html",
  },
  {
    id: 7,
    name: "Fresh packaged Green Avocoda",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-7.jpg",
    link: "product-details.html",
  },
  {
    id: 8,
    name: "Organic Campa Yellow Bananas",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-8.jpg",
    link: "product-details.html",
  },
  {
    id: 9,
    name: "Zesty Orange Carrot",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-9.jpg",
    link: "product-details.html",
  },
  {
    id: 10,
    name: "Tropical Red Pomegranate",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-10.jpg",
    link: "product-details.html",
  },
  {
    id: 11,
    name: "Cauliflower - Each APPROX 1.5",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-11.jpg",
    link: "product-details.html",
  },
  {
    id: 12,
    name: "Tropical Yellow Lemon",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-12.jpg",
    link: "product-details.html",
  },
];

const recentlyAddedProducts = [
  {
    id: 1,
    name: "Local Organic Green Broccoli",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-1.jpg",
    link: "product-details.html",
  },
  {
    id: 2,
    name: "Sweet Juicy Mango",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-2.jpg",
    link: "product-details.html",
  },
  {
    id: 3,
    name: "Creamy Yellow Pumkin",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-3.jpg",
    link: "product-details.html",
  },
  {
    id: 4,
    name: "Fresh packaged Red Tomato",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-4.jpg",
    link: "product-details.html",
  },
  {
    id: 5,
    name: "Whole White Mushrooms",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-5.jpg",
    link: "product-details.html",
  },
  {
    id: 6,
    name: "Red Bull Cow Fresh Meat",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-6.jpg",
    link: "product-details.html",
  },
  {
    id: 7,
    name: "Fresh packaged Green Avocoda",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-7.jpg",
    link: "product-details.html",
  },
  {
    id: 8,
    name: "Organic Campa Yellow Bananas",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-8.jpg",
    link: "product-details.html",
  },
  {
    id: 9,
    name: "Zesty Orange Carrot",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-9.jpg",
    link: "product-details.html",
  },
  {
    id: 10,
    name: "Tropical Red Pomegranate",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-10.jpg",
    link: "product-details.html",
  },
  {
    id: 11,
    name: "Cauliflower - Each APPROX 1.5",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-11.jpg",
    link: "product-details.html",
  },
  {
    id: 12,
    name: "Tropical Yellow Lemon",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-12.jpg",
    link: "product-details.html",
  },
];


const hotProducts = [
  {
    id: 1,
    name: "Local Organic Green Broccoli",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-1.jpg",
    link: "product-details.html",
  },
  {
    id: 2,
    name: "Sweet Juicy Mango",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-2.jpg",
    link: "product-details.html",
  },
  {
    id: 3,
    name: "Creamy Yellow Pumkin",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-3.jpg",
    link: "product-details.html",
  },
  {
    id: 4,
    name: "Fresh packaged Red Tomato",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-4.jpg",
    link: "product-details.html",
  },
  {
    id: 5,
    name: "Whole White Mushrooms",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-5.jpg",
    link: "product-details.html",
  },
  {
    id: 6,
    name: "Red Bull Cow Fresh Meat",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-6.jpg",
    link: "product-details.html",
  },
  {
    id: 7,
    name: "Fresh packaged Green Avocoda",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-7.jpg",
    link: "product-details.html",
  },
  {
    id: 8,
    name: "Organic Campa Yellow Bananas",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-8.jpg",
    link: "product-details.html",
  },
  {
    id: 9,
    name: "Zesty Orange Carrot",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-9.jpg",
    link: "product-details.html",
  },
  {
    id: 10,
    name: "Tropical Red Pomegranate",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-10.jpg",
    link: "product-details.html",
  },
  {
    id: 11,
    name: "Cauliflower - Each APPROX 1.5",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-11.jpg",
    link: "product-details.html",
  },
  {
    id: 12,
    name: "Tropical Yellow Lemon",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-12.jpg",
    link: "product-details.html",
  },
];


const topDiscountProducts = [
  {
    id: 1,
    name: "Local Organic Green Broccoli",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-1.jpg",
    link: "product-details.html",
  },
  {
    id: 2,
    name: "Sweet Juicy Mango",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-2.jpg",
    link: "product-details.html",
  },
  {
    id: 3,
    name: "Creamy Yellow Pumkin",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-3.jpg",
    link: "product-details.html",
  },
  {
    id: 4,
    name: "Fresh packaged Red Tomato",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-4.jpg",
    link: "product-details.html",
  },
  {
    id: 5,
    name: "Whole White Mushrooms",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-5.jpg",
    link: "product-details.html",
  },
  {
    id: 6,
    name: "Red Bull Cow Fresh Meat",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-6.jpg",
    link: "product-details.html",
  },
  {
    id: 7,
    name: "Fresh packaged Green Avocoda",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-7.jpg",
    link: "product-details.html",
  },
  {
    id: 8,
    name: "Organic Campa Yellow Bananas",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-8.jpg",
    link: "product-details.html",
  },
  {
    id: 9,
    name: "Zesty Orange Carrot",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-9.jpg",
    link: "product-details.html",
  },
  {
    id: 10,
    name: "Tropical Red Pomegranate",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-10.jpg",
    link: "product-details.html",
  },
  {
    id: 11,
    name: "Cauliflower - Each APPROX 1.5",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-11.jpg",
    link: "product-details.html",
  },
  {
    id: 12,
    name: "Tropical Yellow Lemon",
    category: "1KG/500gm",
    price: "$16.00",
    oldPrice: "$16.00",
    img: "assets/img/product/table-1-12.jpg",
    link: "product-details.html",
  },
];



function Home2(){
   
  return (
    <div> 
        <header className="mtheader__area p-relative">
      {/* Header Top Area */}
      <div className="mtheader__top-area mtheader__top-2 theme-bg p-relative d-none d-lg-block">
        <div className="container">
          <div className="mtborder__top-wrapper d-flex align-items-center justify-content-between">
            <div className="mtheader__top-left">
              <a href="mailto:info@example.com">
                <i className="fa-light fa-envelope"></i>
                <span>info@example.com</span>
              </a>
              <span>
                <i className="fa-solid fa-star-sharp"></i>
              </span>
              <a href="a">
                <i className="fa-light fa-location-dot"></i>
                <span>Lincoln- 344, Illinois, Florida, USA</span>
              </a>
            </div>

            <div className="mtheader__top-right d-flex align-items-center justify-content-between">
              <div className="mtheader__top-social">
                <a href="b"><i className="fa-brands fa-pinterest-p"></i></a>
                <a href="c"><i className="fa-brands fa-instagram"></i></a>
                <a href="d"><i className="fa-brands fa-facebook-f"></i></a>
              </div>
              <span><i className="fa-solid fa-star-sharp"></i></span>

              <div className="mtheader__top-lang">
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
              </div>

              <span><i className="fa-solid fa-star-sharp"></i></span>

              <div className="mtheader__top-currency">
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

      {/* Header Menu Area */}
      <div id="mt-header-sticky" className="mtheader__bottom-area mtheader__bottom-2 mt-sticky-theme-2 p-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2 col-6">
              <div className="mtheader__bottom-category-wrap p-relative">
                <div className="mtheader__bottom-category">
                  <div className="mtheader__logo">
                    <a href="index.html">
                      <img src="assets/img/logo/black-logo.png" alt="Rosun" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-10 col-6">
              <div className="mtheader__bottom-wrapper p-relative d-flex align-items-center justify-content-end justify-content-xl-between">
                
                {/* Desktop Menu */}
                <div className="mtheader__bottom-menu d-none d-xl-block">
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
                      <li className="has-dropdown">
                        <button href="#" >Shop</button>
                        <ul className="sub-menu mt-submenu">
                          <li><a href="/Shop">Shop</a></li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <button href="#" >Pages</button>
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
                        <button href="#" >Blog</button>
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

                {/* Middle Account / Wishlist / Cart */}
                <div className="mtheader__midel-account-wrap p-relative d-flex align-items-center justify-content-between">
                  <div className="mtheader__midel-wishlist d-none d-lg-block">
                    <a href="/Wishlist"><i className="fa-regular fa-heart"></i></a>
                  </div>
                  <span className="d-none d-lg-block"><i className="fa-solid fa-star-sharp"></i></span>

                  <div className="mtheader__midel-login mtheader__mobile-cart">
                    <a href="/Login" className="mt__header-login-another-page">
                      <i className="fa-solid fa-user-plus"></i>
                      <span>Login your</span>
                      <h6>Account</h6>
                    </a>
                  </div>

                  <span><i className="fa-solid fa-star-sharp"></i></span>

                  <div className="mtheader__midel-login mtheader__mobile-cart">
                    <div className="mtcartmini-open-btn">
                      <div className="mtheader__midel-card-value">
                        <a href='/Cart'>
                        <i className="fa-solid fa-basket-shopping"></i> </a>
                        <p>2</p>
                        <span>Cart Items</span>
                        <h6>$570.00</h6>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Toggle */}
                <div className="mt-header-toogle d-xl-none text-end">
                  <button className="mt-offcanvas-toogle mt-offcanvas-toogle-2">
                    <i className="fa-regular fa-bars-staggered"></i>
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </header>



    <main>
        <section className="mthero__area mthero__2 p-relative fix">
      <div
        className="mthero__2-bg pt-120 pb-130"
        style={{ backgroundImage: "url('assets/img/hero/hero-bg-2-1.jpg')" }}
      >
        <div className="mthero__shape-wrap">
          <div className="mthero__shape">
            <img src="assets/img/hero/shape-2-1.png" alt="" />
          </div>
          <div className="mthero__shape-2">
            <img src="assets/img/hero/shape-2-2.png" alt="" />
          </div>
          <div className="mthero__shape-3">
            <img src="assets/img/hero/shape-2-3.png" alt="" />
          </div>
        </div>

        <div className="container">
          <div className="mthero__wrapper">
            <div className="swiper mt-hero-2-active">
              <div className="swiper-wrapper">
                {/* Slide 1 */}
                <div className="swiper-slide">
                  <div className="row g-0 align-items-center">
                    <div className="col-lg-6">
                      <div className="mthero__content">
                        <h5 className="mthero__subtitle mt-upper">
                          <span>100% Organic and Fresh Food</span>
                        </h5>
                        <h1 className="mthero__title">
                          Pure &{" "}
                          <span>
                            Healthy <img src="assets/img/icon/hero-under-text.svg" alt="" />
                          </span>{" "}
                          Organic Food
                        </h1>
                        <p>
                          Indulge in the goodness of nature with our organic products. Experience pure,
                          wholesome flavors free from harmful
                        </p>
                        <div className="mthero__btn mt-40">
                          <a href="shop.html" className="mt-btn">
                            <i className="fa-solid fa-basket-shopping"></i> Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mthero__img text-center text-lg-end">
                        <img src="assets/img/hero/hero-2-1.png" alt="Rosun" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 2 */}
                <div className="swiper-slide">
                  <div className="row g-0 align-items-center">
                    <div className="col-lg-6">
                      <div className="mthero__content">
                        <h5 className="mthero__subtitle mt-upper">
                          <span>100% Organic and Fresh Food</span>
                        </h5>
                        <h1 className="mthero__title">
                          Pure &{" "}
                          <span>
                            Healthy <img src="assets/img/icon/hero-under-text.svg" alt="" />
                          </span>{" "}
                          Organic Food
                        </h1>
                        <p>
                          Indulge in the goodness of nature with our organic products. Experience pure,
                          wholesome flavors free from harmful
                        </p>
                        <div className="mthero__btn mt-40">
                          <a href="shop.html" className="mt-btn">
                            <i className="fa-solid fa-basket-shopping"></i> Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mthero__img text-center text-lg-end">
                        <img src="assets/img/hero/hero-1-1.png" alt="Rosun" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 3 */}
                <div className="swiper-slide">
                  <div className="row g-0 align-items-center">
                    <div className="col-lg-6">
                      <div className="mthero__content">
                        <h5 className="mthero__subtitle mt-upper">
                          <span>100% Organic and Fresh Food</span>
                        </h5>
                        <h1 className="mthero__title">
                          Pure &{" "}
                          <span>
                            Healthy <img src="assets/img/icon/hero-under-text.svg" alt="" />
                          </span>{" "}
                          Organic Food
                        </h1>
                        <p>
                          Indulge in the goodness of nature with our organic products. Experience pure,
                          wholesome flavors free from harmful
                        </p>
                        <div className="mthero__btn mt-40">
                          <a href="shop.html" className="mt-btn">
                            <i className="fa-solid fa-basket-shopping"></i> Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mthero__img text-center text-lg-end">
                        <img src="assets/img/hero/hero-2-1.png" alt="Rosun" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mthero-2-pagination"></div>
          </div>
        </div>
      </div>
    </section>
<BrandTitleSlide></BrandTitleSlide>
<ShopCategories></ShopCategories>
<BannerArea></BannerArea>
<FeatureProductArea></FeatureProductArea>
<ProductArea></ProductArea>

<section
      className="mtbanner__area mtbanner__2-bg pb-60 pt-60 p-relative fix"
      style={{ backgroundImage: "url('assets/img/banner/banner-bg-2-2.jpg')" }}
    >
      <div className="mtbanner__shape d-none">
        <img src="assets/img/banner/shape-2-1.png" alt="Rosun" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="mtbanner__wrapper mtbanner__2 p-relative wow img-custom-anim-left"
              data-wow-duration="1.5s"
              data-wow-delay="0.1s"
            >
              <div className="mtbanner__item">
                <div className="mtbanner__content">
                  <h5 className="mtbanner__subtitle mb-20">
                    <img src="assets/img/icon/star-icon-3.svg" alt="" /> Deals Of The Day{" "}
                    <img src="assets/img/icon/star-icon-3.svg" alt="" />
                  </h5>
                  <h3 className="mtbanner__title mb-20">
                    Fresh, premium drinks from the farm.
                  </h3>
                  <p className="mb-23">
                    Farm-fresh goodness at 40% off! Enjoy the pure taste of nature with
                    our premium drinks. Limited time offer.
                  </p>

                  <h5 className="mtbanner__subtitle mb-10">
                    Hurry Up!<span> Offer End In:</span>
                  </h5>

                  <div
                    className="mtbanner__countdown mtbanner__countdown-2 mb-60"
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

                  <div className="mtbanner__btn">
                    <a href="shop.html" className="mt-btn">
                      <i className="fa-solid fa-basket-shopping"></i> <span>Shop Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              className="mtbanner__wrapper mtbanner__2 p-relative text-end wow img-custom-anim-right"
              data-wow-duration="1.5s"
              data-wow-delay="0.1s"
            >
              <div className="mtbanner__img-2">
                <img src="assets/img/banner/banner-2-2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

<HotProductArea></HotProductArea>

 <section
      className="mtbanner__area mtbanner__5 pb-70 pt-55 p-relative fix"
      style={{ backgroundImage: "url('assets/img/banner/banner-bg-3-2.jpg')" }}
    >
      <div className="container">
        <div className="mtbanner ml-80 mr-60">
          <div className="row g-0">
            {/* Left Banner */}
            <div className="col-lg-5">
              <div
                className="mtbanner__wrapper one mb-20 p-relative wow img-custom-anim-left"
                data-wow-duration="1.5s"
                data-wow-delay="0.1s"
                style={{ backgroundImage: "url('assets/img/banner/banner-5-1.jpg')" }}
              >
                <div
                  className="mtbanner__item mt-40 wow img-custom-anim-left"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.5s"
                >
                  <h5 className="mtbanner__subtitle">
                    New Arrival{" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="13"
                        viewBox="0 0 14 13"
                        fill="none"
                      >
                        <path
                          d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                  </h5>
                  <h3 className="mtbanner__title mb-15">
                    Sweetness Organic Raw Mountain Honey
                  </h3>
                  <p className="mb-25">Get 40% discount for new arrival</p>
                  <div className="mtbanner__btn">
                    <a href="shop.html" className="mt-btn-2">
                      <span>
                        <i className="fa-solid fa-basket-shopping"></i>
                      </span>{" "}
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Banners */}
            <div className="col-lg-7">
              <div className="mtbanner__box-item">
                {/* Banner 2 */}
                <div
                  className="mtbanner__wrapper mtbanner__wrapper-2 two mb-20 p-relative wow img-custom-anim-left"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.5s"
                >
                  <div className="d-flex align-items-end fix">
                    <div
                      className="mtbanner__item mr-20 mb-40 wow img-custom-anim-left"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.7s"
                    >
                      <h5 className="mtbanner__subtitle black">
                        New Arrival{" "}
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="13"
                            viewBox="0 0 14 13"
                            fill="none"
                          >
                            <path
                              d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"
                              fill="#060121"
                            ></path>
                          </svg>
                        </span>
                      </h5>
                      <h3 className="mtbanner__title black mb-15">
                        Fresh Vegetables and Frozen Food
                      </h3>
                      <p className="mb-25 black">Get 20% discount for new arrival</p>
                      <div className="mtbanner__btn">
                        <a href="shop.html" className="mt-btn-2">
                          <span>
                            <i className="fa-solid fa-basket-shopping"></i>
                          </span>{" "}
                          Buy Now
                        </a>
                      </div>
                    </div>
                    <div className="mtbanner__item-thumb">
                      <img src="assets/img/banner/banner-5-2.png" alt="" />
                    </div>
                  </div>
                </div>

                {/* Banner 3 */}
                <div
                  className="mtbanner__wrapper mtbanner__wrapper-2 three mb-20 p-relative wow img-custom-anim-left"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.7s"
                >
                  <div className="d-flex align-items-center">
                    <div
                      className="mtbanner__item mr-20 wow img-custom-anim-left"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.9s"
                    >
                      <h5 className="mtbanner__subtitle">
                        New Arrival{" "}
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="13"
                            viewBox="0 0 14 13"
                            fill="none"
                          >
                            <path
                              d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"
                              fill="white"
                            ></path>
                          </svg>
                        </span>
                      </h5>
                      <h3 className="mtbanner__title mb-15">
                        Pure Dairy milks and desert items
                      </h3>
                      <p className="mb-25">Get 40% discount for new arrival</p>
                      <div className="mtbanner__btn">
                        <a href="shop.html" className="mt-btn-2">
                          <span>
                            <i className="fa-solid fa-basket-shopping"></i>
                          </span>{" "}
                          Buy Now
                        </a>
                      </div>
                    </div>
                    <div className="mtbanner__item-thumb">
                      <img src="assets/img/banner/banner-5-3.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

<WeeklyHotDeals></WeeklyHotDeals>
 <div
      className="mtproduct__table-area pt-50 pb-120"
      data-background="assets/img/bg/product-table-bg.png"
    >
      <div className="container">
        <div
          className="mtproduct__table-wrapper p-relative"
          data-background="assets/img/product/table-bg.png"
        >
          <div className="mtproduct__table-menu">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-today-trending-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#today-trending"
                  type="button"
                  role="tab"
                  aria-controls="today-trending"
                  aria-selected="true"
                >
                  Today Trending
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-recently-added-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#recently-added"
                  type="button"
                  role="tab"
                  aria-controls="recently-added"
                  aria-selected="false"
                >
                  Recently Added
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-hot-products-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#hot-products"
                  type="button"
                  role="tab"
                  aria-controls="hot-products"
                  aria-selected="false"
                >
                  Hot Products
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-top-discount-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#top-discount"
                  type="button"
                  role="tab"
                  aria-controls="top-discount"
                  aria-selected="false"
                >
                  Top Discount
                </button>
              </li>
            </ul>
          </div>
        </div>
 <div className="tab-content mt-20 mb-10" id="pills-tabContent_erorw">
      <div
        className="tab-pane fade"
        id="today-trending"
        role="tabpanel"
        aria-labelledby="pills-today-trending-tab"
      >
        <div className="mtproduct__table-inner">
          <div className="row align-items-center">
            {products.map((product) => (
              <div key={product.id} className="col-lg-4 col-md-6">
                <div className="mtproduct__table-item fix d-flex align-items-center">
                  <div className="mtproduct__table-thumb">
                    <a href={product.link}>
                      <img src={product.img} alt={product.name} />
                    </a>
                  </div>
                  <div className="mtproduct__table-content">
                    <div className="mtproduct__table-category">
                      <span>{product.category}</span>
                    </div>
                    <h3 className="mtproduct__table-title">
                      <a href={product.link}>{product.name}</a>
                    </h3>
                    <div className="mtproduct__table-price-wrap">
                      <div className="mtproduct__table-price">
                        <span>{product.price}</span>
                        <del>{product.oldPrice}</del>
                      </div>
                      <div className="mtproduct__table-btn">
                        <a href="cart.html" className="mt-btn mt-btn-cart">
                          Add to Cart
                        </a>
                        <a href="wishlist.html" className="mtproduct__table-heart">
                          <i className="fa-regular fa-heart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
 <div
      className="tab-pane fade show active"
      id="recently-added"
      role="tabpanel"
      aria-labelledby="pills-recently-added-tab"
    >
      <div className="mtproduct__table-inner">
        <div className="row align-items-center">
          {recentlyAddedProducts.map((product) => (
            <div key={product.id} className="col-lg-4 col-md-6">
              <div className="mtproduct__table-item fix d-flex align-items-center">
                <div className="mtproduct__table-thumb">
                  <a href={product.link}>
                    <img src={product.img} alt={product.name} />
                  </a>
                </div>
                <div className="mtproduct__table-content">
                  <div className="mtproduct__table-category">
                    <span>{product.category}</span>
                  </div>
                  <h3 className="mtproduct__table-title">
                    <a href={product.link}>{product.name}</a>
                  </h3>
                  <div className="mtproduct__table-price-wrap">
                    <div className="mtproduct__table-price">
                      <span>{product.price}</span>
                      <del>{product.oldPrice}</del>
                    </div>
                    <div className="mtproduct__table-btn">
                      <a href="cart.html" className="mt-btn mt-btn-cart">
                        Add to Cart
                      </a>
                      <a href="wishlist.html" className="mtproduct__table-heart">
                        <i className="fa-regular fa-heart"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

     <div
      className="tab-pane fade"
      id="hot-products"
      role="tabpanel"
      aria-labelledby="pills-hot-products-tab"
    >
      <div className="mtproduct__table-inner">
        <div className="row align-items-center">
          {hotProducts.map((product) => (
            <div key={product.id} className="col-lg-4 col-md-6">
              <div className="mtproduct__table-item fix d-flex align-items-center">
                <div className="mtproduct__table-thumb">
                  <a href={product.link}>
                    <img src={product.img} alt={product.name} />
                  </a>
                </div>
                <div className="mtproduct__table-content">
                  <div className="mtproduct__table-category">
                    <span>{product.category}</span>
                  </div>
                  <h3 className="mtproduct__table-title">
                    <a href={product.link}>{product.name}</a>
                  </h3>
                  <div className="mtproduct__table-price-wrap">
                    <div className="mtproduct__table-price">
                      <span>{product.price}</span>
                      <del>{product.oldPrice}</del>
                    </div>
                    <div className="mtproduct__table-btn">
                      <a href="cart.html" className="mt-btn mt-btn-cart">
                        Add to Cart
                      </a>
                      <a href="wishlist.html" className="mtproduct__table-heart">
                        <i className="fa-regular fa-heart"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
 <div
      className="tab-pane fade"
      id="top-discount"
      role="tabpanel"
      aria-labelledby="pills-top-discount-tab"
    >
      <div className="mtproduct__table-inner">
        <div className="row align-items-center">
          {topDiscountProducts.map((product) => (
            <div key={product.id} className="col-lg-4 col-md-6">
              <div className="mtproduct__table-item fix d-flex align-items-center">
                <div className="mtproduct__table-thumb">
                  <a href={product.link}>
                    <img src={product.img} alt={product.name} />
                  </a>
                </div>
                <div className="mtproduct__table-content">
                  <div className="mtproduct__table-category">
                    <span>{product.category}</span>
                  </div>
                  <h3 className="mtproduct__table-title">
                    <a href={product.link}>{product.name}</a>
                  </h3>
                  <div className="mtproduct__table-price-wrap">
                    <div className="mtproduct__table-price">
                      <span>{product.price}</span>
                      <del>{product.oldPrice}</del>
                    </div>
                    <div className="mtproduct__table-btn">
                      <a href="cart.html" className="mt-btn mt-btn-cart">
                        Add to Cart
                      </a>
                      <a href="wishlist.html" className="mtproduct__table-heart">
                        <i className="fa-regular fa-heart"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    </div>


      </div>
    </div>
   <BrandSlider></BrandSlider> 
        <section
      className="mtpopular__product-area mtpopular__product-3 pt-90 pb-130 p-relative fix"
      data-background="assets/img/bg/product-all-bg.png"
    >
      <div className="mtpopular__product-shape-wrap">
        <div className="mtpopular__product-shape">
          <img src="assets/img/shape/shape-1-1.png" alt="" />
        </div>

        <div className="mtpopular__product-shape-2">
          <img src="assets/img/shape/shape-1-2.png" alt="" />
        </div>
      </div>

       <div className="container">
      <div className="row align-items-center">

        {/* LEFT SIDE TEXT */}
        <div className="col-lg-6">
          <div className="mt-section-content mb-45">
            <h3 className="mt-section-title">
              Popular
              <span>Products</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                >
                  <path
                    d="M9 1.82196L10.429 6.82929L10.5619 7.29477L11.0314 7.17707L16.0824 5.91098L12.4604 9.65222L12.1237 10L12.4604 10.3478L16.0824 14.089L11.0314 12.8229L10.5619 12.7052L10.429 13.1707L9 18.178L7.57097 13.1707L7.43813 12.7052L6.9686 12.8229L1.91761 14.089L5.53957 10.3478L5.87627 10L5.53957 9.65222L1.91761 5.91098L6.9686 7.17707L7.43813 7.29477L7.57097 6.82929L9 1.82196Z"
                    fill="#FDD057"
                    stroke="#060121"
                  />
                </svg>
              </span>
            </h3>

            <p>
              Our bestsellers! Discover the customer favorites that everyone's
              talking about.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE TABS */}
        <div className="col-lg-6">
          <div className="mtpopular__product-wrapper mb-45 text-lg-end">
            <div className="mtpopular__product-tab">
              <ul className="nav nav-pills mb-3" id="pills-tab1" role="tablist">
                
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

      <div className="mtpopular__product-wrapper text-start">
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div className="cols">

            {/* 1 */}
            <div className="mtfeature__product-item p-relative fix">
              <div className="mtfeature__product-img mb-15">
                <div className="mtfeature__product-wishlist">
                  <a href="wishlist.html"><i className="fa-regular fa-heart"></i></a>
                </div>
                <a href="product-details.html">
                  <img src="assets/img/product/feature-2-1.png" alt="Rosun" />
                </a>
              </div>
              <div className="mtfeature__product-content mb-15">
                <div className="mtfeature__product-cate mb-10">
                  <span>1Kg</span><span>500Kg</span>
                </div>
                <h5 className="mtfeature__product-title">
                  <a href="product-details.html">local organic Green <br /> Broccoli</a>
                </h5>
              </div>
              <div className="mtfeature__product-rating mb-15">
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-light fa-star"></i>
                <i className="fa-light fa-star"></i>
              </div>
              <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
                <div className="mtfeature__product-price">
                  <span>$29.00</span><del>$26.00</del>
                </div>
                <div className="mtfeature__product-cart">
                  <a href="cart.html"><i className="fa-solid fa-basket-shopping"></i></a>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="mtfeature__product-item p-relative fix">
              <div className="mtfeature__product-offer"><span>70% OFF</span></div>
              <div className="mtfeature__product-img mb-15">
                <div className="mtfeature__product-wishlist">
                  <a href="wishlist.html"><i className="fa-regular fa-heart"></i></a>
                </div>
                <a href="product-details.html">
                  <img src="assets/img/product/feature-2-2.png" alt="Rosun" />
                </a>
              </div>
              <div className="mtfeature__product-content mb-15">
                <div className="mtfeature__product-cate mb-10">
                  <span>1Kg</span><span>500Kg</span>
                </div>
                <h5 className="mtfeature__product-title">
                  <a href="product-details.html">Fresh packaged Red <br /> Tomato</a>
                </h5>
              </div>
              <div className="mtfeature__product-rating mb-15">
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-light fa-star"></i>
                <i className="fa-light fa-star"></i>
              </div>
              <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
                <div className="mtfeature__product-price">
                  <span>$29.00</span><del>$26.00</del>
                </div>
                <div className="mtfeature__product-cart">
                  <a href="cart.html"><i className="fa-solid fa-basket-shopping"></i></a>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="mtfeature__product-item p-relative fix">
              <div className="mtfeature__product-img mb-15">
                <div className="mtfeature__product-wishlist">
                  <a href="wishlist.html"><i className="fa-regular fa-heart"></i></a>
                </div>
                <a href="product-details.html">
                  <img src="assets/img/product/feature-2-3.png" alt="Rosun" />
                </a>
              </div>
              <div className="mtfeature__product-content mb-15">
                <div className="mtfeature__product-cate mb-10">
                  <span>1Kg</span><span>500Kg</span>
                </div>
                <h5 className="mtfeature__product-title">
                  <a href="product-details.html">local organic Green <br /> Broccoli</a>
                </h5>
              </div>
              <div className="mtfeature__product-rating mb-15">
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-light fa-star"></i>
                <i className="fa-light fa-star"></i>
              </div>
              <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
                <div className="mtfeature__product-price">
                  <span>$11.00</span><del>$15.00</del>
                </div>
                <div className="mtfeature__product-cart">
                  <a href="cart.html"><i className="fa-solid fa-basket-shopping"></i></a>
                </div>
              </div>
            </div>

            {/* 4 */}
            <div className="mtfeature__product-item p-relative fix">
              <div className="mtfeature__product-img mb-15">
                <div className="mtfeature__product-wishlist">
                  <a href="wishlist.html"><i className="fa-regular fa-heart"></i></a>
                </div>
                <a href="product-details.html">
                  <img src="assets/img/product/feature-2-4.png" alt="Rosun" />
                </a>
              </div>
              <div className="mtfeature__product-content mb-15">
                <div className="mtfeature__product-cate mb-10">
                  <span>1Kg</span><span>500Kg</span>
                </div>
                <h5 className="mtfeature__product-title">
                  <a href="product-details.html">White Pumpkin - Each <br /> (appr 1.5 LB-2 LB)</a>
                </h5>
              </div>
              <div className="mtfeature__product-rating mb-15">
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-light fa-star"></i>
                <i className="fa-light fa-star"></i>
              </div>
              <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
                <div className="mtfeature__product-price">
                  <span>$15.00</span><del>$22.00</del>
                </div>
                <div className="mtfeature__product-cart">
                  <a href="cart.html"><i className="fa-solid fa-basket-shopping"></i></a>
                </div>
              </div>
            </div>

            {/* 5 */}
            <div className="mtfeature__product-item p-relative fix">
              <div className="mtfeature__product-offer"><span>70% OFF</span></div>
              <div className="mtfeature__product-img mb-15">
                <div className="mtfeature__product-wishlist">
                  <a href="wishlist.html"><i className="fa-regular fa-heart"></i></a>
                </div>
                <a href="product-details.html">
                  <img src="assets/img/product/feature-2-5.png" alt="Rosun" />
                </a>
              </div>
              <div className="mtfeature__product-content mb-15">
                <div className="mtfeature__product-cate mb-10">
                  <span>1Kg</span><span>500Kg</span>
                </div>
                <h5 className="mtfeature__product-title">
                  <a href="product-details.html">Palak Green (Spinach) - <br /> Bunch Organic</a>
                </h5>
              </div>
              <div className="mtfeature__product-rating mb-15">
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-light fa-star"></i>
                <i className="fa-light fa-star"></i>
              </div>
              <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
                <div className="mtfeature__product-price">
                  <span>$17.00</span><del>$26.00</del>
                </div>
                <div className="mtfeature__product-cart">
                  <a href="cart.html"><i className="fa-solid fa-basket-shopping"></i></a>
                </div>
              </div>
            </div>

            {/* 6 */}
            <div className="mtfeature__product-item p-relative fix">
              <div className="mtfeature__product-img mb-15">
                <div className="mtfeature__product-wishlist">
                  <a href="wishlist.html"><i className="fa-regular fa-heart"></i></a>
                </div>
                <a href="product-details.html">
                  <img src="assets/img/product/feature-2-6.png" alt="Rosun" />
                </a>
              </div>
              <div className="mtfeature__product-content mb-15">
                <div className="mtfeature__product-cate mb-10">
                  <span>1Kg</span><span>500Kg</span>
                </div>
                <h5 className="mtfeature__product-title">
                  <a href="product-details.html">Gerber Organic 2nd Foods <br /> Cucumber</a>
                </h5>
              </div>
              <div className="mtfeature__product-rating mb-15">
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-light fa-star"></i>
                <i className="fa-light fa-star"></i>
              </div>
              <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
                <div className="mtfeature__product-price">
                  <span>$15.00</span><del>$22.00</del>
                </div>
                <div className="mtfeature__product-cart">
                  <a href="cart.html"><i className="fa-solid fa-basket-shopping"></i></a>
                </div>
              </div>
            </div>

            {/* 7 */}
            <div className="mtfeature__product-item p-relative fix">
              <div className="mtfeature__product-img mb-15">
                <div className="mtfeature__product-wishlist">
                  <a href="wishlist.html"><i className="fa-regular fa-heart"></i></a>
                </div>
                <a href="product-details.html">
                  <img src="assets/img/product/feature-2-7.png" alt="Rosun" />
                </a>
              </div>
              <div className="mtfeature__product-content mb-15">
                <div className="mtfeature__product-cate mb-10">
                  <span>1Kg</span><span>500Kg</span>
                </div>
                <h5 className="mtfeature__product-title">
                  <a href="product-details.html">local organic Green <br /> Broccoli</a>
                </h5>
              </div>
              <div className="mtfeature__product-rating mb-15">
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-light fa-star"></i>
                <i className="fa-light fa-star"></i>
              </div>
              <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
                <div className="mtfeature__product-price">
                  <span>$13.00</span><del>$19.00</del>
                </div>
                <div className="mtfeature__product-cart">
                  <a href="cart.html"><i className="fa-solid fa-basket-shopping"></i></a>
                </div>
              </div>
            </div>

            {/* 8 */}
            <div className="mtfeature__product-item p-relative fix">
              <div className="mtfeature__product-img mb-15">
                <div className="mtfeature__product-wishlist">
                  <a href="wishlist.html"><i className="fa-regular fa-heart"></i></a>
                </div>
                <a href="product-details.html">
                  <img src="assets/img/product/feature-2-8.png" alt="Rosun" />
                </a>
              </div>
              <div className="mtfeature__product-content mb-15">
                <div className="mtfeature__product-cate mb-10">
                  <span>1Kg</span><span>500Kg</span>
                </div>
                <h5 className="mtfeature__product-title">
                  <a href="product-details.html">Organic Campa Yellow <br /> Bananas</a>
                </h5>
              </div>
              <div className="mtfeature__product-rating mb-15">
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-light fa-star"></i>
                <i className="fa-light fa-star"></i>
              </div>
              <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
                <div className="mtfeature__product-price">
                  <span>$9.00</span><del>$12.00</del>
                </div>
                <div className="mtfeature__product-cart">
                  <a href="cart.html"><i className="fa-solid fa-basket-shopping"></i></a>
                </div>
              </div>
            </div>

            {/* 9 */}
            <div className="mtfeature__product-item p-relative fix">
              <div className="mtfeature__product-img mb-15">
                <div className="mtfeature__product-wishlist">
                  <a href="wishlist.html"><i className="fa-regular fa-heart"></i></a>
                </div>
                <a href="product-details.html">
                  <img src="assets/img/product/feature-2-9.png" alt="Rosun" />
                </a>
              </div>
              <div className="mtfeature__product-content mb-15">
                <div className="mtfeature__product-cate mb-10">
                  <span>1Kg</span><span>500Kg</span>
                </div>
                <h5 className="mtfeature__product-title">
                  <a href="product-details.html">Cauliflower - Each <br /> APPROX 1.5 Lb</a>
                </h5>
              </div>
              <div className="mtfeature__product-rating mb-15">
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-light fa-star"></i>
                <i className="fa-light fa-star"></i>
              </div>
              <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
                <div className="mtfeature__product-price">
                  <span>$19.00</span><del>$26.00</del>
                </div>
                <div className="mtfeature__product-cart">
                  <a href="cart.html"><i className="fa-solid fa-basket-shopping"></i></a>
                </div>
              </div>
            </div>

            {/* 10 */}
            <div className="mtfeature__product-item p-relative fix">
              <div className="mtfeature__product-offer"><span>70% OFF</span></div>
              <div className="mtfeature__product-img mb-15">
                <div className="mtfeature__product-wishlist">
                  <a href="wishlist.html"><i className="fa-regular fa-heart"></i></a>
                </div>
                <a href="product-details.html">
                  <img src="assets/img/product/feature-2-10.png" alt="Rosun" />
                </a>
              </div>
              <div className="mtfeature__product-content mb-15">
                <div className="mtfeature__product-cate mb-10">
                  <span>1Kg</span><span>500Kg</span>
                </div>
                <h5 className="mtfeature__product-title">
                  <a href="product-details.html">Tropical Local Yellow <br /> Pineapple</a>
                </h5>
              </div>
              <div className="mtfeature__product-rating mb-15">
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-light fa-star"></i>
                <i className="fa-light fa-star"></i>
              </div>
              <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
                <div className="mtfeature__product-price">
                  <span>$15.00</span><del>$20.00</del>
                </div>
                <div className="mtfeature__product-cart">
                  <a href="cart.html"><i className="fa-solid fa-basket-shopping"></i></a>
                </div>
              </div>
            </div>

          </div>
        </div>
<div
      className="tab-pane fade"
      id="pills-profile"
      role="tabpanel"
      aria-labelledby="pills-profile-tab"
    >
      <div className="cols">

        {/* 1 */}
        <div className="mtfeature__product-item p-relative fix">
          <div className="mtfeature__product-offer">
            <span>70% OFF</span>
          </div>
          <div className="mtfeature__product-img mb-15">
            <div className="mtfeature__product-wishlist">
              <a href="wishlist.html"><i className="fa-regular fa-heart"></i></a>
            </div>
            <a href="product-details.html">
              <img src="assets/img/product/feature-2-5.png" alt="Rosun" />
            </a>
          </div>
          <div className="mtfeature__product-content mb-15">
            <div className="mtfeature__product-cate mb-10">
              <span>1Kg</span><span>500Kg</span>
            </div>
            <h5 className="mtfeature__product-title">
              <a href="product-details.html">Palak Green (Spinach) - <br /> Bunch Organic</a>
            </h5>
          </div>
          <div className="mtfeature__product-rating mb-15">
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-light fa-star"></i>
            <i className="fa-light fa-star"></i>
          </div>
          <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
            <div className="mtfeature__product-price">
              <span>$17.00</span><del>$26.00</del>
            </div>
            <div className="mtfeature__product-cart">
              <a href="cart.html"><i className="fa-solid fa-basket-shopping"></i></a>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="mtfeature__product-item p-relative fix">
          <div className="mtfeature__product-img mb-15">
            <div className="mtfeature__product-wishlist">
              <a href="wishlist.html"><i className="fa-regular fa-heart"></i></a>
            </div>
            <a href="product-details.html">
              <img src="assets/img/product/feature-2-6.png" alt="Rosun" />
            </a>
          </div>
          <div className="mtfeature__product-content mb-15">
            <div className="mtfeature__product-cate mb-10">
              <span>1Kg</span><span>500Kg</span>
            </div>
            <h5 className="mtfeature__product-title">
              <a href="product-details.html">Gerber Organic 2nd Foods <br /> Cucumber</a>
            </h5>
          </div>
          <div className="mtfeature__product-rating mb-15">
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-light fa-star"></i>
            <i className="fa-light fa-star"></i>
          </div>
          <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
            <div className="mtfeature__product-price">
              <span>$15.00</span><del>$22.00</del>
            </div>
            <div className="mtfeature__product-cart">
              <a href="cart.html"><i className="fa-solid fa-basket-shopping"></i></a>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="mtfeature__product-item p-relative fix">
          <div className="mtfeature__product-img mb-15">
            <div className="mtfeature__product-wishlist">
              <a href="wishlist.html"><i className="fa-regular fa-heart"></i></a>
            </div>
            <a href="product-details.html">
              <img src="assets/img/product/feature-2-7.png" alt="Rosun" />
            </a>
          </div>
          <div className="mtfeature__product-content mb-15">
            <div className="mtfeature__product-cate mb-10">
              <span>1Kg</span><span>500Kg</span>
            </div>
            <h5 className="mtfeature__product-title">
              <a href="product-details.html">local organic Green <br /> Broccoli</a>
            </h5>
          </div>
          <div className="mtfeature__product-rating mb-15">
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-light fa-star"></i>
            <i className="fa-light fa-star"></i>
          </div>
          <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
            <div className="mtfeature__product-price">
              <span>$13.00</span><del>$19.00</del>
            </div>
            <div className="mtfeature__product-cart">
              <a href="cart.html"><i className="fa-solid fa-basket-shopping"></i></a>
            </div>
          </div>
        </div>

        {/* 4 */}
        <div className="mtfeature__product-item p-relative fix">
          <div className="mtfeature__product-img mb-15">
            <div className="mtfeature__product-wishlist">
              <a href="wishlist.html"><i className="fa-regular fa-heart"></i></a>
            </div>
            <a href="product-details.html">
              <img src="assets/img/product/feature-2-8.png" alt="Rosun" />
            </a>
          </div>
          <div className="mtfeature__product-content mb-15">
            <div className="mtfeature__product-cate mb-10">
              <span>1Kg</span><span>500Kg</span>
            </div>
            <h5 className="mtfeature__product-title">
              <a href="product-details.html">Organic Campa Yellow <br /> Bananas</a>
            </h5>
          </div>
          <div className="mtfeature__product-rating mb-15">
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-light fa-star"></i>
            <i className="fa-light fa-star"></i>
          </div>
          <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
            <div className="mtfeature__product-price">
              <span>$9.00</span><del>$12.00</del>
            </div>
            <div className="mtfeature__product-cart">
              <a href="cart.html"><i className="fa-solid fa-basket-shopping"></i></a>
            </div>
          </div>
        </div>

        {/* 5 */}
        <div className="mtfeature__product-item p-relative fix">
          <div className="mtfeature__product-img mb-15">
            <div className="mtfeature__product-wishlist">
              <a href="wishlist.html"><i className="fa-regular fa-heart"></i></a>
            </div>
            <a href="product-details.html">
              <img src="assets/img/product/feature-2-1.png" alt="Rosun" />
            </a>
          </div>
          <div className="mtfeature__product-content mb-15">
            <div className="mtfeature__product-cate mb-10">
              <span>1Kg</span><span>500Kg</span>
            </div>
            <h5 className="mtfeature__product-title">
              <a href="product-details.html">local organic Green <br /> Broccoli</a>
            </h5>
          </div>
          <div className="mtfeature__product-rating mb-15">
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-light fa-star"></i>
            <i className="fa-light fa-star"></i>
          </div>
          <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
            <div className="mtfeature__product-price">
              <span>$29.00</span><del>$26.00</del>
            </div>
            <div className="mtfeature__product-cart">
              <a href="cart.html"><i className="fa-solid fa-basket-shopping"></i></a>
            </div>
          </div>
        </div>

        {/* 6 */}
        <div className="mtfeature__product-item p-relative fix">
          <div className="mtfeature__product-offer">
            <span>70% OFF</span>
          </div>
          <div className="mtfeature__product-img mb-15">
            <div className="mtfeature__product-wishlist">
              <a href="wishlist.html"><i className="fa-regular fa-heart"></i></a>
            </div>
            <a href="product-details.html">
              <img src="assets/img/product/feature-2-2.png" alt="Rosun" />
            </a>
          </div>
          <div className="mtfeature__product-content mb-15">
            <div className="mtfeature__product-cate mb-10">
              <span>1Kg</span><span>500Kg</span>
            </div>
            <h5 className="mtfeature__product-title">
              <a href="product-details.html">Fresh packaged Red <br /> Tomato</a>
            </h5>
          </div>
          <div className="mtfeature__product-rating mb-15">
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-light fa-star"></i>
            <i className="fa-light fa-star"></i>
          </div>
          <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
            <div className="mtfeature__product-price">
              <span>$29.00</span><del>$26.00</del>
            </div>
            <div className="mtfeature__product-cart">
              <a href="cart.html"><i className="fa-solid fa-basket-shopping"></i></a>
            </div>
          </div>
        </div>

        {/* 7 */}
        <div className="mtfeature__product-item p-relative fix">
          <div className="mtfeature__product-img mb-15">
            <div className="mtfeature__product-wishlist">
              <a href="wishlist.html"><i className="fa-regular fa-heart"></i></a>
            </div>
            <a href="product-details.html">
              <img src="assets/img/product/feature-2-3.png" alt="Rosun" />
            </a>
          </div>
          <div className="mtfeature__product-content mb-15">
            <div className="mtfeature__product-cate mb-10">
              <span>1Kg</span><span>500Kg</span>
            </div>
            <h5 className="mtfeature__product-title">
              <a href="product-details.html">local organic Green <br /> Broccoli</a>
            </h5>
          </div>
          <div className="mtfeature__product-rating mb-15">
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-light fa-star"></i>
            <i className="fa-light fa-star"></i>
          </div>
          <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
            <div className="mtfeature__product-price">
              <span>$11.00</span><del>$15.00</del>
            </div>
            <div className="mtfeature__product-cart">
              <a href="cart.html"><i className="fa-solid fa-basket-shopping"></i></a>
            </div>
          </div>
        </div>

        {/* 8 */}
        <div className="mtfeature__product-item p-relative fix">
          <div className="mtfeature__product-img mb-15">
            <div className="mtfeature__product-wishlist">
              <a href="wishlist.html"><i className="fa-regular fa-heart"></i></a>
            </div>
            <a href="product-details.html">
              <img src="assets/img/product/feature-2-4.png" alt="Rosun" />
            </a>
          </div>
          <div className="mtfeature__product-content mb-15">
            <div className="mtfeature__product-cate mb-10">
              <span>1Kg</span><span>500Kg</span>
            </div>
            <h5 className="mtfeature__product-title">
              <a href="product-details.html">White Pumpkin - Each <br /> (appr 1.5 LB-2 LB)</a>
            </h5>
          </div>
          <div className="mtfeature__product-rating mb-15">
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-light fa-star"></i>
            <i className="fa-light fa-star"></i>
          </div>
          <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
            <div className="mtfeature__product-price">
              <span>$15.00</span><del>$22.00</del>
            </div>
            <div className="mtfeature__product-cart">
              <a href="cart.html"><i className="fa-solid fa-basket-shopping"></i></a>
            </div>
          </div>
        </div>

        {/* 9 */}
        <div className="mtfeature__product-item p-relative fix">
          <div className="mtfeature__product-img mb-15">
            <div className="mtfeature__product-wishlist">
              <a href="wishlist.html"><i className="fa-regular fa-heart"></i></a>
            </div>
            <a href="product-details.html">
              <img src="assets/img/product/feature-2-9.png" alt="Rosun" />
            </a>
          </div>
          <div className="mtfeature__product-content mb-15">
            <div className="mtfeature__product-cate mb-10">
              <span>1Kg</span><span>500Kg</span>
            </div>
            <h5 className="mtfeature__product-title">
              <a href="product-details.html">Cauliflower - Each <br /> APPROX 1.5 Lb</a>
            </h5>
          </div>
          <div className="mtfeature__product-rating mb-15">
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-light fa-star"></i>
            <i className="fa-light fa-star"></i>
          </div>
          <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
            <div className="mtfeature__product-price">
              <span>$19.00</span><del>$26.00</del>
            </div>
            <div className="mtfeature__product-cart">
              <a href="cart.html"><i className="fa-solid fa-basket-shopping"></i></a>
            </div>
          </div>
        </div>

        {/* 10 */}
        <div className="mtfeature__product-item p-relative fix">
          <div className="mtfeature__product-offer">
            <span>70% OFF</span>
          </div>
          <div className="mtfeature__product-img mb-15">
            <div className="mtfeature__product-wishlist">
              <a href="wishlist.html"><i className="fa-regular fa-heart"></i></a>
            </div>
            <a href="product-details.html">
              <img src="assets/img/product/feature-2-10.png" alt="Rosun" />
            </a>
          </div>
          <div className="mtfeature__product-content mb-15">
            <div className="mtfeature__product-cate mb-10">
              <span>1Kg</span><span>500Kg</span>
            </div>
            <h5 className="mtfeature__product-title">
              <a href="product-details.html">Tropical Local Yellow <br /> Pineapple</a>
            </h5>
          </div>
          <div className="mtfeature__product-rating mb-15">
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-light fa-star"></i>
            <i className="fa-light fa-star"></i>
          </div>
          <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
            <div className="mtfeature__product-price">
              <span>$15.00</span><del>$20.00</del>
            </div>
            <div className="mtfeature__product-cart">
              <a href="cart.html"><i className="fa-solid fa-basket-shopping"></i></a>
            </div>
          </div>
        </div>

      </div>
    </div>
     <div
      className="tab-pane fade"
      id="pills-contact"
      role="tabpanel"
      aria-labelledby="pills-contact-tab"
    >
      <div className="cols">

        {/* Product 1 */}
        <div className="mtfeature__product-item p-relative fix">
          <div className="mtfeature__product-img mb-15">
            <div className="mtfeature__product-wishlist">
              <a href="wishlist.html"><i className="fa-regular fa-heart"></i></a>
            </div>
            <a href="product-details.html">
              <img src="assets/img/product/feature-2-4.png" alt="Rosun" />
            </a>
          </div>
          <div className="mtfeature__product-content mb-15">
            <div className="mtfeature__product-cate mb-10"><span>1Kg</span><span>500Kg</span></div>
            <h5 className="mtfeature__product-title">
              <a href="product-details.html">White Pumpkin - Each <br /> (appr 1.5 LB-2 LB)</a>
            </h5>
          </div>
          <div className="mtfeature__product-rating mb-15">
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-light fa-star"></i>
            <i className="fa-light fa-star"></i>
          </div>
          <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
            <div className="mtfeature__product-price"><span>$15.00</span><del>$22.00</del></div>
            <div className="mtfeature__product-cart"><a href="cart.html"><i className="fa-solid fa-basket-shopping"></i></a></div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="mtfeature__product-item p-relative fix">
          <div className="mtfeature__product-offer"><span>70% OFF</span></div>
          <div className="mtfeature__product-img mb-15">
            <div className="mtfeature__product-wishlist"><a href="wishlist.html"><i className="fa-regular fa-heart"></i></a></div>
            <a href="product-details.html"><img src="assets/img/product/feature-2-5.png" alt="Rosun" /></a>
          </div>
          <div className="mtfeature__product-content mb-15">
            <div className="mtfeature__product-cate mb-10"><span>1Kg</span><span>500Kg</span></div>
            <h5 className="mtfeature__product-title"><a href="product-details.html">Palak Green (Spinach) - <br /> Bunch Organic</a></h5>
          </div>
          <div className="mtfeature__product-rating mb-15">
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-light fa-star"></i>
            <i className="fa-light fa-star"></i>
          </div>
          <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
            <div className="mtfeature__product-price"><span>$17.00</span><del>$26.00</del></div>
            <div className="mtfeature__product-cart"><a href="cart.html"><i className="fa-solid fa-basket-shopping"></i></a></div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="mtfeature__product-item p-relative fix">
          <div className="mtfeature__product-img mb-15">
            <div className="mtfeature__product-wishlist"><a href="wishlist.html"><i className="fa-regular fa-heart"></i></a></div>
            <a href="product-details.html"><img src="assets/img/product/feature-2-6.png" alt="Rosun" /></a>
          </div>
          <div className="mtfeature__product-content mb-15">
            <div className="mtfeature__product-cate mb-10"><span>1Kg</span><span>500Kg</span></div>
            <h5 className="mtfeature__product-title"><a href="product-details.html">Gerber Organic 2nd Foods <br /> Cucumber</a></h5>
          </div>
          <div className="mtfeature__product-rating mb-15">
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-light fa-star"></i>
            <i className="fa-light fa-star"></i>
          </div>
          <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
            <div className="mtfeature__product-price"><span>$15.00</span><del>$22.00</del></div>
            <div className="mtfeature__product-cart"><a href="cart.html"><i className="fa-solid fa-basket-shopping"></i></a></div>
          </div>
        </div>

        {/* Product 4 */}
        <div className="mtfeature__product-item p-relative fix">
          <div className="mtfeature__product-img mb-15">
            <div className="mtfeature__product-wishlist"><a href="wishlist.html"><i className="fa-regular fa-heart"></i></a></div>
            <a href="product-details.html"><img src="assets/img/product/feature-2-7.png" alt="Rosun" /></a>
          </div>
          <div className="mtfeature__product-content mb-15">
            <div className="mtfeature__product-cate mb-10"><span>1Kg</span><span>500Kg</span></div>
            <h5 className="mtfeature__product-title"><a href="product-details.html">local organic Green <br /> Broccoli</a></h5>
          </div>
          <div className="mtfeature__product-rating mb-15">
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-light fa-star"></i>
            <i className="fa-light fa-star"></i>
          </div>
          <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
            <div className="mtfeature__product-price"><span>$13.00</span><del>$19.00</del></div>
            <div className="mtfeature__product-cart"><a href="cart.html"><i className="fa-solid fa-basket-shopping"></i></a></div>
          </div>
        </div>

        {/* Product 5 */}
        <div className="mtfeature__product-item p-relative fix">
          <div className="mtfeature__product-img mb-15">
            <div className="mtfeature__product-wishlist"><a href="wishlist.html"><i className="fa-regular fa-heart"></i></a></div>
            <a href="product-details.html"><img src="assets/img/product/feature-2-1.png" alt="Rosun" /></a>
          </div>
          <div className="mtfeature__product-content mb-15">
            <div className="mtfeature__product-cate mb-10"><span>1Kg</span><span>500Kg</span></div>
            <h5 className="mtfeature__product-title"><a href="product-details.html">local organic Green <br /> Broccoli</a></h5>
          </div>
          <div className="mtfeature__product-rating mb-15">
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-light fa-star"></i>
            <i className="fa-light fa-star"></i>
          </div>
          <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
            <div className="mtfeature__product-price"><span>$29.00</span><del>$26.00</del></div>
            <div className="mtfeature__product-cart"><a href="cart.html"><i className="fa-solid fa-basket-shopping"></i></a></div>
          </div>
        </div>

        {/* Product 6 */}
        <div className="mtfeature__product-item p-relative fix">
          <div className="mtfeature__product-offer"><span>70% OFF</span></div>
          <div className="mtfeature__product-img mb-15">
            <div className="mtfeature__product-wishlist"><a href="wishlist.html"><i className="fa-regular fa-heart"></i></a></div>
            <a href="product-details.html"><img src="assets/img/product/feature-2-2.png" alt="Rosun" /></a>
          </div>
          <div className="mtfeature__product-content mb-15">
            <div className="mtfeature__product-cate mb-10"><span>1Kg</span><span>500Kg</span></div>
            <h5 className="mtfeature__product-title"><a href="product-details.html">Fresh packaged Red <br /> Tomato</a></h5>
          </div>
          <div className="mtfeature__product-rating mb-15">
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-light fa-star"></i>
            <i className="fa-light fa-star"></i>
          </div>
          <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
            <div className="mtfeature__product-price"><span>$29.00</span><del>$26.00</del></div>
            <div className="mtfeature__product-cart"><a href="cart.html"><i className="fa-solid fa-basket-shopping"></i></a></div>
          </div>
        </div>

        {/* Product 7 */}
        <div className="mtfeature__product-item p-relative fix">
          <div className="mtfeature__product-img mb-15">
            <div className="mtfeature__product-wishlist"><a href="wishlist.html"><i className="fa-regular fa-heart"></i></a></div>
            <a href="product-details.html"><img src="assets/img/product/feature-2-3.png" alt="Rosun" /></a>
          </div>
          <div className="mtfeature__product-content mb-15">
            <div className="mtfeature__product-cate mb-10"><span>1Kg</span><span>500Kg</span></div>
            <h5 className="mtfeature__product-title"><a href="product-details.html">local organic Green <br /> Broccoli</a></h5>
          </div>
          <div className="mtfeature__product-rating mb-15">
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-light fa-star"></i>
            <i className="fa-light fa-star"></i>
          </div>
          <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
            <div className="mtfeature__product-price"><span>$11.00</span><del>$15.00</del></div>
            <div className="mtfeature__product-cart"><a href="cart.html"><i className="fa-solid fa-basket-shopping"></i></a></div>
          </div>
        </div>

        {/* Product 8 */}
        <div className="mtfeature__product-item p-relative fix">
          <div className="mtfeature__product-img mb-15">
            <div className="mtfeature__product-wishlist"><a href="wishlist.html"><i className="fa-regular fa-heart"></i></a></div>
            <a href="product-details.html"><img src="assets/img/product/feature-2-8.png" alt="Rosun" /></a>
          </div>
          <div className="mtfeature__product-content mb-15">
            <div className="mtfeature__product-cate mb-10"><span>1Kg</span><span>500Kg</span></div>
            <h5 className="mtfeature__product-title"><a href="product-details.html">Organic Campa Yellow <br /> Bananas</a></h5>
          </div>
          <div className="mtfeature__product-rating mb-15">
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-light fa-star"></i>
            <i className="fa-light fa-star"></i>
          </div>
          <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
            <div className="mtfeature__product-price"><span>$9.00</span><del>$12.00</del></div>
            <div className="mtfeature__product-cart"><a href="cart.html"><i className="fa-solid fa-basket-shopping"></i></a></div>
          </div>
        </div>

        {/* Product 9 */}
        <div className="mtfeature__product-item p-relative fix">
          <div className="mtfeature__product-img mb-15">
            <div className="mtfeature__product-wishlist"><a href="wishlist.html"><i className="fa-regular fa-heart"></i></a></div>
            <a href="product-details.html"><img src="assets/img/product/feature-2-9.png" alt="Rosun" /></a>
          </div>
          <div className="mtfeature__product-content mb-15">
            <div className="mtfeature__product-cate mb-10"><span>1Kg</span><span>500Kg</span></div>
            <h5 className="mtfeature__product-title"><a href="product-details.html">Cauliflower - Each <br /> APPROX 1.5 Lb</a></h5>
          </div>
          <div className="mtfeature__product-rating mb-15">
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-light fa-star"></i>
            <i className="fa-light fa-star"></i>
          </div>
          <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
            <div className="mtfeature__product-price"><span>$19.00</span><del>$26.00</del></div>
            <div className="mtfeature__product-cart"><a href="cart.html"><i className="fa-solid fa-basket-shopping"></i></a></div>
          </div>
        </div>

        {/* Product 10 */}
        <div className="mtfeature__product-item p-relative fix">
          <div className="mtfeature__product-offer"><span>70% OFF</span></div>
          <div className="mtfeature__product-img mb-15">
            <div className="mtfeature__product-wishlist"><a href="wishlist.html"><i className="fa-regular fa-heart"></i></a></div>
            <a href="product-details.html"><img src="assets/img/product/feature-2-10.png" alt="Rosun" /></a>
          </div>
          <div className="mtfeature__product-content mb-15">
            <div className="mtfeature__product-cate mb-10"><span>1Kg</span><span>500Kg</span></div>
            <h5 className="mtfeature__product-title"><a href="product-details.html">Tropical Local Yellow <br /> Pineapple</a></h5>
          </div>
          <div className="mtfeature__product-rating mb-15">
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-light fa-star"></i>
            <i className="fa-light fa-star"></i>
          </div>
          <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
            <div className="mtfeature__product-price"><span>$15.00</span><del>$20.00</del></div>
            <div className="mtfeature__product-cart"><a href="cart.html"><i className="fa-solid fa-basket-shopping"></i></a></div>
          </div>
        </div>

      </div>
    </div>

     <div
      className="tab-pane fade"
      id="pills-contact1"
      role="tabpanel"
      aria-labelledby="pills-contact-tab1"
    >
      <div className="cols">

        {/* Product 1 */}
        <div className="mtfeature__product-item p-relative fix">
          <div className="mtfeature__product-img mb-15">
            <div className="mtfeature__product-wishlist">
              <a href="wishlist.html">
                <i className="fa-regular fa-heart"></i>
              </a>
            </div>
            <a href="product-details.html">
              <img src="assets/img/product/feature-2-1.png" alt="Rosun" />
            </a>
          </div>
          <div className="mtfeature__product-content mb-15">
            <div className="mtfeature__product-cate mb-10">
              <span>1Kg</span>
              <span>500Kg</span>
            </div>
            <h5 className="mtfeature__product-title">
              <a href="product-details.html">
                local organic Green <br /> Broccoli
              </a>
            </h5>
          </div>
          <div className="mtfeature__product-rating mb-15">
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-light fa-star"></i>
            <i className="fa-light fa-star"></i>
          </div>
          <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
            <div className="mtfeature__product-price">
              <span>$29.00</span>
              <del>$26.00</del>
            </div>
            <div className="mtfeature__product-cart">
              <a href="cart.html">
                <i className="fa-solid fa-basket-shopping"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="mtfeature__product-item p-relative fix">
          <div className="mtfeature__product-offer">
            <span>70% OFF</span>
          </div>
          <div className="mtfeature__product-img mb-15">
            <div className="mtfeature__product-wishlist">
              <a href="wishlist.html">
                <i className="fa-regular fa-heart"></i>
              </a>
            </div>
            <a href="product-details.html">
              <img src="assets/img/product/feature-2-2.png" alt="Rosun" />
            </a>
          </div>
          <div className="mtfeature__product-content mb-15">
            <div className="mtfeature__product-cate mb-10">
              <span>1Kg</span>
              <span>500Kg</span>
            </div>
            <h5 className="mtfeature__product-title">
              <a href="product-details.html">
                Fresh packaged Red <br /> Tomato
              </a>
            </h5>
          </div>
          <div className="mtfeature__product-rating mb-15">
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-light fa-star"></i>
            <i className="fa-light fa-star"></i>
          </div>
          <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
            <div className="mtfeature__product-price">
              <span>$29.00</span>
              <del>$26.00</del>
            </div>
            <div className="mtfeature__product-cart">
              <a href="cart.html">
                <i className="fa-solid fa-basket-shopping"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="mtfeature__product-item p-relative fix">
          <div className="mtfeature__product-img mb-15">
            <div className="mtfeature__product-wishlist">
              <a href="wishlist.html">
                <i className="fa-regular fa-heart"></i>
              </a>
            </div>
            <a href="product-details.html">
              <img src="assets/img/product/feature-2-3.png" alt="Rosun" />
            </a>
          </div>
          <div className="mtfeature__product-content mb-15">
            <div className="mtfeature__product-cate mb-10">
              <span>1Kg</span>
              <span>500Kg</span>
            </div>
            <h5 className="mtfeature__product-title">
              <a href="product-details.html">
                local organic Green <br /> Broccoli
              </a>
            </h5>
          </div>
          <div className="mtfeature__product-rating mb-15">
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-light fa-star"></i>
            <i className="fa-light fa-star"></i>
          </div>
          <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
            <div className="mtfeature__product-price">
              <span>$11.00</span>
              <del>$15.00</del>
            </div>
            <div className="mtfeature__product-cart">
              <a href="cart.html">
                <i className="fa-solid fa-basket-shopping"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Product 4 */}
        <div className="mtfeature__product-item p-relative fix">
          <div className="mtfeature__product-img mb-15">
            <div className="mtfeature__product-wishlist">
              <a href="wishlist.html">
                <i className="fa-regular fa-heart"></i>
              </a>
            </div>
            <a href="product-details.html">
              <img src="assets/img/product/feature-2-4.png" alt="Rosun" />
            </a>
          </div>
          <div className="mtfeature__product-content mb-15">
            <div className="mtfeature__product-cate mb-10">
              <span>1Kg</span>
              <span>500Kg</span>
            </div>
            <h5 className="mtfeature__product-title">
              <a href="product-details.html">
                White Pumpkin - Each <br /> (appr 1.5 LB-2 LB)
              </a>
            </h5>
          </div>
          <div className="mtfeature__product-rating mb-15">
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-light fa-star"></i>
            <i className="fa-light fa-star"></i>
          </div>
          <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
            <div className="mtfeature__product-price">
              <span>$15.00</span>
              <del>$22.00</del>
            </div>
            <div className="mtfeature__product-cart">
              <a href="cart.html">
                <i className="fa-solid fa-basket-shopping"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Product 5 */}
        <div className="mtfeature__product-item p-relative fix">
          <div className="mtfeature__product-offer">
            <span>70% OFF</span>
          </div>
          <div className="mtfeature__product-img mb-15">
            <div className="mtfeature__product-wishlist">
              <a href="wishlist.html">
                <i className="fa-regular fa-heart"></i>
              </a>
            </div>
            <a href="product-details.html">
              <img src="assets/img/product/feature-2-5.png" alt="Rosun" />
            </a>
          </div>
          <div className="mtfeature__product-content mb-15">
            <div className="mtfeature__product-cate mb-10">
              <span>1Kg</span>
              <span>500Kg</span>
            </div>
            <h5 className="mtfeature__product-title">
              <a href="product-details.html">
                Palak Green (Spinach) - <br /> Bunch Organic
              </a>
            </h5>
          </div>
          <div className="mtfeature__product-rating mb-15">
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-solid fa-star-sharp"></i>
            <i className="fa-light fa-star"></i>
            <i className="fa-light fa-star"></i>
          </div>
          <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
            <div className="mtfeature__product-price">
              <span>$17.00</span>
              <del>$26.00</del>
            </div>
            <div className="mtfeature__product-cart">
              <a href="cart.html">
                <i className="fa-solid fa-basket-shopping"></i>
              </a>
            </div>
          </div>
        </div>
{/* Product 6 */}
<div className="mtfeature__product-item p-relative fix">
  <div className="mtfeature__product-img mb-15">
    <div className="mtfeature__product-wishlist">
      <a href="wishlist.html">
        <i className="fa-regular fa-heart"></i>
      </a>
    </div>
    <a href="product-details.html">
      <img src="assets/img/product/feature-2-6.png" alt="Rosun" />
    </a>
  </div>
  <div className="mtfeature__product-content mb-15">
    <div className="mtfeature__product-cate mb-10">
      <span>1Kg</span>
      <span>500Kg</span>
    </div>
    <h5 className="mtfeature__product-title">
      <a href="product-details.html">
        Gerber Organic 2nd Foods <br /> Cucumber
      </a>
    </h5>
  </div>
  <div className="mtfeature__product-rating mb-15">
    <i className="fa-solid fa-star-sharp"></i>
    <i className="fa-solid fa-star-sharp"></i>
    <i className="fa-solid fa-star-sharp"></i>
    <i className="fa-light fa-star"></i>
    <i className="fa-light fa-star"></i>
  </div>
  <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
    <div className="mtfeature__product-price">
      <span>$15.00</span>
      <del>$22.00</del>
    </div>
    <div className="mtfeature__product-cart">
      <a href="cart.html">
        <i className="fa-solid fa-basket-shopping"></i>
      </a>
    </div>
  </div>
</div>

{/* Product 7 */}
<div className="mtfeature__product-item p-relative fix">
  <div className="mtfeature__product-img mb-15">
    <div className="mtfeature__product-wishlist">
      <a href="wishlist.html">
        <i className="fa-regular fa-heart"></i>
      </a>
    </div>
    <a href="product-details.html">
      <img src="assets/img/product/feature-2-7.png" alt="Rosun" />
    </a>
  </div>
  <div className="mtfeature__product-content mb-15">
    <div className="mtfeature__product-cate mb-10">
      <span>1Kg</span>
      <span>500Kg</span>
    </div>
    <h5 className="mtfeature__product-title">
      <a href="product-details.html">
        local organic Green <br /> Broccoli
      </a>
    </h5>
  </div>
  <div className="mtfeature__product-rating mb-15">
    <i className="fa-solid fa-star-sharp"></i>
    <i className="fa-solid fa-star-sharp"></i>
    <i className="fa-solid fa-star-sharp"></i>
    <i className="fa-light fa-star"></i>
    <i className="fa-light fa-star"></i>
  </div>
  <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
    <div className="mtfeature__product-price">
      <span>$13.00</span>
      <del>$19.00</del>
    </div>
    <div className="mtfeature__product-cart">
      <a href="cart.html">
        <i className="fa-solid fa-basket-shopping"></i>
      </a>
    </div>
  </div>
</div>

{/* Product 8 */}
<div className="mtfeature__product-item p-relative fix">
  <div className="mtfeature__product-img mb-15">
    <div className="mtfeature__product-wishlist">
      <a href="wishlist.html">
        <i className="fa-regular fa-heart"></i>
      </a>
    </div>
    <a href="product-details.html">
      <img src="assets/img/product/feature-2-8.png" alt="Rosun" />
    </a>
  </div>
  <div className="mtfeature__product-content mb-15">
    <div className="mtfeature__product-cate mb-10">
      <span>1Kg</span>
      <span>500Kg</span>
    </div>
    <h5 className="mtfeature__product-title">
      <a href="product-details.html">
        Organic Campa Yellow <br /> Bananas
      </a>
    </h5>
  </div>
  <div className="mtfeature__product-rating mb-15">
    <i className="fa-solid fa-star-sharp"></i>
    <i className="fa-solid fa-star-sharp"></i>
    <i className="fa-solid fa-star-sharp"></i>
    <i className="fa-light fa-star"></i>
    <i className="fa-light fa-star"></i>
  </div>
  <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
    <div className="mtfeature__product-price">
      <span>$9.00</span>
      <del>$12.00</del>
    </div>
    <div className="mtfeature__product-cart">
      <a href="cart.html">
        <i className="fa-solid fa-basket-shopping"></i>
      </a>
    </div>
  </div>
</div>

{/* Product 9 */}
<div className="mtfeature__product-item p-relative fix">
  <div className="mtfeature__product-img mb-15">
    <div className="mtfeature__product-wishlist">
      <a href="wishlist.html">
        <i className="fa-regular fa-heart"></i>
      </a>
    </div>
    <a href="product-details.html">
      <img src="assets/img/product/feature-2-9.png" alt="Rosun" />
    </a>
  </div>
  <div className="mtfeature__product-content mb-15">
    <div className="mtfeature__product-cate mb-10">
      <span>1Kg</span>
      <span>500Kg</span>
    </div>
    <h5 className="mtfeature__product-title">
      <a href="product-details.html">
        Cauliflower - Each <br /> APPROX 1.5 Lb
      </a>
    </h5>
  </div>
  <div className="mtfeature__product-rating mb-15">
    <i className="fa-solid fa-star-sharp"></i>
    <i className="fa-solid fa-star-sharp"></i>
    <i className="fa-solid fa-star-sharp"></i>
    <i className="fa-light fa-star"></i>
    <i className="fa-light fa-star"></i>
  </div>
  <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
    <div className="mtfeature__product-price">
      <span>$19.00</span>
      <del>$26.00</del>
    </div>
    <div className="mtfeature__product-cart">
      <a href="cart.html">
        <i className="fa-solid fa-basket-shopping"></i>
      </a>
    </div>
  </div>
</div>

{/* Product 10 */}
<div className="mtfeature__product-item p-relative fix">
  <div className="mtfeature__product-offer">
    <span>70% OFF</span>
  </div>
  <div className="mtfeature__product-img mb-15">
    <div className="mtfeature__product-wishlist">
      <a href="wishlist.html">
        <i className="fa-regular fa-heart"></i>
      </a>
    </div>
    <a href="product-details.html">
      <img src="assets/img/product/feature-2-10.png" alt="Rosun" />
    </a>
  </div>
  <div className="mtfeature__product-content mb-15">
    <div className="mtfeature__product-cate mb-10">
      <span>1Kg</span>
      <span>500Kg</span>
    </div>
    <h5 className="mtfeature__product-title">
      <a href="product-details.html">
        Tropical Local Yellow <br /> Pineapple
      </a>
    </h5>
  </div>
  <div className="mtfeature__product-rating mb-15">
    <i className="fa-solid fa-star-sharp"></i>
    <i className="fa-solid fa-star-sharp"></i>
    <i className="fa-solid fa-star-sharp"></i>
    <i className="fa-light fa-star"></i>
    <i className="fa-light fa-star"></i>
  </div>
  <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
    <div className="mtfeature__product-price">
      <span>$15.00</span>
      <del>$20.00</del>
    </div>
    <div className="mtfeature__product-cart">
      <a href="cart.html">
        <i className="fa-solid fa-basket-shopping"></i>
      </a>
    </div>
  </div>
</div>

        {/* ...Continue for products 6 to 10 in the same pattern... */}

      </div>
    </div>
    <div
  className="tab-pane fade"
  id="pills-contact2"
  role="tabpanel"
  aria-labelledby="pills-contact-tab2"
>
  <div className="cols">
    {/* Product 1 */}
    <div className="mtfeature__product-item p-relative fix">
      <div className="mtfeature__product-img mb-15">
        <div className="mtfeature__product-wishlist">
          <a href="wishlist.html">
            <i className="fa-regular fa-heart"></i>
          </a>
        </div>
        <a href="product-details.html">
          <img src="assets/img/product/feature-2-4.png" alt="Rosun" />
        </a>
      </div>
      <div className="mtfeature__product-content mb-15">
        <div className="mtfeature__product-cate mb-10">
          <span>1Kg</span>
          <span>500Kg</span>
        </div>
        <h5 className="mtfeature__product-title">
          <a href="product-details.html">
            White Pumpkin - Each <br /> (appr 1.5 LB-2 LB)
          </a>
        </h5>
      </div>
      <div className="mtfeature__product-rating mb-15">
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-light fa-star"></i>
        <i className="fa-light fa-star"></i>
      </div>
      <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
        <div className="mtfeature__product-price">
          <span>$15.00</span>
          <del>$22.00</del>
        </div>
        <div className="mtfeature__product-cart">
          <a href="cart.html">
            <i className="fa-solid fa-basket-shopping"></i>
          </a>
        </div>
      </div>
    </div>

    {/* Product 2 */}
    <div className="mtfeature__product-item p-relative fix">
      <div className="mtfeature__product-offer">
        <span>70% OFF</span>
      </div>
      <div className="mtfeature__product-img mb-15">
        <div className="mtfeature__product-wishlist">
          <a href="wishlist.html">
            <i className="fa-regular fa-heart"></i>
          </a>
        </div>
        <a href="product-details.html">
          <img src="assets/img/product/feature-2-5.png" alt="Rosun" />
        </a>
      </div>
      <div className="mtfeature__product-content mb-15">
        <div className="mtfeature__product-cate mb-10">
          <span>1Kg</span>
          <span>500Kg</span>
        </div>
        <h5 className="mtfeature__product-title">
          <a href="product-details.html">
            Palak Green (Spinach) - <br /> Bunch Organic
          </a>
        </h5>
      </div>
      <div className="mtfeature__product-rating mb-15">
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-light fa-star"></i>
        <i className="fa-light fa-star"></i>
      </div>
      <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
        <div className="mtfeature__product-price">
          <span>$17.00</span>
          <del>$26.00</del>
        </div>
        <div className="mtfeature__product-cart">
          <a href="cart.html">
            <i className="fa-solid fa-basket-shopping"></i>
          </a>
        </div>
      </div>
    </div>

    {/* Product 3 */}
    <div className="mtfeature__product-item p-relative fix">
      <div className="mtfeature__product-img mb-15">
        <div className="mtfeature__product-wishlist">
          <a href="wishlist.html">
            <i className="fa-regular fa-heart"></i>
          </a>
        </div>
        <a href="product-details.html">
          <img src="assets/img/product/feature-2-6.png" alt="Rosun" />
        </a>
      </div>
      <div className="mtfeature__product-content mb-15">
        <div className="mtfeature__product-cate mb-10">
          <span>1Kg</span>
          <span>500Kg</span>
        </div>
        <h5 className="mtfeature__product-title">
          <a href="product-details.html">
            Gerber Organic 2nd Foods <br /> Cucumber
          </a>
        </h5>
      </div>
      <div className="mtfeature__product-rating mb-15">
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-light fa-star"></i>
        <i className="fa-light fa-star"></i>
      </div>
      <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
        <div className="mtfeature__product-price">
          <span>$15.00</span>
          <del>$22.00</del>
        </div>
        <div className="mtfeature__product-cart">
          <a href="cart.html">
            <i className="fa-solid fa-basket-shopping"></i>
          </a>
        </div>
      </div>
    </div>

    {/* Product 4 */}
    <div className="mtfeature__product-item p-relative fix">
      <div className="mtfeature__product-img mb-15">
        <div className="mtfeature__product-wishlist">
          <a href="wishlist.html">
            <i className="fa-regular fa-heart"></i>
          </a>
        </div>
        <a href="product-details.html">
          <img src="assets/img/product/feature-2-7.png" alt="Rosun" />
        </a>
      </div>
      <div className="mtfeature__product-content mb-15">
        <div className="mtfeature__product-cate mb-10">
          <span>1Kg</span>
          <span>500Kg</span>
        </div>
        <h5 className="mtfeature__product-title">
          <a href="product-details.html">
            local organic Green <br /> Broccoli
          </a>
        </h5>
      </div>
      <div className="mtfeature__product-rating mb-15">
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-light fa-star"></i>
        <i className="fa-light fa-star"></i>
      </div>
      <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
        <div className="mtfeature__product-price">
          <span>$13.00</span>
          <del>$19.00</del>
        </div>
        <div className="mtfeature__product-cart">
          <a href="cart.html">
            <i className="fa-solid fa-basket-shopping"></i>
          </a>
        </div>
      </div>
    </div>

    {/* Product 5 */}
    <div className="mtfeature__product-item p-relative fix">
      <div className="mtfeature__product-img mb-15">
        <div className="mtfeature__product-wishlist">
          <a href="wishlist.html">
            <i className="fa-regular fa-heart"></i>
          </a>
        </div>
        <a href="product-details.html">
          <img src="assets/img/product/feature-2-8.png" alt="Rosun" />
        </a>
      </div>
      <div className="mtfeature__product-content mb-15">
        <div className="mtfeature__product-cate mb-10">
          <span>1Kg</span>
          <span>500Kg</span>
        </div>
        <h5 className="mtfeature__product-title">
          <a href="product-details.html">
            Organic Campa Yellow <br /> Bananas
          </a>
        </h5>
      </div>
      <div className="mtfeature__product-rating mb-15">
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-light fa-star"></i>
        <i className="fa-light fa-star"></i>
      </div>
      <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
        <div className="mtfeature__product-price">
          <span>$9.00</span>
          <del>$12.00</del>
        </div>
        <div className="mtfeature__product-cart">
          <a href="cart.html">
            <i className="fa-solid fa-basket-shopping"></i>
          </a>
        </div>
      </div>
    </div>

    {/* Product 6 */}
    <div className="mtfeature__product-item p-relative fix">
      <div className="mtfeature__product-img mb-15">
        <div className="mtfeature__product-wishlist">
          <a href="wishlist.html">
            <i className="fa-regular fa-heart"></i>
          </a>
        </div>
        <a href="product-details.html">
          <img src="assets/img/product/feature-2-9.png" alt="Rosun" />
        </a>
      </div>
      <div className="mtfeature__product-content mb-15">
        <div className="mtfeature__product-cate mb-10">
          <span>1Kg</span>
          <span>500Kg</span>
        </div>
        <h5 className="mtfeature__product-title">
          <a href="product-details.html">
            Cauliflower - Each <br /> APPROX 1.5 Lb
          </a>
        </h5>
      </div>
      <div className="mtfeature__product-rating mb-15">
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-light fa-star"></i>
        <i className="fa-light fa-star"></i>
      </div>
      <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
        <div className="mtfeature__product-price">
          <span>$19.00</span>
          <del>$26.00</del>
        </div>
        <div className="mtfeature__product-cart">
          <a href="cart.html">
            <i className="fa-solid fa-basket-shopping"></i>
          </a>
        </div>
      </div>
    </div>

    {/* Product 7 */}
    <div className="mtfeature__product-item p-relative fix">
      <div className="mtfeature__product-offer">
        <span>70% OFF</span>
      </div>
      <div className="mtfeature__product-img mb-15">
        <div className="mtfeature__product-wishlist">
          <a href="wishlist.html">
            <i className="fa-regular fa-heart"></i>
          </a>
        </div>
        <a href="product-details.html">
          <img src="assets/img/product/feature-2-10.png" alt="Rosun" />
        </a>
      </div>
      <div className="mtfeature__product-content mb-15">
        <div className="mtfeature__product-cate mb-10">
          <span>1Kg</span>
          <span>500Kg</span>
        </div>
        <h5 className="mtfeature__product-title">
          <a href="product-details.html">
            Tropical Local Yellow <br /> Pineapple
          </a>
        </h5>
      </div>
      <div className="mtfeature__product-rating mb-15">
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-light fa-star"></i>
        <i className="fa-light fa-star"></i>
      </div>
      <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
        <div className="mtfeature__product-price">
          <span>$15.00</span>
          <del>$20.00</del>
        </div>
        <div className="mtfeature__product-cart">
          <a href="cart.html">
            <i className="fa-solid fa-basket-shopping"></i>
          </a>
        </div>
      </div>
    </div>

    {/* Product 8 */}
    <div className="mtfeature__product-item p-relative fix">
      <div className="mtfeature__product-img mb-15">
        <div className="mtfeature__product-wishlist">
          <a href="wishlist.html">
            <i className="fa-regular fa-heart"></i>
          </a>
        </div>
        <a href="product-details.html">
          <img src="assets/img/product/feature-2-1.png" alt="Rosun" />
        </a>
      </div>
      <div className="mtfeature__product-content mb-15">
        <div className="mtfeature__product-cate mb-10">
          <span>1Kg</span>
          <span>500Kg</span>
        </div>
        <h5 className="mtfeature__product-title">
          <a href="product-details.html">
            local organic Green <br /> Broccoli
          </a>
        </h5>
      </div>
      <div className="mtfeature__product-rating mb-15">
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-light fa-star"></i>
        <i className="fa-light fa-star"></i>
      </div>
      <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
        <div className="mtfeature__product-price">
          <span>$29.00</span>
          <del>$26.00</del>
        </div>
        <div className="mtfeature__product-cart">
          <a href="cart.html">
            <i className="fa-solid fa-basket-shopping"></i>
          </a>
        </div>
      </div>
    </div>

    {/* Product 9 */}
    <div className="mtfeature__product-item p-relative fix">
      <div className="mtfeature__product-offer">
        <span>70% OFF</span>
      </div>
      <div className="mtfeature__product-img mb-15">
        <div className="mtfeature__product-wishlist">
          <a href="wishlist.html">
            <i className="fa-regular fa-heart"></i>
          </a>
        </div>
        <a href="product-details.html">
          <img src="assets/img/product/feature-2-2.png" alt="Rosun" />
        </a>
      </div>
      <div className="mtfeature__product-content mb-15">
        <div className="mtfeature__product-cate mb-10">
          <span>1Kg</span>
          <span>500Kg</span>
        </div>
        <h5 className="mtfeature__product-title">
          <a href="product-details.html">
            Fresh packaged Red <br /> Tomato
          </a>
        </h5>
      </div>
      <div className="mtfeature__product-rating mb-15">
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-light fa-star"></i>
        <i className="fa-light fa-star"></i>
      </div>
      <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
        <div className="mtfeature__product-price">
          <span>$29.00</span>
          <del>$26.00</del>
        </div>
        <div className="mtfeature__product-cart">
          <a href="cart.html">
            <i className="fa-solid fa-basket-shopping"></i>
          </a>
        </div>
      </div>
    </div>

    {/* Product 10 */}
    <div className="mtfeature__product-item p-relative fix">
      <div className="mtfeature__product-img mb-15">
        <div className="mtfeature__product-wishlist">
          <a href="wishlist.html">
            <i className="fa-regular fa-heart"></i>
          </a>
        </div>
        <a href="product-details.html">
          <img src="assets/img/product/feature-2-3.png" alt="Rosun" />
        </a>
      </div>
      <div className="mtfeature__product-content mb-15">
        <div className="mtfeature__product-cate mb-10">
          <span>1Kg</span>
          <span>500Kg</span>
        </div>
        <h5 className="mtfeature__product-title">
          <a href="product-details.html">
            local organic Green <br /> Broccoli
          </a>
        </h5>
      </div>
      <div className="mtfeature__product-rating mb-15">
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-light fa-star"></i>
        <i className="fa-light fa-star"></i>
      </div>
      <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
        <div className="mtfeature__product-price">
          <span>$11.00</span>
          <del>$15.00</del>
        </div>
        <div className="mtfeature__product-cart">
          <a href="cart.html">
            <i className="fa-solid fa-basket-shopping"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

  



      </div>
    </div>
    </div>
    </section>
<Slope></Slope>
  <Area></Area>  


   <section className="mtnewslatter__area mtnewslatter__space mb-120">
      <div className="container">
        <div
          className="mtnewslatter__mainwrapper p-relative fix br-20 wow img-custom-anim-left"
          style={{
            backgroundImage: "url('assets/img/newslatter/newslatter-bg-2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          data-wow-duration="1.5s"
          data-wow-delay="0.1s"
        >
          <div className="mtnewslatter__shape">
            <img src="assets/img/newslatter/star.png" alt="Star Shape" />
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="mtnewslatter__wrapper wow img-custom-anim-left"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                <div className="mtnewslatter__item">
                  <h3 className="mtnewslatter__title mb-10">
                    Subscribe{" "}
                    <span className="p-relative">
                      newsletter{" "}
                      <img
                        src="assets/img/newslatter/shape-text.png"
                        alt="Shape Text"
                      />
                    </span>{" "}
                    <br />
                    to get offers
                  </h3>
                  <p className="mb-35">
                    Enjoy early access to sales, new product launches, expert
                    advice, and special offers delivered straight to your inbox.
                  </p>

                  <form action="#">
                    <div className="mtnewslatter__subscribe p-relative">
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        required
                      />
                      <button type="submit" className="mt-btn">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
<Blank></Blank>
    </main>

     <footer className="mt-footer-area mt-footer-2 p-relative fix pt-80" style={{ backgroundColor: "#171A2B" }}>
      <div className="mt-footer-wraper p-relative">
        <div className="container">
          <div className="row">
            {/* Footer Logo & Social */}
            <div className="col-lg-3 col-md-4">
              <div className="mt-footer-widget footer-2-cols-1">
                <div className="mt-footer-logo mb-20">
                  <a href="a"><img src="assets/img/logo/white-logo.png" alt="Logo" /></a>
                </div>
                <div className="mt-footer-content">
                  <p className="mb-25">
                    Roshun is a online grocery shop. we are selling grocery products
                  </p>
                  <div className="mt-footer-social mb-30">
                    <a href="a"><i className="fa-brands fa-pinterest-p"></i></a>
                    <a href="b"><i className="fa-brands fa-instagram"></i></a>
                    <a href="c"><i className="fa-brands fa-facebook-f"></i></a>
                  </div>
                  <div className="mt-footer-app mb-20">
                    <h4 className="mt-footer-app-title">Download App</h4>
                    <div className="mt-footer-app-img mt-20">
                      <a href="d"><img src="assets/img/footer/goolge-play.png" alt="Rosun" /></a>
                      <a href="e"><img src="assets/img/footer/app-store.png" alt="Rosun" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="col-lg-9 col-md-8">
              <div className="mt-footer-wrapper mb-30">
                <div className="row">
                  {/* Company */}
                  <div className="col-xl-3 col-md-6 mb-50">
                    <div className="mt-footer-widget footer-2-cols-2">
                      <h2 className="mt-footer-title mb-50">Company</h2>
                      <div className="mt-footer-list">
                        <ul>
                          <li><a href="about.html">About Us</a></li>
                          <li><a href="contact.html">Contact Us</a></li>
                          <li><a href="f">Privacy Policy</a></li>
                          <li><a href="g">Terms & Condition</a></li>
                          <li><a href="h">Site Map</a></li>
                          <li><a href="i">Careers</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="col-xl-3 col-md-6 mb-50">
                    <div className="mt-footer-widget footer-2-cols-3">
                      <h2 className="mt-footer-title mb-50">Quick Links</h2>
                      <div className="mt-footer-list">
                        <ul>
                          <li><a href="about.html">About Company</a></li>
                          <li><a href="blog.html">Articles & Blogs</a></li>
                          <li><a href="shop.html">Flash Sales</a></li>
                          <li><a href="checkout.html">Checkout</a></li>
                          <li><a href="faq.html">FAQs Page</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Support */}
                  <div className="col-xl-3 col-md-6 mb-50">
                    <div className="mt-footer-widget footer-2-cols-4">
                      <h2 className="mt-footer-title mb-50">Support</h2>
                      <div className="mt-footer-list">
                        <ul>
                          <li><a href="login.html">My Account</a></li>
                          <li><a href="j">Payment Method</a></li>
                          <li><a href="k">License & Permit</a></li>
                          <li><a href="about.html">Our Partners</a></li>
                          <li><a href="contact.html">Support Center</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Category */}
                  <div className="col-xl-3 col-md-6 mb-50">
                    <div className="mt-footer-widget footer-2-cols-5">
                      <h2 className="mt-footer-title mb-50">Category</h2>
                      <div className="mt-footer-list">
                        <ul>
                          <li><a href="shop.html">Fresh Produce</a></li>
                          <li><a href="shop.html">Dairy & Eggs</a></li>
                          <li><a href="shop.html">Meat & Seafood</a></li>
                          <li><a href="shop.html">Beverages</a></li>
                          <li><a href="shop.html">Vegetables</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Middle Info */}
      <div className="mt-footer-midel mt-footer-midel-border pb-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="mt-footer-midel-item d-flex align-items-center mb-20">
                <div className="mt-footer-midel-icon mr-15">
                  <span><i className="fa-solid fa-location-dot"></i></span>
                </div>
                <div className="mt-footer-midel-content">
                  <a href="l">
                    Tri Opposite 123 Main Street, <br /> Anytown, California 90210 USA
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="mt-footer-midel-item d-flex align-items-center mb-20 justify-content-lg-center">
                <div className="mt-footer-midel-icon mr-15">
                  <span><i className="fa-light fa-envelope-open-text"></i></span>
                </div>
                <div className="mt-footer-midel-content">
                  <a href="mailto:info@example.com">info@example.com</a><br />
                  <a href="mailto:support@example.com">support@example.com</a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="mt-footer-midel-item d-flex align-items-center mb-20 justify-content-lg-center">
                <div className="mt-footer-midel-icon mr-15">
                  <span><i className="fa-regular fa-headset"></i></span>
                </div>
                <div className="mt-footer-midel-content">
                  <a href="tel:+991234567888">+99 123 4567 888</a><br />
                  <a href="tel:+001235555888">+00 123 5555 888</a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="mt-footer-midel-item d-flex align-items-center mb-20 justify-content-lg-center">
                <div className="mt-footer-midel-icon mr-15">
                  <span><i className="fa-light fa-clock"></i></span>
                </div>
                <div className="mt-footer-midel-content">
                  <a href="m">10:00 - 18:00 <br /> Monday - Saturday</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copy-right area */}
      <div className="mt-copyright-area mt-copyright-2 pt-20 pb-20">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="mt-copyright-left text-center text-md-start">
                <p>Copyright 2025 ©Rosun. All rights reserved.</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="mt-copyright-right text-center text-md-end">
                <img src="assets/img/footer/payment.png" alt="Payment Methods" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
    </div>
  )
}

export default Home2