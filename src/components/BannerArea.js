import React from "react";

function BannerArea() {
  const banners = [
    {
      subtitle: "New Arrival",
      title: "20% Off",
      description: "Organic Vegetable \n and fruits",
      img: "assets/img/banner/banner-4-1.jpg",
      delayWrapper: "0.1s",
      delayItem: "0.5s",
    },
    {
      subtitle: "Hot Sales",
      title: "30% Off",
      description: "Hand Made local juice \n and bevargae",
      img: "assets/img/banner/banner-4-2.jpg",
      delayWrapper: "0.5s",
      delayItem: "0.7s",
    },
    {
      subtitle: "Today Deals",
      title: "10% Off",
      description: "Organic Red Tomato \n and cabbage",
      img: "assets/img/banner/banner-4-3.jpg",
      delayWrapper: "0.7s",
      delayItem: "0.9s",
    },
  ];

  return (
    <section className="mtbanner__area mtbanner__4 pb-40 pt-45 p-relative fix">
      <div className="container">
        <div className="row">
          {banners.map((banner, index) => (
            <div className="col-lg-4 col-md-6 mb-30" key={index}>
              <div
                className="mtbanner__wrapper p-relative wow img-custom-anim-left"
                data-wow-duration="1.5s"
                data-wow-delay={banner.delayWrapper}
                style={{ backgroundImage: `url(${banner.img})`, backgroundSize: "cover" }}
              >
                <div
                  className="mtbanner__item wow img-custom-anim-left"
                  data-wow-duration="1.5s"
                  data-wow-delay={banner.delayItem}
                >
                  <h5 className="mtbanner__subtitle">{banner.subtitle}</h5>
                  <h3 className="mtbanner__title">{banner.title}</h3>
                  <p className="mb-25">
                    {banner.description.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                  <div className="mtbanner__btn">
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
}

export default BannerArea;
