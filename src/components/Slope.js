import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";

const blogPosts = [
  {
    date: "24",
    month: "Mar",
    categories: ["Organic", "Grocery"],
    title: "How to find Best Quality Fresh Meat & Seafood",
    img: "assets/img/blog/blog-2-1.jpg",
  },
  {
    date: "24",
    month: "Mar",
    categories: ["Organic", "Grocery"],
    title: "Fuel Your Life Healthy Eating Starts Here",
    img: "assets/img/blog/blog-2-2.jpg",
  },
  {
    date: "24",
    month: "Mar",
    categories: ["Organic", "Grocery"],
    title: "Elevate Your Everyday with Our Grocery Selection",
    img: "assets/img/blog/blog-2-3.jpg",
  },
  {
    date: "24",
    month: "Mar",
    categories: ["Organic", "Grocery"],
    title: "Your Pantry's New Grocery Shopping Made Easy",
    img: "assets/img/blog/blog-2-4.jpg",
  },
];

const Slope = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      className="mtblog__area mtblog__2 p-relative fix pt-70 pb-75"
      style={{ backgroundImage: "url('assets/img/bg/blog-bg-2-1.jpg')" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="mt-section-content mb-30">
              <h3 className="mt-section-title">
                Read Our <span>Articles</span>{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                  >
                    <path
                      d="M9 1.82196L10.429 6.82929L10.5619 7.29477L11.0314 7.17707L16.0824 5.91098L12.4604 9.65222L12.1237 10L12.4604 10.3478L16.0824 14.089L11.0314 12.8229L10.5619 12.7052L10.429 13.1707L9 18.178L7.57097 13.1707L7.43813 12.7052L6.9686 12.8229L1.91761 14.089L5.53957 10.3478L5.87627 10L5.53957 9.65222L1.91761 5.91098L6.9686 7.17707L7.43813 7.29477L7.57097 6.82929L9 1.82196Z"
                      fill="#FDD057"
                      stroke="#060121"
                    />
                  </svg>
                </span>
              </h3>
              <p>
                Dive into a world of knowledge and inspiration with our
                informative articles.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex justify-content-lg-end p-relative mb-30">
              <button ref={prevRef} className="prev-btn">
                ❮
              </button>
              <button ref={nextRef} className="next-btn">
                ❯
              </button>
            </div>
          </div>
        </div>

        <div className="mtblog__wrapper">
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
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            className="mt-blog-slider-active"
          >
            {blogPosts.map((post, index) => (
              <SwiperSlide key={index}>
                <div
                  className="mtblog__item mtblog__item-bg mtblog__item-border p-relative"
                  style={{ backgroundImage: `url(${post.img})` }}
                >
                  <div className="mtblog__content">
                    <div className="mtblog__date">
                      <span>{post.date}</span>
                      <p>{post.month}</p>
                    </div>
                    <div className="mtblog__sep"></div>
                    <div className="mtblog__meta mb-6">
                      {post.categories.map((cat, i) => (
                        <span key={i}>
                          <a href="s">{cat}</a>
                        </span>
                      ))}
                    </div>
                    <h4 className="mtblog__title">
                      <a href="blog-details.html">{post.title}</a>
                    </h4>
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

export default Slope;
