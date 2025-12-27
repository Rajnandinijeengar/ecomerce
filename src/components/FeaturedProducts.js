import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const products = [
  {
    img: "assets/img/product/feature-1-1.jpg",
    title: "Green Spinach",
    weight: "500 gm",
    price: "$29.00",
    oldPrice: "$26.00",
  },
  {
    img: "assets/img/product/feature-1-2.jpg",
    title: "Organic Green Broccoli",
    weight: "500 gm",
    price: "$20.00",
    oldPrice: "$26.00",
  },
  {
    img: "assets/img/product/feature-1-3.jpg",
    title: "Zesty Orange Mandarin",
    weight: "500 gm",
    price: "$15.00",
    oldPrice: "$20.00",
  },
  {
    img: "assets/img/product/feature-1-4.jpg",
    title: "Sweet Purple Grapes",
    weight: "500 gm",
    price: "$12.00",
    oldPrice: "$26.00",
  },
  {
    img: "assets/img/product/feature-1-5.jpg",
    title: "Local Green Broccoli",
    weight: "500 gm",
    price: "$29.00",
    oldPrice: "$26.00",
  },
  {
    img: "assets/img/product/feature-1-8.png",
    title: "Tropical Yellow Pineapple",
    weight: "500 gm",
    price: "$21.00",
    oldPrice: "$29.00",
  },
];

const FeaturedProducts = () => {
  return (
    <div className="mttop__product-slider-wrapper">
      <div className="mttop__product-slider-wrap">
        <Swiper slidesPerView={4} spaceBetween={20}>
          {products.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="mtfeature__product-item p-relative fix">
                <div className="mtfeature__product-shape">
                  <img src="assets/img/product/feature-shape-1.png" alt="" />
                </div>

                <div className="mtfeature__product-offer">
                  <span>40% <br />OFF</span>
                </div>

                <div className="mtfeature__product-img mb-15">
                  <img src={item.img} alt={item.title} />
                </div>

                <div className="mtfeature__product-content mb-15">
                  <span>{item.weight}</span>
                  <h5 className="mtfeature__product-title">{item.title}</h5>
                </div>

                <div className="mtfeature__product-rating mb-15">
                  {Array(5).fill().map((_, i) => (
                    <i key={i} className="fa-solid fa-star-sharp"></i>
                  ))}
                </div>

                <div className="mtfeature__product-price mb-15">
                  <span>{item.price}</span>
                  <del>{item.oldPrice}</del>
                </div>

                <div className="mtfeature__product-btn">
                  <button className="mt-btn-3">Add To Cart</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>
    </div>
  );
};

export default FeaturedProducts;
