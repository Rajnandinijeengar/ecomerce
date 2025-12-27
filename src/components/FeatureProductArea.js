import React from "react";

const products = [
  {
    offer: "70% OFF",
    img: "assets/img/product/feature-2-1.png",
    category: ["1Kg", "500Kg"],
    title: "local organic Green Broccoli",
    rating: 3,
    price: 29,
    delPrice: 26,
    hasFlash: false,
  },
  {
    offer: null,
    img: "assets/img/product/feature-2-2.png",
    category: ["1Kg", "500Kg"],
    title: "Fresh packaged Red Tomato",
    rating: 3,
    price: 19,
    delPrice: 26,
    hasFlash: false,
  },
  {
    offer: null,
    img: "assets/img/product/feature-2-3.png",
    category: ["1Kg", "500Kg"],
    title: "local organic Green Broccoli",
    rating: 3,
    price: 9,
    delPrice: 13,
    hasFlash: true,
  },
  {
    offer: null,
    img: "assets/img/product/feature-2-4.png",
    category: ["1Kg", "500Kg"],
    title: "White Pumpkin - Each (appr 1.5 LB-2 LB)",
    rating: 3,
    price: 19,
    delPrice: 26,
    hasFlash: false,
  },
  {
    offer: "70% OFF",
    img: "assets/img/product/feature-2-5.png",
    category: ["1Kg", "500Kg"],
    title: "Palak Green (Spinach) - Bunch Organic",
    rating: 3,
    price: 4,
    delPrice: 9,
    hasFlash: false,
  },
  {
    offer: null,
    img: "assets/img/product/feature-2-6.png",
    category: ["1Kg", "500Kg"],
    title: "Gerber Organic 2nd Foods Cucumber",
    rating: 3,
    price: 11,
    delPrice: 15,
    hasFlash: false,
  },
  {
    offer: null,
    img: "assets/img/product/feature-2-7.png",
    category: ["1Kg", "500Kg"],
    title: "local organic Green Broccoli",
    rating: 3,
    price: 14,
    delPrice: 19,
    hasFlash: true,
  },
  {
    offer: "70% OFF",
    img: "assets/img/product/feature-2-8.png",
    category: ["1Kg", "500Kg"],
    title: "Organic Campa Yellow Bananas",
    rating: 3,
    price: 19,
    delPrice: 26,
    hasFlash: false,
  },
  {
    offer: "70% OFF",
    img: "assets/img/product/feature-2-9.png",
    category: ["1Kg", "500Kg"],
    title: "Cauliflower - Each APPROX 1.5 Lb",
    rating: 3,
    price: 22,
    delPrice: 29,
    hasFlash: false,
  },
  {
    offer: null,
    img: "assets/img/product/feature-2-10.png",
    category: ["1Kg", "500Kg"],
    title: "Tropical Local Yellow Pineapple",
    rating: 3,
    price: 29,
    delPrice: 26,
    hasFlash: false,
  },
];

function FeatureProductArea() {
  return (
    <section
      className="mtfeature__product-area mtfeature__product-2 pt-40 pb-75 p-relative fix"
      style={{ backgroundImage: "url('assets/img/bg/feature-bg-2-1.png')" }}
    >
      <div className="container">
        <div className="mt-section-content text-center mb-50">
          <h3 className="mt-section-title">
            <span>
              {/* SVG left */}
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
            Featured <span>Products</span>
            <span>
              {/* SVG right */}
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
            Discover our handpicked selection of top-rated and trending <br />
            items. Limited time offers and exclusive deals await!
          </p>
        </div>

        <div className="mtfeature__product-wrapper">
          <div className="mtfeature__product-cols">
            {products.map((product, index) => (
              <div className="mtfeature__product-item p-relative fix" key={index}>
                {product.offer && (
                  <div className="mtfeature__product-offer">
                    <span>{product.offer}</span>
                  </div>
                )}
                {product.hasFlash && (
                  <div className="mtfeature__product-category">
                    <span>Flash</span>
                  </div>
                )}
                <div className="mtfeature__product-img mb-15">
                  <div className="mtfeature__product-wishlist">
                    <a href="wishlist.html">
                      <i className="fa-regular fa-heart"></i>
                    </a>
                  </div>
                  <a href="product-details.html">
                    <img src={product.img} alt={product.title} />
                  </a>
                </div>
                <div className="mtfeature__product-content mb-15">
                  <div className="mtfeature__product-cate mb-10">
                    {product.category.map((cat, idx) => (
                      <span key={idx}>{cat}</span>
                    ))}
                  </div>
                  <h5 className="mtfeature__product-title">
                    <a href="product-details.html">{product.title}</a>
                  </h5>
                </div>
                <div className="mtfeature__product-rating mb-15">
                  {[...Array(5)].map((_, star) => (
                    <i
                      key={star}
                      className={
                        star < product.rating ? "fa-solid fa-star-sharp" : "fa-light fa-star"
                      }
                    ></i>
                  ))}
                </div>
                <div className="mtfeature__product-pricing-wrap pt-10 d-flex align-items-center justify-content-between">
                  <div className="mtfeature__product-price">
                    <span>${product.price.toFixed(2)}</span>
                    <del>${product.delPrice.toFixed(2)}</del>
                  </div>
                  <div className="mtfeature__product-cart">
                    <a href="cart.html">
                      <i className="fa-solid fa-basket-shopping"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureProductArea;
