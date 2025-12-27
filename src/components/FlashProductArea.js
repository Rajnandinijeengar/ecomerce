
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const FlashProductArea = () => {
  const products = [
    { id: 1, image: "/assets/img/product/flash-1-1.jpg", name: "Purple sweet grape", price: 11.25, oldPrice: 20.18, weight1: "1kg", weight2: "500g" },
    { id: 2, image: "/assets/img/product/flash-1-2.jpg", name: "Purple sweet grape", price: 11.25, oldPrice: 20.18, weight1: "1kg", weight2: "500g" },
    { id: 3, image: "/assets/img/product/flash-1-3.jpg", name: "Purple sweet grape", price: 11.25, oldPrice: 20.18, weight1: "1kg", weight2: "500g" },
    { id: 4, image: "/assets/img/product/flash-1-4.jpg", name: "Purple sweet grape", price: 11.25, oldPrice: 20.18, weight1: "1kg", weight2: "500g" },
    { id: 6, image: "/assets/img/product/flash-1-6.jpg", name: "Purple sweet delicious grape", price: 11.25, oldPrice: 20.18, weight1: "1kg", weight2: "500g" },
    { id: 7, image: "/assets/img/product/flash-1-7.jpg", name: "Purple sweet delicious grape", price: 11.25, oldPrice: 20.18, weight1: "1kg", weight2: "500g" },
  ];
  return (
    <section
      className="mtflash__product-area mtflash__product-bg pt-80 pb-110 p-relative fix"
      style={{ backgroundImage: `url('/assets/img/bg/flash-bg-1-1.png')` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-8">
            <div className="mt-section-content mb-45">
              <h3 className="mt-section-title">
                Flash Sale <span>Products</span>
              </h3>
              <p>
                Discover our handpicked selection of top-rated and trending items. Limited time offers
                and exclusive deals await!
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-4">
            <div className="p-relative mb-45">
              <div className="mtfeature__product-arrow d-flex justify-content-end p-relative">
                <div className="mtfeature__product-arrow-left">
                  <span>&lt;</span>
                </div>
                <div className="mtfeature__product-arrow-right">
                  <span>&gt;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt__flash-sell-product-wrapper">
      <Swiper
        spaceBetween={20}
        slidesPerView={6} // Adjust as needed
        loop={true}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="mtflash__product-item p-relative fix">
              <div className="mtflash__product-img mb-20">
                <a href="product-details.html">
                  <img src={product.image} alt={product.name} />
                </a>
                <div className="mtflash__product-cart">
                  <a href="cart.html">
                    <i className="fa-solid fa-basket-shopping"></i>
                  </a>
                </div>
              </div>

              <div className="mtflash__product-content mb-10 d-flex align-items-center justify-content-around">
                <div className="mtflash__product-text">
                  <h5 className="mtflash__product-title">
                    <a href="product-details.html">{product.name}</a>
                  </h5>
                </div>
                <div className="mtflash__product-ratting">
                  <span className="mtflash__product-ricon">
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span className="mtflash__product-review-number">(5.0)</span>
                </div>
              </div>

              <div className="mtflash__product-category mb-15 d-flex align-items-center justify-content-around">
                <div className="mtflash__product-price">
                  <span>${Number(product.price).toFixed(2)}</span>
                  <del>${Number(product.oldPrice).toFixed(2)}</del>
                </div>
                <div className="mtflash__product-cate">
                  <span>{product.weight1}</span>
                  <span>{product.weight2}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </section>
  );
};

export default FlashProductArea;
