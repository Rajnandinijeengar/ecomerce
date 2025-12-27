import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    img: "assets/img/testimonial/author.jpg",
    name: "Thomas Alison",
    role: "CEO and Founder",
    text: `oshun Grocery Shop is a fantastic local store! They have a great selection 
           of fresh produce, quality meats, and a wide variety of pantry staples. 
           The staff is friendly and helpful, and the prices are reasonable.`,
  },
  {
    img: "assets/img/testimonial/author-2.jpg",
    name: "Jonson Taylor",
    role: "CEO and Founder",
    text: `oshun Grocery Shop is a fantastic local store! They have a great selection 
           of fresh produce, quality meats, and a wide variety of pantry staples. 
           The staff is friendly and helpful, and the prices are reasonable.`,
  },
  {
    img: "assets/img/testimonial/author.jpg",
    name: "Thomas Alison",
    role: "CEO and Founder",
    text: `oshun Grocery Shop is a fantastic local store! They have a great selection 
           of fresh produce, quality meats, and a wide variety of pantry staples. 
           The staff is friendly and helpful, and the prices are reasonable.`,
  },
];

const TestimonialSlider = () => {
  return (
    <section
      className="mttestimonial__area mttestimonial__bg pt-80 pb-115 p-relative fix"
      style={{
        backgroundImage: `url("assets/img/testimonial/testimonial-bg.jpg")`,
      }}
    >
      <div className="mttestimonial__shape-wrap">
        <div className="mttestimonial__shape">
          <img src="assets/img/testimonial/shape-1-1.png" alt="" />
        </div>
        <div className="mttestimonial__shape-2">
          <img src="assets/img/testimonial/shape-1-2.png" alt="" />
        </div>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="mt-section-content mb-30 text-center">
          <h3 className="mt-section-title">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
              >
                <path
                  d="M9 1.82196L10.429 6.82929..."
                  fill="#FDD057"
                  stroke="#060121"
                />
              </svg>
            </span>
            Clients <span>Testimonial</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
              >
                <path
                  d="M9 1.82196L10.429 6.82929..."
                  fill="#FDD057"
                  stroke="#060121"
                />
              </svg>
            </span>
          </h3>
          <p>
            Hear what our satisfied customers have to say about their
            experience. Real people, real results.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="mttestimonial__wrapper p-relative pl-30 pr-30">

              {/* Swiper Slider */}
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".mttestimonial__arrow-next",
                  prevEl: ".mttestimonial__arrow-prev",
                }}
                loop={true}
                className="mt-testimonial-active"
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="mttestimonial__item p-relative fix text-center">
                      
                      {/* Shapes */}
                      <div className="mttestimonial__shape-wrap">
                        <div className="mttestimonial__shape-3">
                          <img src="assets/img/testimonial/shape-1-3.png" alt="" />
                        </div>
                        <div className="mttestimonial__shape-4">
                          <img src="assets/img/testimonial/qoute.png" alt="" />
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="mttestimonial__ratting mb-20">
                        {Array(5)
                          .fill()
                          .map((_, i) => (
                            <i
                              key={i}
                              className="fa-solid fa-star-sharp"
                            ></i>
                          ))}
                      </div>

                      {/* Content */}
                      <div className="mttestimonial__content">
                        <p>{item.text}</p>

                        <div className="mttestimonial__author mt-30 d-flex align-items-center justify-content-center">
                          <div className="mttestimonial__author-img">
                            <img src={item.img} alt={item.name} />
                          </div>

                          <div className="mttestimonial__author-text">
                            <h5 className="mttestimonial__author-title">
                              {item.name}
                            </h5>
                            <span>{item.role}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Swiper Arrows */}
              <div className="mttestimonial__arrow">
                <div className="mttestimonial__arrow-next">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                    >
                      <path
                        d="M7.39 0.82C6.37 5.14..."
                        stroke="#060121"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                </div>

                <div className="mttestimonial__arrow-prev">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                    >
                      <path
                        d="M7.60 13.17C8.62 8.85..."
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
      </div>
    </section>
  );
};

export default TestimonialSlider;
