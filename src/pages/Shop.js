import React from 'react'
import BreadcrumbTitleSlider from '../components/BreadcrumbTitleSlider'
import { FaAngleDown } from "react-icons/fa";
import PriceFilter from '../components/PriceFilter';
import GoList from '../components/GoList';
import Eagle from '../components/Eagle';
function Shop() {
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
                      <li  className="has-dropdown">
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
                        <a  href='Cart'>
                        <i className="fa-solid fa-basket-shopping"></i></a>
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
      {/* Breadcrumb Area Start */}
      <section
        className="mt-breadcrumb-area mt-breadcrumb-space p-relative"
        data-background="assets/img/breadcurmb/breadcrumb-bg.jpg"
      >
        <div className="container">
          <div className="row align-items-center">
            
            <div className="col-lg-6">
              <div className="mt-breadcrumb p-relative">
                <h1 className="mt-breadcrumb-title">
                  Shop <span>Page</span>
                </h1>

                <div className="mt-breadcrumb-list">
                  <span className="active">
                    <a href="/">Home</a>
                  </span>
                  <span className="dvir">-</span>
                  <span>
                    <a href="/Shop">Shop Page</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="mt-breadcrumb-img text-end wow img-custom-anim-top"
                data-wow-duration="1.5s"
                data-wow-delay="0.1s"
              >
                <img
                  src="assets/img/breadcurmb/breadcrumb.png"
                  alt="Breadcrumb"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Breadcrumb Area End */}
      <BreadcrumbTitleSlider></BreadcrumbTitleSlider>
  <section className="mtshop__area pt-120 pb-120 p-relative">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <div className="mt-shop-sidebar mr-10">

              {/* Shop By Categories */}
              <div className="mt-shop-widget mb-50">
                <h3 className="mt-shop-widget-title mb-20">Shop By Categories</h3>
                <div className="mt-shop-widget-content">
                  <div className="mt-shop-widget-categories">
                    <ul>
                      {[
                        { img: "cat-menu-1-1.png", title: "Fresh Produce" },
                        { img: "cat-menu-1-2.png", title: "Dairy & Eggs" },
                        { img: "cat-menu-1-3.png", title: "Meat & Seafood" },
                        { img: "cat-menu-1-4.png", title: "Bakery & Bread" },
                        { img: "cat-menu-1-5.png", title: "Pantry Staples" },
                        { img: "cat-menu-1-6.png", title: "Frozen Foods" },
                        { img: "cat-menu-1-7.png", title: "Beverages" },
                      ].map((cat, index) => (
                        <li key={index}>
                          <a href="/shop">
                            <img
                              src={`assets/img/category/${cat.img}`}
                              alt={cat.title}
                            />
                            {cat.title}
                            <span>
                              <i className="fa-light fa-angle-right"></i>
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Filter by Price */}
          <PriceFilter></PriceFilter>

              {/* Shop By Brands */}
              <div className="mt-shop-widget mb-50">
                <h3 className="mt-shop-widget-title mb-20">Shop By Brands</h3>
                <div className="mt-shop-widget-content">
                  {[
                    { id: "ecoMart", name: "EcoMart", count: 125 },
                    { id: "vosonia", name: "Vosonia", count: 45 },
                    { id: "freshyUp", name: "FreshyUp", count: 40 },
                    { id: "closery", name: "Closery", count: 50 },
                  ].map((brand) => (
                    <div
                      className="form-check mt-shop-widget-brands-item mb-10"
                      key={brand.id}
                    >
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={brand.id}
                      />
                      <label className="form-check-label" htmlFor={brand.id}>
                        {brand.name} <span>- ({brand.count})</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shop By Rating */}
              <div className="mt-shop-widget mb-50">
                <h3 className="mt-shop-widget-title mb-20">Shop By Rating</h3>
                <div className="mt-shop-widget-content">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div
                      className="form-check mt-shop-widget-rating-item mb-10"
                      key={rating}
                    >
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`rating${rating}`}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`rating${rating}`}
                      >
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={
                              i < rating
                                ? "fa-sharp fa-solid fa-star"
                                : "fa-light fa-star"
                            }
                          ></i>
                        ))}
                        <span> {rating}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Product */}
              <div className="mt-shop-widget mb-50">
                <div className="mtfeature__product-item p-relative fix">
                  <div className="mtfeature__product-shape">
                    <img
                      src="assets/img/product/feature-shape-1.png"
                      alt=""
                    />
                  </div>

                  <div className="mtfeature__product-offer">
                    <span>70% OFF</span>
                  </div>

                  <div className="mtfeature__product-img mb-15">
                    <a href="/product-details">
                      <img
                        src="assets/img/product/feature-1-1.jpg"
                        alt="Rosun"
                      />
                    </a>
                  </div>

                  <div
                    className="mt-shop-widget-countdown mb-15"
                    data-date="Nov 19 2025 20:20:22"
                  >
                    <div className="countdown d-flex align-items-center justify-content-around">
                      {["DAYS", "Hours", "Mins", "Secs"].map((label, i) => (
                        <div className="mt-shop-widget-countdown-item" key={i}>
                          <span className="countdown-value">00</span>
                          <span className="countdown-label">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mtfeature__product-price mb-15">
                    <span>$29.00</span>
                    <del>$62.00</del>
                  </div>

                  <h5 className="mtfeature__product-title mb-15">
                    <a href="/product-details">
                      Seeds of Change Organic Watermelon
                    </a>
                  </h5>

                  <div className="mtfeature__product-rating mb-15">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className="fa-solid fa-star-sharp"
                      ></i>
                    ))}
                  </div>

                  <div className="mtfeature__product-btn">
                    <a href="/cart" className="mt-btn-3">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="col-xl-9 col-lg-8">
      <div className="mt-shop-wrapper">

        {/* Banner */}
        <div
          className="mt-shop-top mb-30 wow img-custom-anim-top"
          data-wow-duration="1.5s"
          data-wow-delay="0.1s"
        >
          <div className="mt-shop-top-filtar mb-20">
            <a className="active" href="a">
              <i className="fa-light fa-flask"></i> Filtered
            </a>
            <a href="b">
              <i className="fa-light fa-xmark"></i> Fruits &amp; Vegetables
            </a>
            <a href="c">
              <i className="fa-light fa-xmark"></i> RosMart
            </a>
          </div>

          <a href="d">
            <img
              src="assets/img/banner/shop-banner.jpg"
              alt="Shop Banner"
            />
          </a>
        </div>
        <div className="mt-shop-header mb-30">
      <h5 className="mt-shop-header-title">
        Showing 01-20 of 159 results
      </h5>

      <ul
        className="nav nav-pills"
        id="pills-tab"
        role="tablist"
      >
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
            <span>
              <i className="fa-light fa-grid-2"></i>
            </span>
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
            <span>
              <i className="fa-light fa-list-ul"></i>
            </span>
          </button>
        </li>
      </ul>

    <div className="mt__select-box">
      <span className="mt__select-box-title">Sort:</span>

      <div className="mt__select-wrapper">
        <select className="mt__select" defaultValue="default">
          <option value="default">Default Sorting</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
          <option value="new">New Added</option>
          <option value="sale">On Sale</option>
        </select>

        <span className="mt__select-arrow">
          <FaAngleDown />
        </span>
      </div>

      {/* Inline CSS for the component */}
      <style jsx>{`
        .mt__select-box {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: "Inter", "Poppins", sans-serif;
        }

        .mt__select-box-title {
          font-size: 15px;
          font-weight: 500;
          color: #222;
        }

        .mt__select-wrapper {
          position: relative;
        }

        .mt__select {
          border: none;
          outline: none;
          box-shadow: none;
          background: transparent;
          padding: 6px 28px 6px 0;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
        }

        .mt__select:focus {
          border: none;
          outline: none;
          box-shadow: none;
        }

        .mt__select-arrow {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          font-size: 12px;
          color: #555;
        }
      `}</style>
    </div>



      </div>
