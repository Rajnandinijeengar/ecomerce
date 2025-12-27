import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const HotProductArea = () => {
  const products = [
    {
      id: 1,
      name: "Juicy Sweet Mango",
      img: "assets/img/product/feature-2-1.png",
      price: 16,
      delPrice: 21,
      offer: "70% OFF",
      rating: 4.5,
      weight: ["1Kg", "500Kg"],
    },
    {
      id: 2,
      name: "Creamy Yellow Banana",
      img: "assets/img/product/feature-2-2.png",
      price: 11,
      delPrice: 14,
      rating: 4.5,
      weight: ["1Kg", "500Kg"],
    },
    {
      id: 3,
      name: "Red Seedless Grapes",
      img: "assets/img/product/feature-2-3.png",
      price: 9,
      delPrice: 15,
      rating: 4.5,
      weight: ["1Kg", "500Kg"],
    },
    {
      id: 4,
      name: "Organic Campa Yellow Bananas",
      img: "assets/img/product/feature-2-5.png",
      price: 11,
      delPrice: 18,
      offer: "70% OFF",
      rating: 4.5,
      weight: ["1Kg", "500Kg"],
    },
    {
      id: 5,
      name: "Tropical Yellow Pineapple",
      img: "assets/img/product/feature-2-7.png",
      price: 5,
      delPrice: 11,
      offer: "70% OFF",
      rating: 4.5,
      weight: ["1Kg", "500Kg"],
    },
  ];

  return (
    <section className="mthot__product-area mthot__product-2 pt-120 pb-55 p-relative fix">
      <div className="mthot__product-shape">
        <img src="assets/img/shape/shape-1-3.png" alt="" />
      </div>
      <div className="container">
        {/* Header + Countdown */}
        <div className="mthot__product-borderd mb-10 pb-7">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="mt-section-content">
                <h3 className="mt-section-title mb-30">
                  Deals Of <span>The Day</span>
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
              <div className="mthot__product-wraping text-md-end mb-30">
                <h5 className="mthot__product-subtitle mb-20 text-md-end">
                  Hurry Up! <span> Offer End In:</span>
                </h5>
                <div className="mthot__product-countdown">
                  <div className="countdown d-flex align-items-center justify-content-lg-end">
                    <div className="mthot__product-countdownitem">
                      <span className="countdown-value">05</span>
                      <span className="countdown-label">DAYS</span>
                    </div>
                    <div className="countdown-separator">:</div>
                    <div className="mthot__product-countdownitem">
                      <span className="countdown-value">12</span>
                      <span className="countdown-label">Hours</span>
                    </div>
                    <div className="countdown-separator">:</div>
                    <div className="mthot__product-countdownitem">
                      <span className="countdown-value">34</span>
                      <span className="countdown-label">Mins</span>
                    </div>
                    <div className="countdown-separator">:</div>
                    <div className="mthot__product-countdownitem">
                      <span className="countdown-value">44</span>
                      <span className="countdown-label">Secs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Slider */}
        <div className="mthot__product-wrapper mthot__product-wrapper-2">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".mthot__product-slider-right1",
              prevEl: ".mthot__product-slider-left1",
            }}
            spaceBetween={30}
            slidesPerView={4}
            className="mthot__product_active_2"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="mtfeature__product-item p-relative fix">
                  {product.offer && (
                    <div className="mtfeature__product-offer">
                      <span>{product.offer}</span>
                    </div>
                  )}
                  <div className="mtfeature__product-img mb-15">
                    <div className="mtfeature__product-wishlist">
                      <a href="wishlist.html">
                        <i className="fa-regular fa-heart"></i>
                      </a>
                    </div>
                    <a href="product-details.html">
                      <img src={product.img} alt={product.name} />
                    </a>
                  </div>
                  <div className="mtflash__product-content mb-15 d-flex align-items-center justify-content-between">
                    <div className="mtfeature__product-cate">
                      {product.weight.map((w, i) => (
                        <span key={i}>{w}</span>
                      ))}
                    </div>
                    <div className="mtflash__product-ratting">
                      <span className="mtflash__product-ricon">
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span className="mtflash__product-review-number">
                        ({product.rating.toFixed(1)})
                      </span>
                    </div>
                  </div>
                  <div className="mtfeature__product-content text-start">
                    <h5 className="mtfeature__product-title">
                      <a href="product-details.html">{product.name}</a>
                    </h5>
                  </div>
                  <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
                    <div className="mtfeature__product-price">
                      <span>${product.price.toFixed(2)}</span>
                      <del>${product.delPrice.toFixed(2)}</del>
                    </div>
                    <div className="mtfeature__product-cart">
                      <a href="cart.html">
                        <i className="fa-solid fa-basket-shopping"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Slider Arrows */}
          <div className="mthot__product-arrowbtn mt-30">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-7 col-sm-6">
                <div className="mthot__product-arrow">
                  <div className="mthot__product-slider-left1">
                    <span>
                      {/* Left arrow SVG */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                      >
                        <path
                          d="M7.39367 0.820693C6.37396 5.14484 1.88 6.84235 1.46856 6.98943C1.4577 6.99331 1.45706 7.00855 1.4676 7.01347C1.87294 7.20245 6.37316 9.37583 7.39367 13.1793M14.54 7.00001L2.62943 7.00001"
                          stroke="#060121"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="mthot__product-slider-right1">
                    <span>
                      {/* Right arrow SVG */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                      >
                        <path
                          d="M7.60633 13.1793C8.62604 8.85516 13.12 7.15765 13.5314 7.01057C13.5423 7.00669 13.5429 6.99145 13.5324 6.98653C13.1271 6.79755 8.62684 4.62417 7.60633 0.820679M0.459961 6.99999L12.3706 6.99999"
                          stroke="#060121"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-5 col-sm-6">
                <div className="mthot__product-btn text-end">
                  <a href="shop.html" className="mt-btn">
                    <i className="fa-solid fa-basket-shopping"></i> <span>Shop Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotProductArea;
