import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const flashProducts = [
  {
    img: "assets/img/product/feature-1-12.png",
    title: "Green Spinach",
    weight: "500 gm",
    price: "$29.00",
    oldPrice: "$26.00",
  },
  {
    img: "assets/img/product/feature-1-11.png",
    title: "Organic Green Broccoli",
    weight: "500 gm",
    price: "$20.00",
    oldPrice: "$26.00",
  },
  {
    img: "assets/img/product/feature-1-13.png",
    title: "Zesty Orange Mandarin",
    weight: "500 gm",
    price: "$15.00",
    oldPrice: "$20.00",
  },
  {
    img: "assets/img/product/feature-1-9.png",
    title: "Sweet Purple Grapes",
    weight: "500 gm",
    price: "$12.00",
    oldPrice: "$26.00",
  },
  {
    img: "assets/img/product/feature-1-8.png",
    title: "Local Green Broccoli",
    weight: "500 gm",
    price: "$29.00",
    oldPrice: "$26.00",
  },
  {
    img: "assets/img/product/feature-1-7.png",
    title: "Tropical Yellow Pineapple",
    weight: "500 gm",
    price: "$21.00",
    oldPrice: "$29.00",
  },
];

const FlashSaleSlider = () => {
  return (
    <div className="mttop__product-slider-wrapper">
      <div className="mttop__product-slider-wrap">
        <Swiper slidesPerView={4} spaceBetween={20}>
          {flashProducts.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="mtfeature__product-item p-relative fix">
                {/* Shape */}
                <div className="mtfeature__product-shape">
                  <img src="assets/img/product/feature-shape-1.png" alt="" />
                </div>

                {/* Offer */}
                <div className="mtfeature__product-offer">
                  <span>
                    40% <br /> OFF
                  </span>
                </div>

                {/* Image */}
                <div className="mtfeature__product-img mb-15">
                  <a href="product-details.html">
                    <img src={item.img} alt={item.title} />
                  </a>
                </div>

                {/* Content */}
                <div className="mtfeature__product-content mb-15">
                  <span>{item.weight}</span>
                  <h5 className="mtfeature__product-title">
                    <a href="product-details.html">{item.title}</a>
                  </h5>
                </div>

                {/* Rating */}
                <div className="mtfeature__product-rating mb-15">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <i key={i} className="fa-solid fa-star-sharp"></i>
                    ))}
                </div>

                {/* Price */}
                <div className="mtfeature__product-price mb-15">
                  <span>{item.price}</span>
                  <del>{item.oldPrice}</del>
                </div>

                {/* Button */}
                <div className="mtfeature__product-btn">
                  <a className="mt-btn-3" href="cart.html">
                    Add To Cart
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FlashSaleSlider;
