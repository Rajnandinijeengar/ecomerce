import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Sara Olivia",
    role: "Solution Manager",
    rating: 3,
    img: "assets/img/testimonial/author-2-1.jpg",
    content:
      "Roshun Grocery Shop is a fantastic local store! They have a great selection of fresh produce, quality meats, and a wide variety of pantry staples.",
    quoteImg: "assets/img/testimonial/qoute-2.png",
  },
  {
    name: "Mitchel Stark",
    role: "Collage Student",
    rating: 3,
    img: "assets/img/testimonial/author-2-2.jpg",
    content:
      "Roshun Grocery Shop is a fantastic local store! They have a great selection of fresh produce, quality meats, and a wide variety of pantry staples.",
    quoteImg: "assets/img/testimonial/qoute-2.png",
  },
  {
    name: "Jonson Taylor",
    role: "Dermatologists",
    rating: 3,
    img: "assets/img/testimonial/author-2-3.jpg",
    content:
      "Roshun Grocery Shop is a fantastic local store! They have a great selection of fresh produce, quality meats, and a wide variety of pantry staples.",
    quoteImg: "assets/img/testimonial/qoute-2.png",
  },
   {
    name: "Sara Olivia",
    role: "Solution Manager",
    rating: 3,
    img: "assets/img/testimonial/author-2-1.jpg",
    content:
      "Roshun Grocery Shop is a fantastic local store! They have a great selection of fresh produce, quality meats, and a wide variety of pantry staples.",
    quoteImg: "assets/img/testimonial/qoute-2.png",
  },
  {
    name: "Mitchel Stark",
    role: "Collage Student",
    rating: 3,
    img: "assets/img/testimonial/author-2-2.jpg",
    content:
      "Roshun Grocery Shop is a fantastic local store! They have a great selection of fresh produce, quality meats, and a wide variety of pantry staples.",
    quoteImg: "assets/img/testimonial/qoute-2.png",
  },
  {
    name: "Jonson Taylor",
    role: "Dermatologists",
    rating: 3,
    img: "assets/img/testimonial/author-2-3.jpg",
    content:
      "Roshun Grocery Shop is a fantastic local store! They have a great selection of fresh produce, quality meats, and a wide variety of pantry staples.",
    quoteImg: "assets/img/testimonial/qoute-2.png",
  },
];

const Area = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="mttestimonial__area mttestimonial__2 pt-70 pb-120 p-relative fix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="mt-section-content mb-30">
              <h3 className="mt-section-title">
                <span>★</span> Clients<span>Testimonial</span> <span>★</span>
              </h3>
              <p>
                Hear what our satisfied customers have to say about their
                experience. Real people, real results.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="d-flex mb-30 justify-content-lg-end">
              <button ref={prevRef} className="prev-btn">
                ❮
              </button>
              <button ref={nextRef} className="next-btn">
                ❯
              </button>
            </div>
          </div>
        </div>

        <div className="mttestimonial__wrapper">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            slidesPerView={3}
            loop={true}
            spaceBetween={30}
            className="mt-testimonial-active-2"
          >
            {testimonials.map((testi, index) => (
              <SwiperSlide key={index}>
                <div className="mttestimonial__item p-relative fix">
                  <div className="mttestimonial__author mb-45 d-flex align-items-center">
                    <div className="mttestimonial__author-img br-15">
                      <img src={testi.img} alt={testi.name} />
                    </div>
                    <div className="mttestimonial__author-text">
                      <h5 className="mttestimonial__author-title">{testi.name}</h5>
                      <span>{testi.role}</span>
                    </div>
                  </div>

                  <div className="mttestimonial__ratting mb-7">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={
                          i < testi.rating
                            ? "fa-solid fa-star-sharp"
                            : "fa-light fa-star"
                        }
                      ></i>
                    ))}
                  </div>

                  <div className="mttestimonial__content">
                    <p className="mb-45">{testi.content}</p>
                    <div className="mttestimonial__quote">
                      <img src={testi.quoteImg} alt="Quote" />
                    </div>
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

export default Area;
