// src/components/FeatureSection.js
import React from "react";

const features = [
  {
    title: "Free Shipping",
    description: "Shipping on your order. No extra charges for delivery.",
    image: "assets/img/feature/feature-1-1.jpg",
  },
  {
    title: "Secure Payments",
    description: "Our financial information is protected",
    image: "assets/img/feature/feature-1-2.jpg",
  },
  {
    title: "24 Hour Support",
    description: "We're here to help whenever you need us.",
    image: "assets/img/feature/feature-1-3.jpg",
  },
  {
    title: "Best Prices & Offers",
    description: "Provides unbeatable deals on a wide range of products",
    image: "assets/img/feature/feature-1-4.jpg",
  },
];

const Door = () => {
  return (
    <section className="mtfeature__area mtfeature__bg pb-50 pt-60 fix">
      <div className="container">
        <div className="row align-items-center">
          {features.map((feature, index) => (
            <div className="col-lg-3 col-md-4" key={index}>
              <div className="mtfeature__wrapper d-flex align-items-center">
                <div className="mtfeature__icon">
                  <img src={feature.image} alt={feature.title} />
                </div>
                <div className="mtfeature__content">
                  <h5 className="mtfeature__title">{feature.title}</h5>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Door;
