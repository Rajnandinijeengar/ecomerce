import React from "react";

const features = [
  {
    img: "assets/img/feature/feature-1-1.jpg",
    title: "Free Shipping",
    desc: "shipping on your order. No extra charges for delivery.",
  },
  {
    img: "assets/img/feature/feature-1-2.jpg",
    title: "Secure Payments",
    desc: "our financial information is protected",
  },
  {
    img: "assets/img/feature/feature-1-3.jpg",
    title: "24 Hour Support",
    desc: "We're here to help whenever you need us.",
  },
  {
    img: "assets/img/feature/feature-1-4.jpg",
    title: "Best Prices & Offers",
    desc: "Provides unbeatable deals on a wide range of products",
  },
];

const Blank = () => {
  return (
    <section className="mtfeature__area mtfeature__bg pb-50 pt-60 fix">
      <div className="container">
        <div className="row align-items-center">
          {features.map((feature, index) => (
            <div className="col-lg-3 col-md-4" key={index}>
              <div className="mtfeature__wrapper d-flex align-items-center">
                <div className="mtfeature__icon">
                  <img src={feature.img} alt={feature.title} />
                </div>
                <div className="mtfeature__content">
                  <h5 className="mtfeature__title">{feature.title}</h5>
                  <p>
                    {feature.desc.split("<br>").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blank;
