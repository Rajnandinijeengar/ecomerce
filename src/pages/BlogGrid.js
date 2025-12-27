import React from 'react'
import BlogStart from '../components/BlogStart'
import Door from '../components/Door'
function BlogGrid() {
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
  data-background="assets/img/breadcurmb/breadcrumb-bg.jpg"
>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-7">
        <div className="mt-breadcrumb p-relative">
          <h1 className="mt-breadcrumb-title">
            Our <span>Blogs</span>
          </h1>

          <div className="mt-breadcrumb-list">
            <span className="active">
              <a href="/">Home</a>
            </span>
            <span className="dvir">-</span>
            <span>
              <a href="/Blog">Our Blogs</a>
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
            alt="Breadcrumb"
          />
        </div>
      </div>
    </div>
  </div>
</section>
<BlogStart></BlogStart>
<section className="mt-blogpost-area pt-115 pb-55">
  <div className="container">
    <div className="mt-section-content mb-40">
      <h3 className="mt-section-title">
        Recent <span>Published</span>
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
        Discover the hottest topics and most engaging voices on the <br />
        internet. From breaking news and in-depth analysis.
      </p>
    </div>

    {/* ===== First Row ===== */}
    <div className="row">
      {[1, 2].map((item, i) => (
        <div className="col-lg-6 col-md-6 col-sm-6" key={i}>
          <div className="mtblog__wrapper mb-35">
            <div className="mtblog__item p-relative">
              <div
                className="mtblog__thumb br-8 mb-20 p-relative wow img-custom-anim-top"
                data-wow-duration="1.5s"
                data-wow-delay={i === 0 ? "0.1s" : "0.3s"}
              >
                <a href="blog-details.html">
                  <img
                    src={`assets/img/blog/blog-grid-${item}.jpg`}
                    alt="Blog"
                  />
                </a>
                <div className="mtblog__date">
                  <span>
                    <i className="fa-regular fa-calendar-days"></i> 24 Mar 2025
                  </span>
                </div>
              </div>

              <div className="mtblog__content">
                <div className="mtblog__meta mb-6">
                  <span>
                    <i className="fa-light fa-user"></i> By Mitchel
                  </span>
                  <cite>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                      <path
                        d="M9 1.82196L10.429 6.82929L10.5619 7.29477L11.0314 7.17707L16.0824 5.91098L12.4604 9.65222L12.1237 10L12.4604 10.3478L16.0824 14.089L11.0314 12.8229L10.5619 12.7052L10.429 13.1707L9 18.178L7.57097 13.1707L7.43813 12.7052L6.9686 12.8229L1.91761 14.089L5.53957 10.3478L5.87627 10L5.53957 9.65222L1.91761 5.91098L6.9686 7.17707L7.43813 7.29477L7.57097 6.82929L9 1.82196Z"
                        fill="#FDD057"
                        stroke="#060121"
                      />
                    </svg>
                  </cite>
                  <span>
                    <i className="fa-sharp fa-light fa-comment"></i> 24 Comments
                  </span>
                </div>

                <h4 className="mtblog__title mb-10">
                  <a href="blog-details.html">
                    {item === 1
                      ? "Your Ultimate Grocery Shopping Guide"
                      : "Healthy Eating on a Budget Grocery Hacks"}
                  </a>
                </h4>

                <p>
                  Grocery Goals Tips, tricks, and inspiration for achieving your
                  grocery shopping aspirations.
                </p>

                <div className="mtblog__btn">
                  <a href="blog-details.html">
                    Read More <i className="fa-regular fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* ===== Second Row ===== */}
    <div className="row">
      {[1, 2, 3, 4].map((item, i) => (
        <div className="col-lg-3 col-md-6 col-sm-6" key={i}>
          <div className="mtblog__wrapper mb-35">
            <div className="mtblog__item p-relative">
              <div
                className="mtblog__thumb br-8 mb-10 p-relative wow img-custom-anim-top"
                data-wow-duration="1.5s"
                data-wow-delay={`${0.1 + i * 0.2}s`}
              >
                <a href="blog-details.html">
                  <img src={`assets/img/blog/blog-1-${item}.jpg`} alt="Blog" />
                </a>
                <div className="mtblog__date">
                  <span>
                    <i className="fa-regular fa-calendar-days"></i> 24 Mar 2025
                  </span>
                </div>
              </div>

              <div className="mtblog__content">
                <div className="mtblog__meta mb-6">
                  <span>
                    <i className="fa-light fa-user"></i> By Mitchel
                  </span>
                  <span>
                    <i className="fa-sharp fa-light fa-comment"></i> 24 Comments
                  </span>
                </div>

                <h4 className="mtblog__title mb-10">
                  <a href="blog-details.html">
                    Grocery Lifestyle Inspiration Blog {item}
                  </a>
                </h4>

                <div className="mtblog__btn">
                  <a href="blog-details.html">
                    Read More <i className="fa-regular fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="mt-trending-blog-area fix">
  <div className="container">
    <div className="mt-section-content mb-60">
      <h3 className="mt-section-title">
        Todays <span>Trending</span>
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
        Stay informed, entertained, and inspired with the latest <br />
        buzzworthy content.
      </p>
    </div>

    <div className="row">
      {/* LEFT CONTENT */}
      <div className="col-lg-8">
        <div className="mt-trending-blog-wrapper">

          {/* BLOG ITEM */}
          {[1, 2, 3].map((item, i) => (
            <div
              key={i}
              className="mt-trending-blog-item mt-trending-blog-border d-flex align-items-center mb-30"
            >
              <div
                className="mt-trending-blog-thumb br-15 mr-24 wow img-custom-anim-top"
                data-wow-duration="1.5s"
                data-wow-delay={`${0.1 + i * 0.1}s`}
              >
                <a href="blog-details.html">
                  <img
                    src={`assets/img/blog/blog-trend-${item}.jpg`}
                    alt="Trending Blog"
                  />
                </a>
              </div>

              <div className="mt-trending-blog-content">
                <div className="mtblog__content mr-30">
                  <h4 className="mtblog__title mt-fs-24 mb-6">
                    <a href="blog-details.html">
                      {item === 1 &&
                        <>Discover Fresh Finds and Flavorful Staples <br /> at our shop</>}
                      {item === 2 &&
                        <>Elevate Your Everyday with Our Curated Grocery Selection</>}
                      {item === 3 &&
                        <>Convenient Shopping, Quality Products, Your One-Stop Grocery Destination</>}
                    </a>
                  </h4>

                  <p className="mb-7">
                    From fresh, seasonal produce to international delicacies, we've <br />
                    got everything you need to create delicious meals that delight <br />
                    your taste buds.
                  </p>

                  <div className="mtblog__meta mb-6">
                    <span><i className="fa-light fa-user"></i> By Mitchel</span>
                    <span><i className="fa-sharp fa-light fa-comment"></i> 24 Comments</span>
                    <span><i className="fa-regular fa-calendar-days"></i> 20 APR 2024</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* PAGINATION */}
        <div className="mt-pagination-wrap d-flex align-items-center justify-content-between mt-20 mb-40 flex-wrap">
          <div className="mt-pagination mb-20">
            <a href="aa" className="button">
              <i className="fa-regular fa-chevron-left"></i> Prev
            </a>
            <a href="aa">1</a>
            <a href="aa">2</a>
            <a href="aa">3</a>
            <a href="aa">...</a>
            <a href="aa" className="button">
              Next <i className="fa-regular fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT BANNER */}
      <div className="col-lg-4">
  <div
    className="mt-trending-blog-banner mt-trending-blog-banner-space wow img-custom-anim-right"
    data-wow-duration="1.5s"
    data-wow-delay="0.1s"
    style={{
      backgroundImage: "url('assets/img/blog/trend-blog-widget.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}
  >
    <div
      className="mt-trending-blog-banner-content wow img-custom-anim-right"
      data-wow-duration="1.5s"
      data-wow-delay="0.5s"
    >
      <h4 className="mt-trending-blog-banner-title">Weekly Discount</h4>
      <p className="mb-24">
        Get 20% off all new arrival fresh vegetables
      </p>
      <a className="mt-btn" href="blog.html">View All</a>
    </div>
  </div>
</div>

    </div>
  </div>
</section>
<section className="mt-explore-blog-area pt-90 pb-60">
  <div className="container">
    <div className="mt-section-content mb-40">
      <h3 className="mt-section-title">
        Explore
        <span>all Blogs</span>
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
        It implies that the platform hosts various blogs on different <br />
        topics and provides a centralized location.
      </p>
    </div>

    <div className="row">
      {[1,2,3,4,5,6,7,8].map((item, index) => (
        <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
          <div className="mt-explore-blog-item mt-explore-blog-border mb-24 fix">
            <div className="mt-explore-blog-meta mb-20">
              <span><i className="fa-light fa-user"></i>By Mitchel</span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                  <path
                    d="M5.72363 3.9834L5.85742 4.44824L6.32617 4.33105L8.00195 3.91113L6.80078 5.15234L6.46387 5.5L6.80078 5.84766L8.00195 7.08789L5.85742 6.55176L5.72363 7.0166L5.25 8.67676L4.77637 7.0166L4.64258 6.55176L4.17383 6.66895L2.49707 7.08789L3.69922 5.84766L4.03613 5.5L3.69922 5.15234L2.49707 3.91113L4.17383 4.33105L4.64258 4.44824L4.77637 3.9834L5.25 2.32227L5.72363 3.9834Z"
                    fill="#FDD057"
                    stroke="#060121"
                  />
                </svg>
              </span>
              <span><i className="fa-sharp fa-light fa-comment"></i>24 Comments</span>
            </div>

            <div className="mt-explore-blog-content mb-20">
              <h3 className="mt-explore-blog-title">
                <a href="blog-details.html">Explore Blog Title {item}</a>
              </h3>
            </div>

            <div className="mt-explore-blog-date mb-30">
              <span><i className="fa-regular fa-calendar-days"></i> 24 Mar 2025</span>
            </div>

            <div
              className="mt-explore-blog-thumb wow img-custom-anim-top"
              data-wow-duration="1.5s"
              data-wow-delay={`${0.1 * (index + 1)}s`}
            >
              <a href="blog-details.html">
                <img
                  src={`assets/img/blog/explore-blog-${item}.jpg`}
                  alt={`Explore Blog ${item}`}
                />
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="mt-pagination-wrap d-flex align-items-center justify-content-between mt-20 flex-wrap">
        <div className="mt-pagination mb-20">
          <a href="aa" className="button">
            <i className="fa-regular fa-chevron-left"></i> Prev
          </a>
          <a href="aa">1</a>
          <a href="aa">2</a>
          <a href="aa">3</a>
          <a href="aa">...</a>
          <a href="aa" className="button">
            Next <i className="fa-regular fa-chevron-right"></i>
          </a>
        </div>

        <div className="mt-pagination-sort mb-20">
          <span>Show</span>
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

export default BlogGrid