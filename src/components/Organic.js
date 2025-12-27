import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules"; // ✅ Correct import in Swiper 10+

function BrandTitleSlide() {
  const slides = [
    "15% Off on Fresh Spinach",
    "Enjoy 20% Savings on Carrots",
    "Get 10% Discount on Green Peppers",
    "Save 15% on Ripe Tomatoes",
    "10% Discount of Cabbage",
    "Grab 20% Off on Organic Broccoli",
    "15% Off on Fresh Spinach",
    "Enjoy 20% Savings on Carrots",
    "Get 10% Discount on Green Peppers",
    "Save 15% on Ripe Tomatoes",
    "10% Discount of Cabbage",
    "Grab 20% Off on Organic Broccoli",
  ];

  return (
    <section className="mtbanner__titleslide-area theme-bg-2 pt-18 pb-10 p-relative fix">
      <div className="mtbanner__titleslide-wrapper">
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 2000 }}
          modules={[Autoplay]}
          className="mt-brand-title-active"
        >
          {slides.map((text, index) => (
            <SwiperSlide key={index} className="mt-brand-slide-element">
              <div className="mtbanner__titleslide-inner">
                <span>
                  <i className="fa-solid fa-star-sharp"></i>
                </span>
                <h5 className="mtbanner__titleslide-title">{text}</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default BrandTitleSlide;
