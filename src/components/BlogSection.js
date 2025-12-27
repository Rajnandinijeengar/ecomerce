import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // ✅ Correct import
import "swiper/css";
import "swiper/css/navigation";

const BlogSection = () => {
  return (
    <section className="mtblog__area p-relative fix pt-115 pb-120">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Title Section */}
          <div className="col-lg-6 col-md-8">
            <div className="mt-section-content mb-30">
              <h3 className="mt-section-title">
                Read Our <span>Articles</span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20">
                    <path
                      d="M9 1.82196L10.429..."
                      fill="#FDD057"
                      stroke="#060121"
                    />
                  </svg>
                </span>
              </h3>
              <p>
                Dive into a world of knowledge and inspiration with our informative articles.
              </p>
            </div>
          </div>

          {/* Arrows */}
          <div className="col-lg-6 col-md-4">
            <div className="p-relative">
              <div className="mtblog__arrow mb-30 d-flex justify-content-md-end">
                <div className="mtblog__arrow-next blog-next">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14">
                      <path d="M7.39367 0.820693C6.37396..." stroke="#060121" strokeWidth="2"/>
                    </svg>
                  </span>
                </div>
                <div className="mtblog__arrow-prev blog-prev">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14">
                      <path d="M7.60633 13.1793C8.62604..." stroke="#060121" strokeWidth="2"/>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="mtblog__wrapper">
          <Swiper
            modules={[Navigation]} // ✅ Use modules array
            navigation={{
              nextEl: ".blog-next",
              prevEl: ".blog-prev",
            }}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            className="mt-blog-slider-active"
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="mtblog__item p-relative">
                <div className="mtblog__thumb br-8 mb-10 p-relative">
                  <a href="blog-details.html">
                    <img src="/assets/img/blog/blog-1-1.jpg" alt="Blog" />
                  </a>
                  <div className="mtblog__date">
                    <span><i className="fa-regular fa-calendar-days"></i> 24 Mar 2025</span>
                  </div>
                </div>
                <div className="mtblog__content">
                  <div className="mtblog__meta mb-6">
                    <span><i className="fa-light fa-user"></i> By Mitchel</span>
                    <cite>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20">
                        <path d="M9 1.82196L10.429..." fill="#FDD057" stroke="#060121"/>
                      </svg>
                    </cite>
                    <span><i className="fa-sharp fa-light fa-comment"></i> 24 Comments</span>
                  </div>
                  <h4 className="mtblog__title mb-20">
                    <a href="blog-details.html">How to find Best Quality Fresh Meat & Seafood</a>
                  </h4>
                  <div className="mtblog__btn">
                    <a href="blog-details.html">
                      Read More <i className="fa-regular fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="mtblog__item p-relative">
                <div className="mtblog__thumb br-8 mb-10 p-relative">
                  <a href="blog-details.html">
                    <img src="/assets/img/blog/blog-1-2.jpg" alt="Blog" />
                  </a>
                  <div className="mtblog__date">
                    <span><i className="fa-regular fa-calendar-days"></i> 24 Mar 2025</span>
                  </div>
                </div>
                <div className="mtblog__content">
                  <div className="mtblog__meta mb-6">
                    <span><i className="fa-light fa-user"></i> By Mitchel</span>
                    <cite>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20">
                        <path d="M9 1.82196L10.429..." fill="#FDD057" stroke="#060121"/>
                      </svg>
                    </cite>
                    <span><i className="fa-sharp fa-light fa-comment"></i> 24 Comments</span>
                  </div>
                  <h4 className="mtblog__title mb-20">
                    <a href="blog-details.html">Fuel Your Life Healthy Eating Starts Here</a>
                  </h4>
                  <div className="mtblog__btn">
                    <a href="blog-details.html">
                      Read More <i className="fa-regular fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="mtblog__item p-relative">
                <div className="mtblog__thumb br-8 mb-10 p-relative">
                  <a href="blog-details.html">
                    <img src="/assets/img/blog/blog-1-3.jpg" alt="Blog" />
                  </a>
                  <div className="mtblog__date">
                    <span><i className="fa-regular fa-calendar-days"></i> 24 Mar 2025</span>
                  </div>
                </div>
                <div className="mtblog__content">
                  <div className="mtblog__meta mb-6">
                    <span><i className="fa-light fa-user"></i> By Mitchel</span>
                    <cite>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20">
                        <path d="M9 1.82196L10.429..." fill="#FDD057" stroke="#060121"/>
                      </svg>
                    </cite>
                    <span><i className="fa-sharp fa-light fa-comment"></i> 24 Comments</span>
                  </div>
                  <h4 className="mtblog__title mb-20">
                    <a href="blog-details.html">Elevate Your Everyday with Our Grocery Selection</a>
                  </h4>
                  <div className="mtblog__btn">
                    <a href="blog-details.html">
                      Read More <i className="fa-regular fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Add more slides here if needed */}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
