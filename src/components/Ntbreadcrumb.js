// BreadcrumbTitleSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";

const Ntbreadcrumb = () => {
  return (
    <section className="mtbreadcrumb__titleslide-area p-relative">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        className="mt-brand-title-active"
        breakpoints={{
          320: {
            slidesPerView: 1.5,
          },
          576: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
        }}
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <SwiperSlide key={index}>
            <div className="mtbreadcrumb__titleslide">
              <h5 className="mtbreadcrumb__titleslide-title">
                <span>
                  <i className="fa-solid fa-star-sharp"></i>
                </span>
                ABOUT US
              </h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Ntbreadcrumb;
