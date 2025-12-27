import React from "react";

const banners = [
  {
    subtitle: "New Arrival",
    title: "Organic raw green \nbeans & seed",
    discountText: "Get 40% discount for new arrival",
    btnLink: "shop.html",
    btnText: "Shop Now",
    bannerImg: "assets/img/banner/banner-1-1.png",
    bgImg: "assets/img/banner/banner-bg-1-1.jpg",
  },
  {
    subtitle: "Hot Deals",
    title: "Organic Fruits and vegetables",
    discountText: "Get 30% discount for new arrival",
    btnLink: "shop.html",
    btnText: "Shop Now",
    bannerImg: "assets/img/banner/banner-1-2.png",
    bgImg: "assets/img/banner/banner-bg-1-2.jpg",
  },
];

function Banner() {
  return (
    <section className="mtbanner__area pb-40 pt-40 p-relative fix">
      <div className="container">
        <div className="row align-items-center align-items-xl-end">
          {banners.map((banner, index) => (
            <div className="col-lg-6 mb-30" key={index}>
              <div className="mtbanner__wrapper p-relative">
                <div
                  className="mtbanner__item d-flex"
                  style={{ backgroundImage: `url(${banner.bgImg})` }}
                >
                  <div className="mtbanner__content wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.1s">
                    <h5 className="mtbanner__subtitle mb-10">
                      <img src="assets/img/icon/star-icon-3.svg" alt="" />
                      <span>{banner.subtitle}</span>
                      <img src="assets/img/icon/star-icon-3.svg" alt="" />
                    </h5>
                    <h3 className="mtbanner__title mb-20">
                      {banner.title.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </h3>
                    <p>{banner.discountText}</p>
                    <div className="mtbanner__btn mt-30">
                      <a href={banner.btnLink} className="mt-btn">
                        <i className="fa-solid fa-basket-shopping"></i>{" "}
                        <span>{banner.btnText}</span>
                      </a>
                    </div>
                  </div>
                  <div className="mtbanner__img wow img-custom-anim-right" data-wow-duration="1.5s" data-wow-delay="0.1s">
                    <img src={banner.bannerImg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Banner;
