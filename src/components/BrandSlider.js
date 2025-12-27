import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/autoplay";

const brands = [
  "brand-1-1.png",
  "brand-1-2.png",
  "brand-1-3.png",
  "brand-1-4.png",
  "brand-1-5.png",
  "brand-1-6.png",
  "brand-1-7.png",
  "brand-1-8.png",
  "brand-1-9.png",
  "brand-1-10.png",
];

const BrandSlider = () => {
  return (
    <div className="mtbanner__titleslide-area theme-bg-2 pt-25 pb-15 p-relative fix">
      <div
        className="mtbanner__titleslide-wrapper"
        style={{
          height: "50px", // Adjust height as needed
          display: "flex",
          alignItems: "center",
        }}
      >
        <Swiper
          direction="vertical"
          slidesPerView={4} // Number of slides visible
          spaceBetween={20}
          loop={true}
          speed={1500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          className="swiper mt-brand-title-active"
        >
          {brands.concat(brands.slice().reverse()).map((img, index) => (
            <SwiperSlide
              key={index}
              className="swiper-slide mt-brand-slide-element"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={`/assets/img/brand/${img}`} // ⚡ Correct path
                alt={`Brand ${index + 1}`}
                style={{
                  width: "80%", // fit nicely
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BrandSlider;