<div className="tab-content" id="pills-tabContent">
      <div
        className="tab-pane fade show active"
        id="pills-home"
        role="tabpanel"
        aria-labelledby="pills-home-tab"
      >
        <div className="mt-shop-grid-wrapper">
          <div className="row">
            {/* Example Product Item */}
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
              <div className="mt-shop-grid-item p-relative mb-40">
                <div className="mt-shop-grid-img mb-10">
                  <a href="product-details.html">
                    <img
                      src="assets/img/product/shop-1.jpg"
                      alt="Fresh packaged Red Tomato"
                    />
                  </a>
                </div>
                <div className="mt-shop-grid-content">
                  <div className="mtflash__product-content mb-15 d-flex align-items-center justify-content-between">
                    <div className="mtfeature__product-price">
                      <span>$11.00</span>
                      <del>$15.00</del>
                    </div>
                    <div className="mtflash__product-ratting">
                      <span className="mtflash__product-ricon">
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span className="mtflash__product-review-number">(4.5)</span>
                    </div>
                  </div>
                  <div className="mtfeature__product-content text-start mb-15">
                    <h5 className="mtfeature__product-title">
                      <a href="product-details.html">Fresh packaged Red Tomato</a>
                    </h5>
                  </div>
                  <div className="mtfeature__product-pricing-wrap d-flex align-items-center justify-content-between">
                    <div className="mtfeature__product-cate">
                      <span>1Kg</span>
                      <span>500Kg</span>
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

            {/* Repeat other product items here... */}
          </div>

          {/* Pagination */}
          <div className="mt-pagination-wrap d-flex align-items-center justify-content-between mt-20 flex-wrap">
            <div className="mt-pagination mb-20">
              <a href="a" className="button">
                <i className="fa-regular fa-chevron-left"></i> Prev
              </a>
              <a href="b">1</a>
              <a href="c">2</a>
              <a href="d">3</a>
              <a href="e">...</a>
              <a href="f" className="button">
                Next <i className="fa-regular fa-chevron-right"></i>
              </a>
            </div>

            <div className="mt-pagination-sort mb-20">
              <div className="ddd">
                <span>Show</span>
              </div>
              <select>
                <option>12</option>
                <option>16</option>
                <option>20</option>
                <option>25</option>
              </select>
            </div>
          </div>
        </div>
      </div>

    <GoList></GoList>
      <section className="mtnewslatter__area mtnewslatter__space mb-120">
      <div className="container">
        <div
          className="mtnewslatter__mainwrapper p-relative fix br-20 wow img-custom-anim-left"
          data-wow-duration="1.5s"
          data-wow-delay="0.1s"
          style={{
            backgroundImage: `url(assets/img/newslatter/newslatter-bg-2.jpg)`,
          }}
        >
          <div className="mtnewslatter__shape">
            <img src="assets/img/newslatter/star.png" alt="" />
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
                        alt=""
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
                        className="form-control"
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
    <Eagle></Eagle>
    </div>

    </div>
        </div>
      </div>
      </div>
    </section>

    </main>
     <footer className="mt-footer-area mt-footer-2 p-relative fix pt-80" style={{ backgroundColor: "#171A2B" }}>
      <div className="mt-footer-wraper p-relative">
        <div className="container">
          <div className="row">
            {/* Logo & Info */}
            <div className="col-lg-3 col-md-4">
              <div className="mt-footer-widget footer-2-cols-1">
                <div className="mt-footer-logo mb-20">
                  <a href="a"><img src="assets/img/logo/white-logo.png" alt="Rosun" /></a>
                </div>
                <div className="mt-footer-content">
                  <p className="mb-25">Roshun is an online grocery shop. We are selling grocery products.</p>
                  <div className="mt-footer-social mb-30">
                    <a href="b"><i className="fa-brands fa-pinterest-p"></i></a>
                    <a href="c"><i className="fa-brands fa-instagram"></i></a>
                    <a href="d"><i className="fa-brands fa-facebook-f"></i></a>
                  </div>
                  <div className="mt-footer-app mb-20">
                    <h4 className="mt-footer-app-title">Download App</h4>
                    <div className="mt-footer-app-img mt-20">
                      <a href="e"><img src="assets/img/footer/goolge-play.png" alt="Rosun" /></a>
                      <a href="f"><img src="assets/img/footer/app-store.png" alt="Rosun" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="col-lg-9 col-md-8">
              <div className="mt-footer-wrapper mb-30">
                <div className="row">
                  {[
                    {
                      title: "Company",
                      links: [
                        { name: "About Us", href: "about.html" },
                        { name: "Contact Us", href: "contact.html" },
                        { name: "Privacy Policy", href: "#" },
                        { name: "Terms & Condition", href: "#" },
                        { name: "Site Map", href: "#" },
                        { name: "Careers", href: "#" },
                      ],
                    },
                    {
                      title: "Quick Links",
                      links: [
                        { name: "About Company", href: "about.html" },
                        { name: "Articles & Blogs", href: "blog.html" },
                        { name: "Flash Sales", href: "shop.html" },
                        { name: "Checkout", href: "checkout.html" },
                        { name: "FAQs Page", href: "faq.html" },
                      ],
                    },
                    {
                      title: "Support",
                      links: [
                        { name: "My Account", href: "login.html" },
                        { name: "Payment Method", href: "#" },
                        { name: "License & Permit", href: "#" },
                        { name: "Our Partners", href: "about.html" },
                        { name: "Support Center", href: "contact.html" },
                      ],
                    },
                    {
                      title: "Category",
                      links: [
                        { name: "Fresh Produce", href: "shop.html" },
                        { name: "Dairy & Eggs", href: "shop.html" },
                        { name: "Meat & Seafood", href: "shop.html" },
                        { name: "Beverages", href: "shop.html" },
                        { name: "Vegetables", href: "shop.html" },
                      ],
                    },
                  ].map((section, idx) => (
                    <div className="col-xl-3 col-md-6 mb-50" key={idx}>
                      <div className={`mt-footer-widget footer-2-cols-${idx + 2}`}>
                        <h2 className="mt-footer-title mb-50">{section.title}</h2>
                        <div className="mt-footer-list">
                          <ul>
                            {section.links.map((link, i) => (
                              <li key={i}>
                                <a href={link.href}>{link.name}</a>
                              </li>
                            ))}
                          </ul>
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

      {/* Footer Mid Section */}
      <div className="mt-footer-midel mt-footer-midel-border pb-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="mt-footer-midel-item d-flex align-items-center mb-20">
                <div className="mt-footer-midel-icon mr-15">
                  <span><i className="fa-solid fa-location-dot"></i></span>
                </div>
                <div className="mt-footer-midel-content">
                  <a href="g">Tri Opposite 123 Main Street, <br /> Anytown, California 90210 USA</a>
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
                  <a href="h">10:00 - 18:00 <br /> Monday - Saturday</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-copyright-area mt-copyright-2 pt-20 pb-20">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="mt-copyright-left text-center text-md-start">
                <p>Copyright 2025 © Rosun. All rights reserved.</p>
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

export default Shop