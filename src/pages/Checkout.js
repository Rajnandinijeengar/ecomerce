import React, { useState, useEffect } from "react";
import axios from "axios";
import Door from "../components/Door";
import Known from "../components/Known";

const Checkout = () => {
  // Cart items state
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const shipping = 50; // fixed shipping cost
  const totalAmount = subtotal + shipping;

  // Customer form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    zip: "",
    city: "",
    street: "",
    apartment: "",
    county: "",
    notes: "",
  });

  // Fetch cart items from backend
  const fetchCart = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/cart");
      const items = res.data.map((item) => ({
        ...item,
        qty: Number(item.qty) || 1,
        price: Number(item.price),
      }));
      setCartItems(items);

      // Calculate subtotal
      const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
      setSubtotal(total);
    } catch (err) {
      console.error("Failed to fetch cart", err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Update item quantity


  // Remove item from cart


  // Place order
  const confirmOrder = async () => {
    if (cartItems.length === 0) {
      alert("Cart is empty!");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/orders", {
        customer: formData,
        products: cartItems,
        totalAmount,
      });
      alert("Order Placed Successfully!");
      setCartItems([]);
      localStorage.removeItem("cart");
    } catch (err) {
      console.error(err);
      alert("Failed to place order!");
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
          <div className="col-lg-7">
            <div className="mt-breadcrumb p-relative">
              <h1 className="mt-breadcrumb-title">
                Checkout <span>Page</span>
              </h1>
              <div className="mt-breadcrumb-list">
                <span className="active">
                  <a href="/">Home</a>
                </span>
                <span className="dvir">-</span>
                <span>
                  <a href="/Checkout">Checkout Page</a>
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
              <img src="assets/img/breadcurmb/breadcrumb.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
<Known></Known>
 <section className="mt-checkout-area pb-140 pt-140">
      <div className="container">
        <div className="row">

          {/* LEFT SIDE FORM */}
          <div className="col-lg-6">
            <div className="mt-checkout-bill-area">

              {/* CONTACT INFO */}
              <div className="mt-section-content mb-30">
                <h3 className="mt-section-title">
                  Contact <span>Information</span>
                </h3>
              </div>

              <div className="mt-checkout-bill-form">
                <div className="mt-checkout-bill-inner">
                  <div className="row">

                    <div className="col-md-6">
                      <div className="mt-checkout-input">
                        <label>First Name <span>*</span></label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mt-checkout-input">
                        <label>Last Name <span>*</span></label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="mt-checkout-input">
                        <label>Company name (optional)</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mt-checkout-input">
                        <label>Email address <span>*</span></label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mt-checkout-input">
                        <label>Phone Number <span>*</span></label>
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* BILLING ADDRESS */}
              <div className="mt-section-content mt-20 mb-30">
                <h3 className="mt-section-title">
                  Billing <span>Address</span>
                </h3>
              </div>

              <div className="mt-checkout-bill-form">
                <div className="mt-checkout-bill-inner">
                  <div className="row">

                    <div className="col-md-12">
                      <div className="mt-checkout-input">
                        <label>Country / Region</label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mt-checkout-input">
                        <label>Postcode / ZIP</label>
                        <input
                          type="text"
                          name="zip"
                          value={formData.zip}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mt-checkout-input">
                        <label>Town / City</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="mt-checkout-input">
                        <label>Street address</label>
                        <input
                          type="text"
                          name="street"
                          value={formData.street}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="mt-checkout-input">
                        <input
                          type="text"
                          name="apartment"
                          value={formData.apartment}
                          onChange={handleChange}
                          placeholder="Apartment, suite, unit, etc."
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="mt-checkout-input">
                        <label>County</label>
                        <input
                          type="text"
                          name="county"
                          value={formData.county}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="mt-checkout-input">
                        <label>Order Notes</label>
                        <textarea
                          name="notes"
                          value={formData.notes}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE CART */}
          <div className="col-lg-5 offset-1">
  <div className="mt-checkout-place">
    <h3 className="mt-checkout-place-title mb-20">
      Order Summary{" "}
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
          ></path>
        </svg>
      </span>
    </h3>

    <div className="mt-order-info-list mb-20">
      <ul>
        {cartItems.length === 0 ? (
          <li>Your cart is empty</li>
        ) : (
          cartItems.map((item) => (
            <li className="mt-order-info-list-desc" key={item._id}>
              <div className="d-flex align-items-center">
                <div className="mt-order-info-list-img">
                  <img
                    src={`http://localhost:5000${item.image}`}
                    alt={item.name}
                  />
                </div>
                <div className="mt-order-info-list-content">
                  <h4 className="mt-order-info-list-title">{item.name}</h4>
                  <span>{item.weight || "1KG"}</span>
                  <p>Quantity ({item.qty})</p>
                </div>
              </div>
              <div className="mt-order-info-list-price">
                <span>₹{item.price * item.qty}</span>
              </div>
            </li>
          ))
        )}
        {/* Subtotal */}
        <li className="mt-order-info-list-subtotal">
          <span>Subtotal</span>
          <span className="price">
            ₹
            {cartItems.reduce(
              (sum, item) => sum + item.price * item.qty,
              0
            )}
          </span>
        </li>
        {/* Shipping */}
        <li className="mt-order-info-list-shipping">
          <span>Shipping</span>
          <span className="price">₹{shipping || 0}</span>
        </li>
      </ul>
    </div>

    {/* Payment Methods */}
    <div className="mt-checkout-payment">
      <h4 className="mt-checkout-payment-title mb-15">Payment Method</h4>

      <div className="mt-checkout-payment-item">
        <input type="radio" id="back_transfer" name="payment" />
        <label htmlFor="back_transfer">Direct Bank Transfer</label>
        <div className="mt-checkout-payment-desc direct-bank-transfer">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aliquam rem officia, corrupti reiciendis minima nisi modi.
          </p>
        </div>
      </div>

      <div className="mt-checkout-payment-item">
        <input type="radio" id="cheque_payment" name="payment" />
        <label htmlFor="cheque_payment">Payment With Mastercard</label>
        <div className="mt-checkout-payment-desc cheque-payment">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aliquam rem officia, corrupti reiciendis minima nisi modi.
          </p>
        </div>
      </div>

      <div className="mt-checkout-payment-item">
        <input type="radio" id="cod" name="payment" />
        <label htmlFor="cod">Cash on Delivery</label>
        <div className="mt-checkout-payment-desc cash-on-delivery">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aliquam rem officia, corrupti reiciendis minima nisi modi.
          </p>
        </div>
      </div>
    </div>

    {/* Confirm Order Button */}
    <div className="mt-checkout-btn-wrapper">
      <button className="mt-btn" onClick={confirmOrder}>
        <span>Confirm Order</span>
      </button>
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

export default Checkout