import React, { useEffect, useState } from "react";
import axios from "axios";




import { useParams } from "react-router-dom";
import Iconic from '../components/Iconic'
import RelatedProducts from '../components/RelatedProducts'
import Eagle from '../components/Eagle'

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);

  useEffect(function () {
    axios
      .get("http://localhost:5000/api/products/" + id)
      .then(function (res) {
        setProduct(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, [id]);

  function increaseQty() {
    setQty(qty + 1);
  }

  function decreaseQty() {
    if (qty > 1) setQty(qty - 1);
  }

  async function addToCart() {
    try {
      await axios.post("http://localhost:5000/api/cart", {
        productId: product._id,
        name: product.title,
        price: product.price,
        image: product.img,
        qty: qty,
      });
      alert("Added to cart 🛒");
    } catch (err) {
      console.log(err);
    }
  }

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }


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
                      <img src="http://localhost:3000/assets/img/logo/black-logo.png" alt="Rosun" />
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
                        <button href="#">Blog</button>
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
      style={{
        backgroundImage: `url("assets/img/breadcurmb/breadcrumb-bg.jpg")`,
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="mt-breadcrumb p-relative">
              <h1 className="mt-breadcrumb-title">
                Products <span>Details</span>
              </h1>
              <div className="mt-breadcrumb-list">
                <span className="active">
                  <a href="/">Home</a>
                </span>
                <span className="dvir">-</span>
                <span>
                  <a href="/ProductDetails">Products Details</a>
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
                src="http://localhost:3000/assets/img/breadcurmb/breadcrumb.png"
                alt="Breadcrumb"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
<Iconic></Iconic>
    <div className="mt-product-details-area pt-130 fix">
      <div className="container">
        <div className="row">
 <div className="col-xl-2 col-lg-2"></div> 
          {/* LEFT – IMAGES */}
       <div className="col-xl-4 col-lg-4" style={{ width: "30%" }}>
  <div className="mt-shop-details__wrapper mb-30">
    <div className="mt-shop-details__tab-big-img">
      <img
        src={product.img ? "http://localhost:5000" + product.img : "https://via.placeholder.com/400"}
        alt={product.title}
        style={{ height: "300px", objectFit: "contain", width: "100%" }}
      />
    </div>
  </div>
</div>

         

          {/* RIGHT – DETAILS */}
          <div className="col-xl-4 col-lg-4">
            <div className="mt-shop-details__right-warp mb-30 p-relative">

              {product.offer && (
                <div className="mt-shop-details__offer mb-15">
                  <span className="red-color">{product.offer}</span>
                </div>
              )}

            <h3
  className="mt-shop-details__title-sm mb-15"
  style={{ color: "#17AF26"}}
>  {product.title}
</h3>

              <div className="mt-shop-details__text mb-17">
                <p>{product.description}</p>
              </div>

              {/* RATING */}
              <div className="mt-shop-details__ratting mb-10">
                {[...Array(5)].map(function (_, i) {
                  return (
                    <i
                      key={i}
                      className={
                        i < (product.rating || 0)
                          ? "fa-solid fa-star-sharp"
                          : "fa-regular fa-star-sharp"
                      }style={{color:"#FDD057"}}
                    ></i>
                  );
                })}
              </div>

              {/* PRICE */}
              <div className="mt-shop-details__price mb-17">
                {product.oldPrice && <del>₹{product.oldPrice}</del>}
                <span> ₹{product.price}</span>
              </div>

              {/* WEIGHT */}
              <div className="mt-shop-details__product-info-2 mb-25">
                <ul>
                  <li>
                    Weight:
                    <span>{product.weight}</span>
                  </li>
                </ul>
              </div>

              {/* QUANTITY + CART */}
              <div className="mt-shop-details__quantity-wrap mb-40 d-flex align-items-center">
              <div className="mt-shop-details__quantity-box">
     <div className="mt-shop-details__quantity d-flex align-items-center">
  {/* Decrease Quantity */}
  <button
    type="button"
    className="mt-cart-minus btn btn-outline-secondary"
    onClick={decreaseQty}
    style={{
      width: "35px",
      height: "35px",
      fontSize: "18px",
      fontWeight: "bold",
      borderRadius: "5px 0 0 5px",
      border: "1px solid #ccc",
      background: "#f8f8f8",
      cursor: "pointer",
    }}
  >
    -
  </button>

  {/* Quantity Input */}
  <input
    type="text"
    value={qty}
    readOnly
    className="text-center"
    style={{
      width: "50px",
      height: "35px",
      borderTop: "1px solid #ccc",
      borderBottom: "1px solid #ccc",
      borderLeft: "none",
      borderRight: "none",
      fontSize: "16px",
    }}
  />

  {/* Increase Quantity */}
  <button
    type="button"
    className="mt-cart-plus btn btn-outline-secondary"
    onClick={increaseQty}
    style={{
      width: "35px",
      height: "35px",
      fontSize: "18px",
      fontWeight: "bold",
      borderRadius: "0 5px 5px 0",
      border: "1px solid #ccc",
      background: "#f8f8f8",
      cursor: "pointer",
    }}
  >
    +
  </button>
</div>

    </div>

                <div className="mt-shop-details__btn mr-12">
                  <button className="mt-btn" onClick={addToCart}>
                    <i className="fa-solid fa-basket-shopping"></i>
                    <span className="ml-6">Add To Cart</span>
                  </button>
                </div>
              </div>

              {/* EXTRA INFO */}
              <div className="mt-shop-details__product-info mb-15">
                <ul>
          <li>
  Category: <span className="text-muted">{product.category?.name}</span>
</li>

                  <li>Brand: <span>Eco-Mart </span></li>
                <li>
  SKU: <span>{product._id.slice(0, 6).toUpperCase()}</span>
</li>

                   <li>Type: <span>Organic </span></li>
                </ul>
              </div>

            </div>
          </div>
           <div className="col-xl-2 col-lg-2"></div> 
        </div>
      </div>
    </div>
<RelatedProducts></RelatedProducts>
 <section className="mtnewslatter__area mtnewslatter__space mt-120 mb-120">
      <div className="container">
        <div
          className="mtnewslatter__mainwrapper p-relative fix br-20 wow img-custom-anim-left"
          data-wow-duration="1.5s"
          data-wow-delay="0.1s"
          style={{ backgroundImage: "url('http://localhost:3000/assets/img/newslatter/newslatter-bg-2.jpg')" }}
        >
          <div className="mtnewslatter__shape">
            <img src="http://localhost:3000/assets/img/newslatter/star.png" alt="Star Shape" />
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
                      <img src="http://localhost:3000/assets/img/newslatter/shape-text.png" alt="Shape Text" />
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
   <Eagle></Eagle> 
</main>







      <footer className="mt-footer-area mt-footer-2 p-relative fix pt-80" style={{ backgroundColor: "#171A2B" }}>
      <div className="mt-footer-wraper p-relative">
        <div className="container">
          <div className="row">
            {/* Logo & Info */}
            <div className="col-lg-3 col-md-4">
              <div className="mt-footer-widget footer-2-cols-1">
                <div className="mt-footer-logo mb-20">
                  <a href="a"><img src="http://localhost:3000/assets/img/logo/white-logo.png" alt="Rosun" /></a>
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
                      <a href="e"><img src="http://localhost:3000/assets/img/footer/goolge-play.png" alt="Rosun" /></a>
                      <a href="f"><img src="http://localhost:3000/assets/img/footer/app-store.png" alt="Rosun" /></a>
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
                <img src="http://localhost:3000/assets/img/footer/payment.png" alt="Payment Methods" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default ProductDetails