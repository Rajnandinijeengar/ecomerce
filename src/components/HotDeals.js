import React from "react";

const hotProducts = [
  {
    img: "assets/img/product/hot-1-1.png",
    title: "local organic Green Broccoli",
    cate: ["1Kg", "500Kg"],
    price: "$16.00",
    delPrice: "$20.00",
  },
  {
    img: "assets/img/product/hot-1-2.png",
    title: "Fresh packaged Red Tomato",
    cate: ["1Kg", "500Kg"],
    price: "$25.22",
    delPrice: "$35.33",
  },
  {
    img: "assets/img/product/hot-1-3.png",
    title: "Green Seedless fresh Grapes",
    cate: ["1Kg", "500Kg"],
    price: "$12.54",
    delPrice: "$34.00",
  },
  {
    img: "assets/img/product/hot-1-4.png",
    title: "local organic Green Broccoli",
    cate: ["1Kg", "500Kg"],
    price: "$16.45",
    delPrice: "$20.00",
  },
  {
    img: "assets/img/product/hot-1-5.png",
    title: "White Pumpkin - Each (appr 1.5 LB-2 LB)",
    cate: ["1Kg", "500Kg"],
    price: "$7.00",
    delPrice: "$20.00",
  },
  {
    img: "assets/img/product/hot-1-6.png",
    title: "Everist Meat Masala 100 Gm",
    cate: ["1Kg", "500Kg"],
    price: "$6.00",
    delPrice: "$20.00",
  },
  {
    img: "assets/img/product/hot-1-7.png",
    title: "Best Masoori dry indian Rice",
    cate: ["1Kg", "500Kg"],
    price: "$30.00",
    delPrice: "$34.00",
  },
  {
    img: "assets/img/product/hot-1-8.png",
    title: "Palak (Spinach) - Bunch",
    cate: ["1Kg", "500Kg"],
    price: "$18.00",
    delPrice: "$24.00",
  },
  // Add more products similarly
];

function HotDeals() {
  return (
    <section
      className="mthot__product-area mthot__product-bg pt-40 pb-50 p-relative fix"
      style={{ backgroundImage: `url(assets/img/bg/hot-bg-1-1.png)` }}
    >
      <div className="container">
        <div className="mthot__product-border mb-45 pb-7">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="mt-section-content mb-30">
                <h3 className="mt-section-title">
                  Weekly <span>Hot Deals</span>{" "}
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
            </div>
            <div className="col-md-6">
              <div className="mthot__product-wraping">
                <div className="mthot__product-countdown">
                  <div
                    className="countdown d-flex align-items-center justify-content-lg-end"
                    data-countdown
                    data-date="Nov 19 2025 20:20:22"
                  >
                    <div className="mthot__product-countdownitem">
                      <span data-days className="countdown-value">
                        05
                      </span>
                      <span className="countdown-label">DAYS</span>
                    </div>
                    <div className="countdown-separator">:</div>
                    <div className="mthot__product-countdownitem">
                      <span data-hours className="countdown-value">
                        12
                      </span>
                      <span className="countdown-label">Hours</span>
                    </div>
                    <div className="countdown-separator">:</div>
                    <div className="mthot__product-countdownitem">
                      <span data-minutes className="minutes countdown-value">
                        34
                      </span>
                      <span className="countdown-label">Mins</span>
                    </div>
                    <div className="countdown-separator">:</div>
                    <div className="mthot__product-countdownitem">
                      <span data-seconds className="seconds countdown-value">
                        44
                      </span>
                      <span className="countdown-label">Secs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mthot__product-wrapper mb-15">
          <div className="row g-3">
            {hotProducts.map((product, index) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6 mthot__cols"
                key={index}
              >
                <div className="mthot__product-item p-relative fix">
                  <div className="mthot__product-img mb-10">
                    <a href="product-details.html">
                      <img src={product.img} alt={product.title} />
                    </a>
                    <div className="mthot__product-wishlist">
                      <a href="wishlist.html">
                        <i className="fa-regular fa-heart"></i>
                      </a>
                    </div>
                  </div>
                  <div className="mthot__product-content">
                    <div className="mthot__product-cate mb-10">
                      {product.cate.map((c, i) => (
                        <span key={i}>{c}</span>
                      ))}
                    </div>
                    <h6 className="mthot__product-title mb-10">
                      <a href="product-details.html">{product.title}</a>
                    </h6>
                    <div className="mthot__product-price-wrap d-flex align-items-center justify-content-between">
                      <div className="mthot__product-price">
                        <span>{product.price}</span>
                        <del>{product.delPrice}</del>
                      </div>
                      <div className="mthot__product-cart">
                        <a href="cart.html">
                          <i className="fa-solid fa-basket-shopping"></i>
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
    </section>
  );
}

export default HotDeals;
