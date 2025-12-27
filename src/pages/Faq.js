import React from 'react'
import Mongo from '../components/Mongo'
function Faq() {
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
                        <button href="#"  >Pages</button>
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
      data-background="assets/img/breadcurmb/breadcrumb-bg.jpg"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="mt-breadcrumb p-relative">
              <h1 className="mt-breadcrumb-title">
                General <span>FAQs</span>
              </h1>

              <div className="mt-breadcrumb-list">
                <span className="active">
                  <a href="/">Home</a>
                </span>
                <span className="dvir">-</span>
                <span>
                  <a href="/Faq">General FAQs</a>
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
              <img
                src="assets/img/breadcurmb/breadcrumb.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <Mongo></Mongo>
     <section className="mt-faq-page-area pt-120 pb-50">
      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-xl-6 col-lg-6">
            <div className="mt-faq-page mb-30">
              
              <div className="mt-section-content mb-30">
                <h3 className="mt-section-title">
                  About <span>Save Money</span>
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
              </div>

              <div className="accordion" id="accordionExample">

                <div className="mt-accordion-item mb-20">
                  <h2 className="accordion-header">
                    <button
                      className="mt-accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What are the best times to shop for deals?
                      <span><i className="far fa-arrow-down"></i></span>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="mt-accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="mt-accordion-body">
                      <p>
                        Explore a variety of recipes that are not only affordable
                        but also mouth-wateringly delicious. From breakfast to
                        dinner, snacks to desserts, we've got you covered with
                        recipes that maximize flavor while minimizing costs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-accordion-item mb-20">
                  <h2 className="mt-accordion-header">
                    <button
                      className="mt-accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How to save money without compromising quality?
                      <span><i className="far fa-arrow-down"></i></span>
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="mt-accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="mt-accordion-body">
                      <p>
                        Explore a variety of recipes that are not only affordable
                        but also mouth-wateringly delicious. From breakfast to
                        dinner, snacks to desserts, we've got you covered with
                        recipes that maximize flavor while minimizing costs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-accordion-item mb-20">
                  <h2 className="accordion-header">
                    <button
                      className="mt-accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How to make healthier choices?
                      <span><i className="far fa-arrow-down"></i></span>
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="mt-accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="mt-accordion-body">
                      <p>
                        Explore a variety of recipes that are not only affordable
                        but also mouth-wateringly delicious. From breakfast to
                        dinner, snacks to desserts, we've got you covered with
                        recipes that maximize flavor while minimizing costs.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div
              className="mt-faq-thumb br-40 ml-35 wow img-custom-anim-top"
              data-wow-duration="1.5s"
              data-wow-delay="0.1s"
            >
              <img src="assets/img/faq/thumb.jpg" alt="" />
            </div>
          </div>

        </div>
      </div>
    </section>
     <section className="mt-faq-page-area pt-40 pb-50">
      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-xl-6 col-lg-6">
            <div
              className="mt-faq-thumb br-40 mr-35 mb-30 text-lg-end wow img-custom-anim-top"
              data-wow-duration="1.5s"
              data-wow-delay="0.1s"
            >
              <img src="assets/img/faq/thumb-2.jpg" alt="" />
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="mt-faq-page mb-30">
              
              <div className="mt-section-content mb-30">
                <h3 className="mt-section-title">
                  Delivery <span>Information</span>
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
              </div>

              <div className="accordion" id="accordionExampleTwo">

                <div className="mt-accordion-item mb-20">
                  <h2 className="accordion-header">
                    <button
                      className="mt-accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2One"
                      aria-expanded="true"
                      aria-controls="collapse2One"
                    >
                      How does grocery store delivery work?
                      <span><i className="far fa-arrow-down"></i></span>
                    </button>
                  </h2>
                  <div
                    id="collapse2One"
                    className="mt-accordion-collapse collapse show"
                    data-bs-parent="#accordionExampleTwo"
                  >
                    <div className="mt-accordion-body">
                      <p>
                        Grocery store delivery services allow customers to order
                        groceries online or via a mobile app. After selecting the
                        items and completing the purchase, the store prepares the
                        order and a delivery driver brings the groceries to the
                        customer's specified address.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-accordion-item mb-20">
                  <h2 className="mt-accordion-header">
                    <button
                      className="mt-accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2Two"
                      aria-expanded="false"
                      aria-controls="collapse2Two"
                    >
                      Are there additional fees for delivery?
                      <span><i className="far fa-arrow-down"></i></span>
                    </button>
                  </h2>
                  <div
                    id="collapse2Two"
                    className="mt-accordion-collapse collapse"
                    data-bs-parent="#accordionExampleTwo"
                  >
                    <div className="mt-accordion-body">
                      <p>
                        Grocery store delivery services allow customers to order
                        groceries online or via a mobile app. After selecting the
                        items and completing the purchase, the store prepares the
                        order and a delivery driver brings the groceries to the
                        customer's specified address.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-accordion-item mb-20">
                  <h2 className="accordion-header">
                    <button
                      className="mt-accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2Three"
                      aria-expanded="false"
                      aria-controls="collapse2Three"
                    >
                      What if an item I ordered is out of stock?
                      <span><i className="far fa-arrow-down"></i></span>
                    </button>
                  </h2>
                  <div
                    id="collapse2Three"
                    className="mt-accordion-collapse collapse"
                    data-bs-parent="#accordionExampleTwo"
                  >
                    <div className="mt-accordion-body">
                      <p>
                        Grocery store delivery services allow customers to order
                        groceries online or via a mobile app. After selecting the
                        items and completing the purchase, the store prepares the
                        order and a delivery driver brings the groceries to the
                        customer's specified address.
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

     <section className="mt-fact-area pt-60 pb-120">
      <div className="container">
        <div className="mt-fact-wrapper">
          <div className="row align-items-center">
            
            <div className="col-lg-7">
              <div className="mt-fact-wrap mb-30">
                <h3 className="mt-fact-title mb-20">
                  Have Any More Questions?
                </h3>
                <p>
                  If you have any questions or concerns about our shipping <br />
                  policy, please don’t hesitate to contact our customer service <br />
                  team.
                </p>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="mt-fact-info">
                <div className="mt-fact-content">
                  <h4 className="mb-30">We are always happy to help</h4>
                  <a href="contact.html" className="mt-btn">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
     <section className="mtfeature__area mtfeature__bg pb-50 pt-60 fix">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-3 col-md-4">
            <div className="mtfeature__wrapper d-flex align-items-center">
              <div className="mtfeature__icon">
                <img src="assets/img/feature/feature-1-1.jpg" alt="" />
              </div>
              <div className="mtfeature__content">
                <h5 className="mtfeature__title">Free Shipping</h5>
                <p>
                  shipping on your order. No <br /> extra charges for delivery.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="mtfeature__wrapper d-flex align-items-center">
              <div className="mtfeature__icon">
                <img src="assets/img/feature/feature-1-2.jpg" alt="" />
              </div>
              <div className="mtfeature__content">
                <h5 className="mtfeature__title">Secure Payments</h5>
                <p>
                  our financial information is <br /> protected
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="mtfeature__wrapper d-flex align-items-center">
              <div className="mtfeature__icon">
                <img src="assets/img/feature/feature-1-3.jpg" alt="" />
              </div>
              <div className="mtfeature__content">
                <h5 className="mtfeature__title">24 Hour Support</h5>
                <p>
                  We're here to help whenever <br /> you need us.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="mtfeature__wrapper d-flex align-items-center">
              <div className="mtfeature__icon">
                <img src="assets/img/feature/feature-1-4.jpg" alt="" />
              </div>
              <div className="mtfeature__content">
                <h5 className="mtfeature__title">Best Prices & Offers</h5>
                <p>
                  Provides unbeatable deals <br /> on a wide range of products
                </p>
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

export default Faq