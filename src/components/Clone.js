// src/components/TestimonialSlider.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    text: "Roshun Grocery Shop is a fantastic local store! They have a great selection of fresh produce, quality meats, and a wide variety of pantry staples. The staff is friendly and helpful, and the prices are reasonable.",
    name: "Thomas Alison",
    role: "CEO and Founder",
    image: "assets/img/testimonial/author.jpg",
  },
  {
    text: "Great experience shopping here! Everything is fresh and high-quality. Staff is super friendly.",
    name: "Emily Sophia",
    role: "Marketing Head",
    image: "assets/img/testimonial/author.jpg",
  },
  {
    text: "I love this store! Clean, organized, and friendly staff. Always fresh products.",
    name: "Lucy Victoria",
    role: "Store Manager",
    image: "assets/img/testimonial/author.jpg",
  },
  {
    text: "Best grocery shop in town! Affordable, fresh, and excellent customer service.",
    name: "John Doe",
    role: "Customer",
    image: "assets/img/testimonial/author.jpg",
  },
];

const Clone = () => {
  return (
    <section
      className="mttestimonial__area mttestimonial__bg pt-90 pb-115 p-relative fix"
      style={{ backgroundImage: "url('assets/img/testimonial/testimonial-bg.jpg')" }}
    >
      <div className="container">
        <div className="mt-section-content mb-30 text-center">
          <h3 className="mt-section-title">
            <span>★</span> Clients <span>Testimonial</span> <span>★</span>
          </h3>
          <p>
            Hear what our satisfied customers have to say about their experience. Real people, real results.
          </p>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-swiper-next",
            prevEl: ".custom-swiper-prev",
          }}
          spaceBetween={30}
          slidesPerView={1} // change to 4 if you want 4 slides visible
          loop={true}
          className="mt-testimonial-active"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="mttestimonial__item p-relative fix text-center">
                <div className="mttestimonial__ratting mb-20">
                  {[...Array(5)].map((_, i) => (
                    <button key={i} className="star" aria-label="star">
                      <i className="fa-solid fa-star-sharp"></i>
                    </button>
                  ))}
                </div>
                <div className="mttestimonial__content">
                  <p>{item.text}</p>
                  <div className="mttestimonial__author mt-30 d-flex align-items-center justify-content-center">
                    <div className="mttestimonial__author-img">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="mttestimonial__author-text">
                      <h5 className="mttestimonial__author-title">{item.name}</h5>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          <div className="custom-swiper-next" style={arrowStyle}>
            <span style={innerArrowStyle}>❯</span>
          </div>
          <div className="custom-swiper-prev" style={arrowStyle}>
            <span style={innerArrowStyle}>❮</span>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

// Styles for arrows
const arrowStyle = {
  width: "30px",
  height: "30px",
  background: "#fdd057",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: "50%",
  zIndex: 10,
  cursor: "pointer",
  transform: "translateY(-50%)",
};

const innerArrowStyle = {
  fontSize: "16px",
  color: "#060121",
};

export default Clone;
