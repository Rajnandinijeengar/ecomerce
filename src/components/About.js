// BannerSection.js
import React from "react";

const About = () => {
  const banners = [
    {
      id: 1,
      discount: "20% off",
      title: "Daily Breakfast Items & Beverages",
      bgImage: "/assets/img/banner/banner-3-1.png",
      btnDelay: "0.5s",
    },
    {
      id: 2,
      discount: "40% off",
      title: "Healthy organic dry gains foods",
      bgImage: "/assets/img/banner/banner-3-2.png",
      btnDelay: "0.5s",
    },
    {
      id: 3,
      discount: "30% Off",
      title: "New Pet Arrivals Food & Accessories",
      bgImage: "/assets/img/banner/banner-3-3.png",
      btnDelay: "0.9s",
    },
  ];

  return (
    <section
      className="mtbanner__area mtbanner__3 pb-50 pt-60 p-relative fix"
      style={{ backgroundImage: "url('/assets/img/banner/banner-bg-3-1.png')" }}
    >
      <div className="container">
        <div className="row">
          {banners.map((banner) => (
            <div key={banner.id} className="col-lg-4 mb-30">
              <div
                className="mtbanner__wrapper p-relative wow img-custom-anim-left"
                data-wow-duration="1.5s"
                data-wow-delay="0.1s"
                style={{ backgroundImage: `url('${banner.bgImage}')` }}
              >
                <div
                  className="mtbanner__item wow img-custom-anim-left"
                  data-wow-duration="1.5s"
                  data-wow-delay={banner.btnDelay}
                >
                  <h5 className="mtbanner__subtitle mb-10">{banner.discount}</h5>
                  <h3 className="mtbanner__title mb-10">{banner.title}</h3>
                  <div className="mtbanner__btn mt-30">
                    <a href="shop.html">
                      Buy Now <span><i className="fa-solid fa-circle-chevron-right"></i></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
