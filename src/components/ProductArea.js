import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const ProductArea = () => {
  const bannerStyle = {
    backgroundImage: "url('assets/img/banner/hp-banner-1-1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const allProducts = [
    { id: 1, name: "Local Organic Green", img: "assets/img/product/hot-1-1.png", price: 16.0, delPrice: 20.0, offer: "70% OFF", rating: 5.0, weight: ["1Kg", "500g"] },
    { id: 2, name: "Juicy Sweet Mango", img: "assets/img/product/hot-1-2.png", price: 9.0, delPrice: 15.0, rating: 5.0, weight: ["1Kg", "500g"] },
    { id: 3, name: "Creamy Yellow Banana", img: "assets/img/product/hot-1-3.png", price: 19.0, delPrice: 26.0, rating: 5.0, weight: ["1Kg", "500g"] },
    { id: 4, name: "Fresh Broccoli", img: "assets/img/product/hot-1-4.png", price: 12.0, delPrice: 18.0, rating: 4.5, weight: ["1Kg", "500g"] },
  ];

  const vegetables = [
    { id: 5, name: "Local Organic Green", img: "assets/img/product/hot-1-1.png", price: 16.0, delPrice: 20.0, rating: 5.0, weight: ["1Kg", "500g"] },
    { id: 6, name: "Fresh Broccoli", img: "assets/img/product/hot-1-4.png", price: 12.0, delPrice: 18.0, rating: 4.5, weight: ["1Kg", "500g"] },
    { id: 7, name: "Carrot", img: "assets/img/product/hot-1-5.png", price: 8.0, delPrice: 12.0, rating: 4.0, weight: ["1Kg", "500g"] },
    { id: 8, name: "Cucumber", img: "assets/img/product/hot-1-6.png", price: 10.0, delPrice: 15.0, rating: 4.5, weight: ["1Kg", "500g"] },
  ];

  const freshFruits = [
    { id: 9, name: "Juicy Sweet Mango", img: "assets/img/product/hot-1-2.png", price: 9.0, delPrice: 15.0, rating: 5.0, weight: ["1Kg", "500g"] },
    { id: 10, name: "Creamy Yellow Banana", img: "assets/img/product/hot-1-3.png", price: 19.0, delPrice: 26.0, rating: 5.0, weight: ["1Kg", "500g"] },
    { id: 11, name: "Apple", img: "assets/img/product/hot-1-9.png", price: 14.0, delPrice: 18.0, rating: 4.5, weight: ["1Kg", "500g"] },
    { id: 12, name: "Grapes", img: "assets/img/product/hot-1-10.png", price: 11.0, delPrice: 16.0, rating: 4.0, weight: ["1Kg", "500g"] },
  ];

  const meats = [
    { id: 13, name: "Chicken Breast", img: "assets/img/product/hot-1-7.png", price: 20.0, delPrice: 25.0, rating: 4.5, weight: ["1Kg", "500g"] },
    { id: 14, name: "Pork Loin", img: "assets/img/product/hot-1-11.png", price: 18.0, delPrice: 23.0, rating: 4.0, weight: ["1Kg", "500g"] },
    { id: 15, name: "Beef Steak", img: "assets/img/product/hot-1-12.png", price: 22.0, delPrice: 28.0, rating: 4.5, weight: ["1Kg", "500g"] },
    { id: 16, name: "Turkey", img: "assets/img/product/hot-1-13.png", price: 19.0, delPrice: 24.0, rating: 4.0, weight: ["1Kg", "500g"] },
  ];

  const dairies = [
    { id: 17, name: "Milk Bottle", img: "assets/img/product/hot-1-8.png", price: 5.0, delPrice: 6.0, rating: 5.0, weight: ["1L", "500ml"] },
    { id: 18, name: "Cheese", img: "assets/img/product/hot-1-14.png", price: 8.0, delPrice: 10.0, rating: 4.5, weight: ["200g", "500g"] },
   
  ];

  const renderProducts = (products) =>
    products.map((product) => (
      <SwiperSlide key={product.id}>
        <div className="mthot__product-item-wrap">
          <div className="mthot__product-item p-relative fix">
            <div className="mthot__product-img mb-10">
              <a href="product-details.html">
                <img src={product.img} alt={product.name} />
              </a>
              {product.offer && (
                <div className="mtfeature__product-offer">
                  <span>{product.offer}</span>
                </div>
              )}
              <div className="mthot__product-wishlist">
                <a href="wishlist.html">
                  <i className="fa-regular fa-heart"></i>
                </a>
              </div>
            </div>

            <div className="mthot__product-content">
              <div className="mthot__product-ratcat mb-10 d-flex align-items-center justify-content-between">
                <div className="mthot__product-cate">
                  {product.weight.map((w, i) => (
                    <span key={i}>{w}</span>
                  ))}
                </div>
                <div className="mtflash__product-ratting">
                  <span className="mtflash__product-ricon">
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span className="mtflash__product-review-number">
                    ({product.rating.toFixed(1)})
                  </span>
                </div>
              </div>
              <h6 className="mthot__product-title mb-30">
                <a href="product-details.html">{product.name}</a>
              </h6>
              <div className="mthot__product-price-wrap d-flex align-items-center justify-content-between">
                <div className="mthot__product-price">
                  <span>${product.price.toFixed(2)}</span>
                  {product.delPrice && <del>${product.delPrice.toFixed(2)}</del>}
                </div>
                <div className="mthot__product-cart">
                  <a href="cart.html">
                    <i className="fa-solid fa-basket-shopping"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ));

  const tabs = [
    { id: "mttop-cat1", products: allProducts },
    { id: "mttop-cat2", products: vegetables },
    { id: "mttop-cat3", products: freshFruits },
    { id: "mttop-cat4", products: meats },
    { id: "mttop-cat5", products: dairies },
  ];

  return (
    <section className="mtpopular__product-area mtpopular__product-2 pt-75 pb-70 p-relative fix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="mt-section-content mb-30">
              <h3 className="mt-section-title">
                Popular <span>Products</span>
              </h3>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mtpopular__product-tab text-end">
              <ul className="nav nav-pills mb-3" role="tablist">
                {tabs.map((tab, i) => (
                  <li className="nav-item" role="presentation" key={i}>
                    <button
                      className={`nav-link ${i === 0 ? "active" : ""}`}
                      data-bs-toggle="pill"
                      data-bs-target={`#${tab.id}`}
                      type="button"
                      role="tab"
                    >
                      {i === 0
                        ? "View All"
                        : i === 1
                        ? "Vegetable"
                        : i === 2
                        ? "Fresh Fruit"
                        : i === 3
                        ? "Meats"
                        : "Dairies"}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mtpopular__product-main-wrap p-relative d-flex mt-5">
          <div className="mtpopular__product-banner col-md-3" style={bannerStyle}>
            <div className="mtpopular__product-text">
              <h3 className="mtpopular__product-bannertitle">Hurry Up</h3>
              <h5 className="mtpopular__product-bannersubtitle">
                <span>50% Off</span> Today
              </h5>
            </div>
          </div>

          <div className="col-md-9">
            <div className="tab-content">
              {tabs.map((tab, i) => (
                <div
                  key={i}
                  className={`tab-pane ${i === 0 ? "show active" : ""}`}
                  id={tab.id}
                >
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={30}
                    slidesPerView={4}
                  >
                    {renderProducts(tab.products)}
                  </Swiper>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductArea;
