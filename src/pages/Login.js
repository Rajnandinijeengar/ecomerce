import React, { useState } from "react";
import axios from "axios";
import Door from "../components/Door";
import Graphic from "../components/Graphic";

function Login() {
  const [username, setUsername] = useState(""); // you called it username
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call backend login endpoint
      const res = await axios.post("http://localhost:5000/api/login", {
        email: username, // map username to email in backend
        password,
      });

      // Success message
      alert(res.data.message);
      setUsername("");
      setPassword("");
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };



  
  return (
    <div>
      {/* Scroll to top */}
<button id="back-to-top">
  <i className="far fa-arrow-up"></i>
</button>



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
      <span><a href="aa">Avenue de Roma 158b, Lisboa</a></span>
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
    <section
      className="mt-breadcrumb-area mt-breadcrumb-space p-relative"
      style={{ backgroundImage: "url('assets/img/breadcurmb/breadcrumb-bg.jpg')" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="mt-breadcrumb p-relative">
              <h1 className="mt-breadcrumb-title">
                Login <span>Account</span>
              </h1>
              <div className="mt-breadcrumb-list">
                <span className="active">
                  <a href="/">Home</a>
                </span>
                <span className="dvir">-</span>
                <span>
                  <a href="/Login">Login Account</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div
              className="mt-breadcrumb-img text-end wow img-custom-anim-top"
              data-wow-duration="1.5s"
              data-wow-delay="0.1s"
            >
              <img src="assets/img/breadcurmb/breadcrumb.png" alt="Breadcrumb" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <Graphic></Graphic>
  <section className="mt-login-area pt-120 pb-140 p-relative z-index-1 fix">
          <div className="container">
            <div
              className="mt-login-wrapper"
              style={{ backgroundImage: "url('assets/img/contact/login-bg.jpg')" }}
            >
              <div className="row align-items-center">
                {/* Login Form */}
                <div className="col-xl-6 col-lg-6">
      <div className="mt-login-wrap mr-30">
        <div className="mt-login-top text-center mb-40">
          <h3 className="mt-login-title">Login</h3>
          <span>Please login to your account</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mt-login-input-wrapper mb-20">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mt-login-input-wrapper mb-20">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

          <button type="submit" className="mt-btn-2 w-100">
            Login
          </button>
        </form>

        <div className="mt-login-account text-center mb-30">
          <p>
            Don't have an account? <a href="/register"> Register</a>
          </p>
        </div>
      </div>
    </div>
                {/* Login Image */}
                <div className="col-xl-6 col-lg-6">
                  <div className="mt-login-thumb br-40 text-center text-lg-end">
                    <img
                      src="assets/img/contact/login-thumb.jpg"
                      alt="Login Thumb"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


     <section className="mtnewslatter__area mtnewslatter__space mt-120 mb-120">
      <div className="container">
        <div
          className="mtnewslatter__mainwrapper p-relative fix br-20 wow img-custom-anim-left"
          data-wow-duration="1.5s"
          data-wow-delay="0.1s"
          style={{ backgroundImage: "url('assets/img/newslatter/newslatter-bg-2.jpg')" }}
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
                      <img src="assets/img/newslatter/shape-text.png" alt="Shape Text" />
                    </span>{" "}
                    <br />
                    to get offers
                  </h3>
                  <p className="mb-35">
                    Enjoy early access to sales, new product launches, expert advice, and special offers
                    delivered straight to your inbox.
                  </p>
                  <form>
                    <div className="mtnewslatter__subscribe p-relative">
                      <input type="email" placeholder="Enter Your Email" />
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
    <Door></Door>

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

export default Login