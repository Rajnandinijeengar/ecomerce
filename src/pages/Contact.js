import React, { useState } from "react";
import axios from "axios";


function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contacts", form);
      alert("Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    }
  };

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
                        <button href="#"  >Pages</button>
                        <ul className="sub-menu mt-submenu">
                          <li><a href="/Aboutus">About</a></li>
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
        style={{ backgroundImage: "url('/assets/img/breadcurmb/breadcrumb-bg.jpg')" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="mt-breadcrumb p-relative">
                <h1 className="mt-breadcrumb-title">
                  Contact <span>Us</span>
                </h1>
                <div className="mt-breadcrumb-list">
                  <span className="active">
                    <button href="#">Home</button>
                  </span>
                  <span className="dvir">-</span>
                  <span>
                    <button href="#">Contact Us</button>
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
                <img src="/assets/img/breadcurmb/breadcrumb.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Area End */}

      {/* Brand Title Slider */}
      <section className="mtbreadcrumb__titleslide-area p-relative">
        <div className="swiper mt-brand-title-active">
          <div className="swiper-wrapper mt-slide-transtion">
            {[...Array(8)].map((_, idx) => (
              <div key={idx} className="swiper-slide mt-brand-slide-element">
                <div className="mtbreadcrumb__titleslide">
                  <h5 className="mtbreadcrumb__titleslide-title">
                    <span>
                      <i className="fa-solid fa-star-sharp"></i>
                    </span>{" "}
                    CONTACT US
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Page Area */}
      <section className="mt-contact-area pt-120 pb-60 p-relative fix">
        <div className="mt-contact-thumb wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.1s">
          <img src="/assets/img/contact/contact.png" alt="" />
        </div>
        <div className="container">
          <div className="row justify-content-xl-end">
            <div className="col-xl-8">
              <div
                className="mt-contact-wrapper p-relative"
                style={{ backgroundImage: "url('/assets/img/contact/contact-bg.png')" }}
              >
                <div className="mt-contact-border">
                  <div className="mt-section-content mb-50">
                    <h3 className="mt-section-title">
                      Get in <span>touch</span>
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
                      Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do <br />
                      eius mod tempor.
                    </p>
                  </div>
                  <div className="mt-contact-form">
                     <form onSubmit={handleSubmit}>
        <div className="row">

          <div className="col-md-6 mb-3">
            <label>Full Name <span>*</span></label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="form-control"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Email <span>*</span></label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="form-control"
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="col-md-12 mb-3">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="form-control"
              placeholder="Subject"
            />
          </div>

          <div className="col-md-12 mb-3">
            <label>Message <span>*</span></label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="form-control"
              rows="5"
              placeholder="Your message..."
              required
            ></textarea>
          </div>

          <div className="col-12">
            <button type="submit" className="btn " style={{backgroundColor:"#17AF26", color:"white"}}>
              Send Message
            </button>
          </div>

        </div>
      </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="mt-contact-area pt-60 pb-90">
        <div className="container">
          <div className="row text-center">
            {/* Location */}
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="mt-contact-info mb-30 d-flex align-items-center">
                <div className="mt-contact-info-icon mr-20">
                  <span><i className="fa-regular fa-location-dot"></i></span>
                </div>
                <div className="mt-contact-info-text">
                  <h4 className="mt-contact-info-title">Our Location</h4>
                  <p><button href="#">9070 Green Lake Drive Chevy Chase, MD 20815, USA</button></p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="mt-contact-info mb-30 d-flex align-items-center">
                <div className="mt-contact-info-icon mr-20">
                  <span><i className="fa-solid fa-phone"></i></span>
                </div>
                <div className="mt-contact-info-text">
                  <h4 className="mt-contact-info-title">Phone Number</h4>
                  <p><a href="tel:99001234567888">+99 (00) 123 4567 888</a></p>
                  <p><a href="tel:001235555888">+00 123 5555 888</a></p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="mt-contact-info mb-30 d-flex align-items-center">
                <div className="mt-contact-info-icon mr-20">
                  <span><i className="fa-solid fa-envelope"></i></span>
                </div>
                <div className="mt-contact-info-text">
                  <h4 className="mt-contact-info-title">Email Address</h4>
                  <p><a href="mailto:info@example.com">info@example.com</a></p>
                  <p><a href="mailto:support@example.com">support@example.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outlet Brand Slider */}
      <section className="mtbreadcrumb__titleslide-are p-relative" style={{ backgroundColor: "#FDD057" }}>
        <div className="swiper mt-brand-title-active">
          <div className="swiper-wrapper mt-slide-transtion">
            {[...Array(8)].map((_, idx) => (
              <div key={idx} className="swiper-slide mt-brand-slide-element">
                <div className="mtbreadcrumb__titleslide">
                  <h5 className="mtbreadcrumb__titleslide-title mtbreadcrumb__titleslide-title-2">
                    <span><i className="fa-solid fa-star-sharp"></i></span> VIEW OUR ALL OUTLET
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Map */}
      <div className="mt-map-area">
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.182370726!2d-0.10159865000000001!3d51.52864165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sbd!4v1745384213365!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Newsletter Section */}
      <section className="mtnewslatter__area mtnewslatter__space mt-120 mb-120">
        <div className="container">
          <div
            className="mtnewslatter__mainwrapper p-relative fix br-20 wow img-custom-anim-left"
            data-wow-duration="1.5s"
            data-wow-delay="0.1s"
            style={{ backgroundImage: "url('/assets/img/newslatter/newslatter-bg-2.jpg')" }}
          >
            <div className="mtnewslatter__shape">
              <img src="/assets/img/newslatter/star.png" alt="" />
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
                      Subscribe <span className="p-relative">newsletter <img src="/assets/img/newslatter/shape-text.png" alt="" /></span><br /> to get offers
                    </h3>
                    <p className="mb-35">
                      Enjoy early access to sales, new product launches, expert advice, and special offers delivered straight to your inbox.
                    </p>
                    <form action="#">
                      <div className="mtnewslatter__subscribe p-relative">
                        <input type="email" placeholder="Enter Your Email" />
                        <button type="submit" className="mt-btn">Subscribe</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Area */}
      <section className="mtfeature__area mtfeature__bg pb-50 pt-60 fix">
        <div className="container">
          <div className="row align-items-center">
            {[
              { img: "feature-1-1.jpg", title: "Free Shipping", desc: "shipping on your order. No extra charges for delivery." },
              { img: "feature-1-2.jpg", title: "Secure Payments", desc: "our financial information is protected" },
              { img: "feature-1-3.jpg", title: "24 Hour Support", desc: "We're here to help whenever you need us." },
              { img: "feature-1-4.jpg", title: "Best Prices & Offers", desc: "Provides unbeatable deals on a wide range of products" }
            ].map((feature, idx) => (
              <div key={idx} className="col-lg-3 col-md-4">
                <div className="mtfeature__wrapper d-flex align-items-center">
                  <div className="mtfeature__icon">
                    <img src={`/assets/img/feature/${feature.img}`} alt="" />
                  </div>
                  <div className="mtfeature__content">
                    <h5 className="mtfeature__title">{feature.title}</h5>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>

        <footer
      className="mt-footer-area mt-footer-2 p-relative fix pt-80"
      style={{ backgroundColor: "#171A2B" }}
    >
      <div className="mt-footer-wraper p-relative">
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-3 col-md-4">
              <div className="mt-footer-widget footer-2-cols-1">
                <div className="mt-footer-logo mb-20">
                  <button href="#">
                    <img src="/assets/img/logo/white-logo.png" alt="Rosun Logo" />
                  </button>
                </div>
                <div className="mt-footer-content">
                  <p className="mb-25">
                    Roshun is a online grocery shop. we are selling grocery products
                  </p>
                  <div className="mt-footer-social mb-30">
                    <button href="#"><i className="fa-brands fa-pinterest-p"></i></button>
                    <button href="#"><i className="fa-brands fa-instagram"></i></button>
                    <button href="#"><i className="fa-brands fa-facebook-f"></i></button>
                  </div>
                  <div className="mt-footer-app mb-20">
                    <h4 className="mt-footer-app-title">Download App</h4>
                    <div className="mt-footer-app-img mt-20">
                      <button href="#"><img src="/assets/img/footer/goolge-play.png" alt="Rosun" /></button>
                      <button href="#"><img src="/assets/img/footer/app-store.png" alt="Rosun" /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
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
                          <li><a href="ontact.html">Privacy Policy</a></li>
                          <li><a href="ontact.html">Terms & Condition</a></li>
                          <li><a href="ontact.html">Site Map</a></li>
                          <li><a href="ontact.html">Careers</a></li>
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
                          <li><a href="login.html">Payment Method</a></li>
                          <li><a href="login.html">License & Permit</a></li>
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

      {/* Footer Middle Section */}
      <div className="mt-footer-midel mt-footer-midel-border pb-30">
        <div className="container">
          <div className="row">
            {/* Address */}
            <div className="col-lg-3 col-md-6">
              <div className="mt-footer-midel-item d-flex align-items-center mb-20">
                <div className="mt-footer-midel-icon mr-15">
                  <span><i className="fa-solid fa-location-dot"></i></span>
                </div>
                <div className="mt-footer-midel-content">
                  <a href="login.html">
                    Tri Opposite 123 Main Street, <br /> Anytown, California 90210 USA
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="col-lg-3 col-md-6">
              <div className="mt-footer-midel-item d-flex align-items-center mb-20 justify-content-lg-center">
                <div className="mt-footer-midel-icon mr-15">
                  <span><i className="fa-light fa-envelope-open-text"></i></span>
                </div>
                <div className="mt-footer-midel-content">
                  <a href="mailto:info@example.com">info@example.com</a> <br />
                  <a href="mailto:support@example.com">support@example.com</a>
                </div>
              </div>
            </div>

            {/* Phone */}
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

            {/* Hours */}
            <div className="col-lg-3 col-md-6">
              <div className="mt-footer-midel-item d-flex align-items-center mb-20 justify-content-lg-center">
                <div className="mt-footer-midel-icon mr-15">
                  <span><i className="fa-light fa-clock"></i></span>
                </div>
                <div className="mt-footer-midel-content">
                  <a href="login.html">
                    10:00 - 18:00 <br /> Monday - Saturday
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
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
                <img src="/assets/img/footer/payment.png" alt="Payment Methods" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>

  
  )
}

export default Contact