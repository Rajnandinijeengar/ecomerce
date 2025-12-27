import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import "./WeeklyHotDeals.css"; // optional custom CSS

const products = [
  { id: 1, title: "Local Organic Green Broccoli", img: "assets/img/product/week-1-1.jpg", price: 10, oldPrice: 18, discount: "10% OFF", countdownDate: "Nov 19 2025 20:20:22" },
  { id: 2, title: "Fresh Packaged Red Tomato", img: "assets/img/product/week-1-2.jpg", price: 16, oldPrice: 23, discount: "10% OFF", countdownDate: "Nov 19 2025 20:20:22" },
  { id: 3, title: "Organic Creamy Yellow Banana", img: "assets/img/product/week-1-3.jpg", price: 19, oldPrice: 28, discount: "10% OFF", countdownDate: "Nov 19 2025 20:20:22" },
  { id: 4, title: "Tropical Yellow Pineapple", img: "assets/img/product/week-1-4.jpg", price: 10, oldPrice: 15, discount: "10% OFF", countdownDate: "Nov 19 2025 20:20:22" },
];

const WeeklyHotDeals = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const countdown = new Date(products[0].countdownDate) - now; // use first product as reference
      if (countdown <= 0) {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
        clearInterval(interval);
        return;
      }
      const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
      const hours = Math.floor((countdown / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((countdown / (1000 * 60)) % 60);
      const secs = Math.floor((countdown / 1000) % 60);
      setTimeLeft({ days, hours, mins, secs });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mtweek__product-area p-relative fix pt-70 pb-45">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <h3 className="mt-section-title">
              Weekly <span>Hot Deals</span>
            </h3>
          </div>
          <div className="col-lg-6 col-md-6 d-flex justify-content-end">
            <div className="swiper-button-prev custom-prev"></div>
            <div className="swiper-button-next custom-next"></div>
          </div>
        </div>
      </div>

      <div className="mtweek__product-wrapper mt-30">
        <Swiper
          spaceBetween={1}
          slidesPerView={4}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="mtweek__product-wrap p-relative">
                <div className="mtweek__product-item d-flex align-items-center">
                  <div className="mtweek__product-img mb-15">
                    <div className="mtweek__product-offer">
                      <span>{product.discount}</span>
                    </div>
                    <a href="product-details.html">
                      <img src={product.img} alt={product.title} />
                    </a>
                  </div>
                  <div className="mtweek__product-content text-start">
                    <h5 className="mtfeature__product-title">
                      <a href="product-details.html">{product.title}</a>
                    </h5>

                    {/* Countdown */}
                    <div className="mtweek__product-countdown mb-15">
                      <div className="countdown d-flex align-items-center">
                        <div className="mtweek__product-countdown-item">
                          <span className="countdown-value">{timeLeft.days ?? "00"}</span>
                          <span className="countdown-label">DAYS</span>
                        </div>
                        <div className="countdown-separator">:</div>
                        <div className="mtweek__product-countdown-item">
                          <span className="countdown-value">{timeLeft.hours ?? "00"}</span>
                          <span className="countdown-label">Hours</span>
                        </div>
                        <div className="countdown-separator">:</div>
                        <div className="mtweek__product-countdown-item">
                          <span className="countdown-value">{timeLeft.mins ?? "00"}</span>
                          <span className="countdown-label">Mins</span>
                        </div>
                        <div className="countdown-separator">:</div>
                        <div className="mtweek__product-countdown-item">
                          <span className="countdown-value">{timeLeft.secs ?? "00"}</span>
                          <span className="countdown-label">Secs</span>
                        </div>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="mtweek__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
                      <div className="mtweek__product-price">
                        <span>${product.price.toFixed(2)}</span>
                        <del>${product.oldPrice.toFixed(2)}</del>
                      </div>
                      <div className="mtweek__product-cart">
                        <a href="cart.html">
                          <i className="fa-solid fa-basket-shopping"></i>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WeeklyHotDeals;
