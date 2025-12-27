import React from "react";

const Eagle = () => {
  const features = [
    {
      id: 1,
      title: "Free Shipping",
      description: "shipping on your order. No \nextra charges for delivery.",
      img: "http://localhost:3000/assets/img/feature/feature-1-1.jpg",
    },
    {
      id: 2,
      title: "Secure Payments",
      description: "our financial information is \nprotected",
      img: "http://localhost:3000/assets/img/feature/feature-1-2.jpg",
    },
    {
      id: 3,
      title: "24 Hour Support",
      description: "We're here to help whenever \nyou need us.",
      img: "http://localhost:3000/assets/img/feature/feature-1-3.jpg",
    },
    {
      id: 4,
      title: "Best Prices & Offers",
      description: "Provides unbeatable deals \non a wide range of products",
      img: "http://localhost:3000/assets/img/feature/feature-1-4.jpg",
    },
  ];

  return (
    <section className="mtfeature__area mtfeature__bg pb-50 pt-60 fix">
      <div className="container">
        <div className="row align-items-center">
          {features.map((feature) => (
            <div key={feature.id} className="col-lg-3 col-md-4">
              <div className="mtfeature__wrapper d-flex align-items-center">
                <div className="mtfeature__icon">
                  <img src={feature.img} alt={feature.title} />
                </div>
                <div className="mtfeature__content">
                  <h5 className="mtfeature__title">{feature.title}</h5>
                  <p>
                    {feature.description.split("\n").map((line, index) => (
                      <React.Fragment key={index}>
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

export default Eagle;
