import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules"; // Import navigation module

function ShopCategories() {
  const categories = [
    { img: "assets/img/category/cat-2-1.png", title: "Fresh Fruits", items: 16 },
    { img: "assets/img/category/cat-2-2.png", title: "Green Veggies", items: 29 },
    { img: "assets/img/category/cat-2-3.png", title: "Canned Goods", items: 105 },
    { img: "assets/img/category/cat-2-4.png", title: "Fresh Milk", items: 23 },
    { img: "assets/img/category/cat-2-5.png", title: "Snack Foods", items: 20 },
    { img: "assets/img/category/cat-2-3.png", title: "Cooking Oils", items: 39 },
    { img: "assets/img/category/cat-2-4.png", title: "Cooking Oils", items: 39 },
  ];

  return (
    <section className="mtshop__category-area pt-40 pb-55 p-relative fix">
      <div className="container">
        <div className="mtshop__category-2 p-relative">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <div className="mtshop__category-content mb-20 ml-30">
                <h3 className="mtshop__category-content-title mb-15">
                  Shop by <br /> Category
                </h3>
                <a href="shop.html" className="mtshop__category-content-btn">
                  View All <i className="fa-regular fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="mtshop__category-wrapper">
                <Swiper
                  spaceBetween={20}
                  slidesPerView={4}
                  navigation={{
                    nextEl: ".mtshop__category-arrow-right",
                    prevEl: ".mtshop__category-arrow-left",
                  }}
                  modules={[Navigation]}
                  className="mtshop__category_2_active"
                  loop={true}
                >
                  {categories.map((cat, index) => (
                    <SwiperSlide key={index}>
                      <div className="mtshop__category-item">
                        <a href="shop.html">
                          <img src={cat.img} alt={cat.title} />
                          <h5 className="mtshop__category-title">{cat.title}</h5>
                          <span>{cat.items} ITEMS</span>
                        </a>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            <div className="mtshop__category-arrow mtshop__category-arrow-2 mb-30 d-flex justify-content-end p-relative">
              <div className="mtshop__category-arrow-left mtshop__category-arrow">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                  >
                    <path
                      d="M7.39367 0.820693C6.37396 5.14484 1.88 6.84235 1.46856 6.98943C1.4577 6.99331 1.45706 7.00855 1.4676 7.01347C1.87294 7.20245 6.37316 9.37583 7.39367 13.1793M14.54 7.00001L2.62943 7.00001"
                      stroke="#060121"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
              </div>
              <div className="mtshop__category-arrow-right mtshop__category-arrow">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                  >
                    <path
                      d="M7.60633 13.1793C8.62604 8.85516 13.12 7.15765 13.5314 7.01057C13.5423 7.00669 13.5429 6.99145 13.5324 6.98653C13.1271 6.79755 8.62684 4.62417 7.60633 0.820679M0.459961 6.99999L12.3706 6.99999"
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
    </section>
  );
}

export default ShopCategories;
