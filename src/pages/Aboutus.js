import React from 'react'
import Leader from '../components/Leader'
import Clone from '../components/Clone'
import Door from '../components/Door'
import Ntbreadcrumb from '../components/Ntbreadcrumb'



function Aboutus() {
  
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
      <section
        className="mt-breadcrumb-area mt-breadcrumb-space p-relative"
        style={{ backgroundImage: "url('assets/img/breadcurmb/breadcrumb-bg.jpg')" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="mt-breadcrumb p-relative">
                <h1 className="mt-breadcrumb-title">
                  About <span>US</span>
                </h1>
                <div className="mt-breadcrumb-list">
                  <span className="active">
                    <a href="/">Home</a>
                  </span>
                  <span className="dvir">-</span>
                  <span>
                    <a href="/Aboutus">About us</a>
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
                <img src="assets/img/breadcurmb/breadcrumb.png" alt="Breadcrumb" />
              </div>
            </div>
          </div>
        </div>
      </section>
 <Ntbreadcrumb></Ntbreadcrumb>
 <section className="mtabout__area p-relative pt-190 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="mtabout__thumb p-relative mb-40 wow img-custom-anim-top"
              data-wow-duration="1.5s"
              data-wow-delay="0.1s"
            >
              <img src="assets/img/about/about.png" alt="About" />
              <div className="mtabout__thumb-sm">
                <img src="assets/img/about/sticker.png" alt="Sticker" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mt-section-content mb-40">
              <h3 className="mt-section-title mb-25">
                Welcome to Roshun, your <br />
                trusted <span>grocery store!</span>
              </h3>
              <p>
                Founded in 1995, FreshMart has been dedicated to providing the
                freshest and highest-quality products to our community. Our
                mission is to bring you a wide selection of groceries, from
                farm-fresh produce.
              </p>
              <p>
                We strive to offer products that are not only good for you but
                also good for the environment. Our friendly staff is always here
                to help, ensuring a pleasant and convenient shopping experience
                for every customer.
              </p>
            </div>
            <div className="mtabout__wrapper">
              <div className="mtabout__list">
                <ul>
                  <li>
                    <i className="fa-solid fa-circle-check"></i> Fresh Quality:
                    Premium, fresh products for your family.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i> Eco-Friendly:
                    Sustainable and local sourcing.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i> Wide Range:
                    Diverse selection for all needs.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i> Top Service:
                    Friendly, helpful staff.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
<section className="mtcounter__area mtcounter__bg mb-75 p-relative">
      <div className="container">
        <div className="row">
          {/* Counter 1 */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="mtcounter__item mtcounter__space mtcounter__border">
              <h3 className="mtcounter__number">
                <span className="purecounter" data-purecounter-duration="1" data-purecounter-end="200">
                  0
                </span>
                +
              </h3>
              <div className="mtcounter__box d-flex align-items-center">
                <div className="mtcounter__icon mr-10">
                  <span>
                    <i className="fa-light fa-users"></i>
                  </span>
                </div>
                <div className="mtcounter__content">
                  <p>
                    Happy <br /> Customer
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Counter 2 */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="mtcounter__item mtcounter__space mtcounter__border">
              <h3 className="mtcounter__number">
                <span className="purecounter" data-purecounter-duration="1" data-purecounter-end="103">
                  0
                </span>
                M
              </h3>
              <div className="mtcounter__box d-flex align-items-center">
                <div className="mtcounter__icon mr-10">
                  <span>
                    <i className="fa-light fa-tomato"></i>
                  </span>
                </div>
                <div className="mtcounter__content">
                  <p>
                    Fresh <br /> Products
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Counter 3 */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="mtcounter__item mtcounter__space mtcounter__border">
              <h3 className="mtcounter__number">
                <span className="purecounter" data-purecounter-duration="1" data-purecounter-end="80">
                  0
                </span>
                K+
              </h3>
              <div className="mtcounter__box d-flex align-items-center">
                <div className="mtcounter__icon mr-10">
                  <span>
                    <i className="fa-light fa-face-smile"></i>
                  </span>
                </div>
                <div className="mtcounter__content">
                  <p>
                    Client <br /> REVIEW
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Counter 4 */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="mtcounter__item mtcounter__space">
              <h3 className="mtcounter__number">
                <span className="purecounter" data-purecounter-duration="1" data-purecounter-end="32">
                  0
                </span>
                +
              </h3>
              <div className="mtcounter__box d-flex align-items-center">
                <div className="mtcounter__icon mr-10">
                  <span>
                    <i className="fa-light fa-award"></i>
                  </span>
                </div>
                <div className="mtcounter__content">
                  <p>
                    Award <br /> Achievement
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  <section className="mtchoose__area pt-140 pb-140 p-relative">
      <div className="container">
        <div className="mtchoose__thumb-box p-relative">
          <div className="mtchoose__thumb br-20">
            <img src="assets/img/choose/choose.jpg" alt="Choose Us" />
          </div>
        </div>

        <div className="row justify-content-end align-items-center">
          <div className="col-lg-7">
            <div className="mtchoose__wrapper mtchoose__bg p-relative fix">
              <div className="mtchoose__top">
                <span>100% RETURN </span>
              </div>

              <div className="mt-section-content mb-60">
                <h3 className="mt-section-title">
                  Why <span>Choose Us</span>
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
                <p>
                  We care about the environment and choose products that <br /> support sustainability.
                </p>
              </div>

              <div className="row">
                {/* Item 1 */}
                <div className="col-md-6 col-sm-6">
                  <div className="mtchoose__item mb-40">
                    <div className="mtchoose__icon mb-20">
                      <img src="assets/img/choose/organic1.svg" alt="Top Quality Products" />
                    </div>
                    <div className="mtchoose__content">
                      <h3 className="mtchoose__title mb-10">Top-Quality Products</h3>
                      <p>
                        We offer the best, freshest products to ensure you get high-quality items every time you shop with us.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="col-md-6 col-sm-6">
                  <div className="mtchoose__item mb-40">
                    <div className="mtchoose__icon mb-20">
                      <img src="assets/img/choose/organic2.svg" alt="Eco-Friendly Choices" />
                    </div>
                    <div className="mtchoose__content">
                      <h3 className="mtchoose__title mb-10">Eco-Friendly Choices</h3>
                      <p>
                        We offer the best, freshest products to ensure you get high-quality items every time you shop with us.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="col-md-6 col-sm-6">
                  <div className="mtchoose__item mb-40">
                    <div className="mtchoose__icon mb-20">
                      <img src="assets/img/choose/organic3.svg" alt="Great Customer Help" />
                    </div>
                    <div className="mtchoose__content">
                      <h3 className="mtchoose__title mb-10">Great Customer Help</h3>
                      <p>
                        We offer the best, freshest products to ensure you get high-quality items every time you shop with us.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="col-md-6 col-sm-6">
                  <div className="mtchoose__item mb-40">
                    <div className="mtchoose__icon mb-20">
                      <img src="assets/img/choose/organic4.svg" alt="Easy Shopping Options" />
                    </div>
                    <div className="mtchoose__content">
                      <h3 className="mtchoose__title mb-10">Easy Shopping Options</h3>
                      <p>
                        We offer the best, freshest products to ensure you get high-quality items every time you shop with us.
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
    <Leader></Leader>

<Clone></Clone>

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

export default Aboutus