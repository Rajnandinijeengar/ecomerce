import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const featuredProducts = [
  {
    img: "assets/img/product/feature-1-1.jpg",
    title: "local organic Green Broccoli",
    weight: "500 gm",
    price: "$29.00",
    oldPrice: "$26.00",
    offer: "40% OFF",
  },
  {
    img: "assets/img/product/feature-1-2.jpg",
    title: "local organic Green Broccoli",
    weight: "500 gm",
    price: "$16.00",
    oldPrice: "$26.00",
    offer: "40% OFF",
  },
  {
    img: "assets/img/product/feature-1-3.jpg",
    title: "local organic Green Broccoli",
    weight: "500 gm",
    price: "$11.00",
    oldPrice: "$16.00",
    offer: "40% OFF",
  },
  {
    img: "assets/img/product/feature-1-4.jpg",
    title: "Fresh packaged Red Tomato",
    weight: "500 gm",
    price: "$10.50",
    oldPrice: "$12.00",
    offer: "40% OFF",
  },
  {
    img: "assets/img/product/feature-1-5.jpg",
    title: "local organic Green Broccoli",
    weight: "500 gm",
    price: "$18.55",
    oldPrice: "$20.00",
    offer: "40% OFF",
  },
];

const FeatureProducts = () => {
  return (
    <section className="mtfeature__product-area pt-50 pb-40 p-relative fix">
      <div className="container">
        <div className="row align-items-center mb-30">
          <div className="col-lg-6 col-md-8">
            <div className="mt-section-content mb-30">
              <h3 className="mt-section-title">
                Featured <span>Products</span>
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
                Discover our handpicked selection of top-rated and trending items. Limited time offers and exclusive deals await!
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-4">
            <div className="p-relative mb-30">
              <div className="mtfeature__product-arrow mb-30 d-flex justify-content-end p-relative">
                <div className="mtfeature__product-arrow-left">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                      <path
                        d="M7.39367 0.820693C6.37396 5.14484 1.88 6.84235 1.46856 6.98943C1.4577 6.99331 1.45706 7.00855 1.4676 7.01347C1.87294 7.20245 6.37316 9.37583 7.39367 13.1793M14.54 7.00001L2.62943 7.00001"
                        stroke="#060121"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                </div>
                <div className="mtfeature__product-arrow-right">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
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
          </div>
        </div>

        <div className="mtfeature__product-wrapper mt-15">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".mtfeature__product-arrow-right",
              prevEl: ".mtfeature__product-arrow-left",
            }}
            spaceBetween={20}
            slidesPerView={4}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
            }}
          >
            {featuredProducts.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="mtfeature__product-item p-relative fix">
                  <div className="mtfeature__product-shape">
                    <img src="assets/img/product/feature-shape-1.png" alt="" />
                  </div>
                  <div className="mtfeature__product-offer">
                    <span>{product.offer}</span>
                  </div>
                  <div className="mtfeature__product-img mb-15">
                    <a href="product-details.html">
                      <img src={product.img} alt={product.title} />
                    </a>
                  </div>
                  <div className="mtfeature__product-content mb-15">
                    <span>{product.weight}</span>
                    <h5 className="mtfeature__product-title">
                      <a href="product-details.html">{product.title}</a>
                    </h5>
                  </div>
                  <div className="mtfeature__product-rating mb-15">
                    {[...Array(5)].map((_, i) => (
                      <button href="#" key={i}>
                        <i className="fa-solid fa-star-sharp"></i>
                      </button>
                    ))}
                  </div>
                  <div className="mtfeature__product-price mb-15">
                    <span>{product.price}</span>
                    <del>{product.oldPrice}</del>
                  </div>
                  <div className="mtfeature__product-btn">
                    <a href="cart.html" className="mt-btn-3">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FeatureProducts;
