import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
const RelatedProducts = () => {
  return (
    <section className="mtpopular__product-area mtpopular__product-2 pt-80 pb-50 p-relative fix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="mt-section-content mb-30">
              <h3 className="mt-section-title">
                Related
                <span>Products</span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                    <path
                      d="M9 1.82196L10.429 6.82929L10.5619 7.29477L11.0314 7.17707L16.0824 5.91098L12.4604 9.65222L12.1237 10L12.4604 10.3478L16.0824 14.089L11.0314 12.8229L10.5619 12.7052L10.429 13.1707L9 18.178L7.57097 13.1707L7.43813 12.7052L6.9686 12.8229L1.91761 14.089L5.53957 10.3478L5.87627 10L5.53957 9.65222L1.91761 5.91098L6.9686 7.17707L7.43813 7.29477L7.57097 6.82929L9 1.82196Z"
                      fill="#FDD057"
                      stroke="#060121"
                    />
                  </svg>
                </span>
              </h3>
              <p>
                Emphasize the main features that make the related products <br />
                appealing. Mention any unique selling points or benefits.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mtpopular__product-arrow text-end">
              <div className="mtpopular__product-slider-left1">
                <span>◀</span>
              </div>
              <div className="mtpopular__product-slider-right1">
                <span>▶</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mtpopular__product-wrap">
          <Swiper
            modules={[Navigation]}
            slidesPerView={5}
            spaceBetween={30}
            navigation={{
              prevEl: ".mtpopular__product-slider-left1",
              nextEl: ".mtpopular__product-slider-right1",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
            }}
            className="swiper mtpopular_product_2_active"
          >

            {/* ===== PRODUCT 1 ===== */}
            <SwiperSlide>
              <div className="mthot__product-item-wrap ">
                <div className="mthot__product-item p-relative fix">
                  <div className="mthot__product-img mb-10">
                    <div className="mtfeature__product-offer">
                      <span>70% OFF</span>
                    </div>
                    <a href="a"><img src="http://localhost:3000/assets/img/product/hot-1-1.png" alt="" /></a>
                    <div className="mthot__product-wishlist">
                      <a href="b"><i className="fa-regular fa-heart"></i></a>
                    </div>
                  </div>
                  <div className="mthot__product-content">
                    <div className="mthot__product-ratcat mb-10 d-flex align-items-center justify-content-between">
                      <div className="mthot__product-cate">
                        <span>1Kg</span>
                        <span>500Kg</span>
                      </div>
                      <div className="mtflash__product-ratting">
                        <i className="fa-solid fa-star"></i>
                        <span>(5.0)</span>
                      </div>
                    </div>
                    <h6 className="mthot__product-title mb-30">
                      <a href="c">Local Organic Green</a>
                    </h6>
                    <div className="mthot__product-price-wrap d-flex align-items-center justify-content-between">
                      <div className="mthot__product-price">
                        <span>$16.00</span>
                        <del>$20.00</del>
                      </div>
                      <div className="mthot__product-cart">
                        <a href="d"><i className="fa-solid fa-basket-shopping"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* ===== PRODUCT 2 ===== */}
            <SwiperSlide>
              <div className="mthot__product-item-wrap ">
                <div className="mthot__product-item p-relative fix">
                  <div className="mthot__product-img mb-10">
                    <a href="e"><img src="http://localhost:3000/assets/img/product/hot-1-2.png" alt="" /></a>
                    <div className="mthot__product-wishlist">
                      <a href="d"><i className="fa-regular fa-heart"></i></a>
                    </div>
                  </div>
                  <div className="mthot__product-content">
                    <div className="mthot__product-ratcat mb-10 d-flex align-items-center justify-content-between">
                      <div className="mthot__product-cate">
                        <span>1Kg</span>
                        <span>500Kg</span>
                      </div>
                      <div className="mtflash__product-ratting">
                        <i className="fa-solid fa-star"></i>
                        <span>(5.0)</span>
                      </div>
                    </div>
                    <h6 className="mthot__product-title mb-30">
                      <a href="g">Juicy Sweet Mango</a>
                    </h6>
                    <div className="mthot__product-price-wrap d-flex align-items-center justify-content-between">
                      <div className="mthot__product-price">
                        <span>$9.00</span>
                        <del>$15.00</del>
                      </div>
                      <div className="mthot__product-cart">
                        <a href="a"><i className="fa-solid fa-basket-shopping"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
  <div className="mthot__product-item-wrap ">
    <div className="mthot__product-item p-relative fix">
      <div className="mthot__product-img mb-10">
        <a href="a"><img src="http://localhost:3000/assets/img/product/hot-1-3.png" alt="" /></a>
        <div className="mthot__product-wishlist">
          <a href="b"><i className="fa-regular fa-heart"></i></a>
        </div>
      </div>
      <div className="mthot__product-content">
        <div className="mthot__product-ratcat mb-10 d-flex align-items-center justify-content-between">
          <div className="mthot__product-cate">
            <span>1Kg</span>
            <span>500Kg</span>
          </div>
          <div className="mtflash__product-ratting">
            <i className="fa-solid fa-star"></i>
            <span>(5.0)</span>
          </div>
        </div>
        <h6 className="mthot__product-title mb-30">
          <a href="c">Creamy Yellow Banana</a>
        </h6>
        <div className="mthot__product-price-wrap d-flex align-items-center justify-content-between">
          <div className="mthot__product-price">
            <span>$19.00</span>
            <del>$26.00</del>
          </div>
          <div className="mthot__product-cart">
            <a href="d"><i className="fa-solid fa-basket-shopping"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="mthot__product-item-wrap ">
    <div className="mthot__product-item p-relative fix">
      <div className="mthot__product-img mb-10">
        <a href="e"><img src="http://localhost:3000/assets/img/product/hot-1-4.png" alt="" /></a>
        <div className="mthot__product-wishlist">
          <a href="f"><i className="fa-regular fa-heart"></i></a>
        </div>
      </div>
      <div className="mthot__product-content">
        <div className="mthot__product-ratcat mb-10 d-flex align-items-center justify-content-between">
          <div className="mthot__product-cate">
            <span>1Kg</span>
            <span>500Kg</span>
          </div>
          <div className="mtflash__product-ratting">
            <i className="fa-solid fa-star"></i>
            <span>(5.0)</span>
          </div>
        </div>
        <h6 className="mthot__product-title mb-30">
          <a href="g">Red Seedless Grapes</a>
        </h6>
        <div className="mthot__product-price-wrap d-flex align-items-center justify-content-between">
          <div className="mthot__product-price">
            <span>$11.00</span>
            <del>$17.00</del>
          </div>
          <div className="mthot__product-cart">
            <a href="hh"><i className="fa-solid fa-basket-shopping"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="mthot__product-item-wrap ">
    <div className="mthot__product-item p-relative fix">
      <div className="mthot__product-img mb-10">
        <a href="j"><img src="http://localhost:3000/assets/img/product/hot-1-5.png" alt="" /></a>
        <div className="mthot__product-wishlist">
          <a href="k"><i className="fa-regular fa-heart"></i></a>
        </div>
      </div>
      <div className="mthot__product-content">
        <div className="mthot__product-ratcat mb-10 d-flex align-items-center justify-content-between">
          <div className="mthot__product-cate">
            <span>1Kg</span>
            <span>500Kg</span>
          </div>
          <div className="mtflash__product-ratting">
            <i className="fa-solid fa-star"></i>
            <span>(5.0)</span>
          </div>
        </div>
        <h6 className="mthot__product-title mb-30">
          <a href="l">Organic Yellow Bananas</a>
        </h6>
        <div className="mthot__product-price-wrap d-flex align-items-center justify-content-between">
          <div className="mthot__product-price">
            <span>$12.00</span>
            <del>$18.00</del>
          </div>
          <div className="mthot__product-cart">
            <a href="m"><i className="fa-solid fa-basket-shopping"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="mthot__product-item-wrap ">
    <div className="mthot__product-item p-relative fix">
      <div className="mthot__product-img mb-10">
        <div className="mtfeature__product-offer">
          <span>70% OFF</span>
        </div>
        <a href="a"><img src="http://localhost:3000/assets/img/product/hot-1-6.png" alt="" /></a>
        <div className="mthot__product-wishlist">
          <a href="b"><i className="fa-regular fa-heart"></i></a>
        </div>
      </div>
      <div className="mthot__product-content">
        <div className="mthot__product-ratcat mb-10 d-flex align-items-center justify-content-between">
          <div className="mthot__product-cate">
            <span>1Kg</span>
            <span>500Kg</span>
          </div>
          <div className="mtflash__product-ratting">
            <i className="fa-solid fa-star"></i>
            <span>(5.0)</span>
          </div>
        </div>
        <h6 className="mthot__product-title mb-30">
          <a href="c">Tropical Yellow Pineapple</a>
        </h6>
        <div className="mthot__product-price-wrap d-flex align-items-center justify-content-between">
          <div className="mthot__product-price">
            <span>$21.00</span>
            <del>$28.00</del>
          </div>
          <div className="mthot__product-cart">
            <a href="c"><i className="fa-solid fa-basket-shopping"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="mthot__product-item-wrap ">
    <div className="mthot__product-item p-relative fix">
      <div className="mthot__product-img mb-10">
        <a href="a"><img src="http://localhost:3000/assets/img/product/hot-1-7.png" alt="" /></a>
        <div className="mthot__product-wishlist">
          <a href="a"><i className="fa-regular fa-heart"></i></a>
        </div>
      </div>
      <div className="mthot__product-content">
        <div className="mthot__product-ratcat mb-10 d-flex align-items-center justify-content-between">
          <div className="mthot__product-cate">
            <span>1Kg</span>
            <span>500Kg</span>
          </div>
          <div className="mtflash__product-ratting">
            <i className="fa-solid fa-star"></i>
            <span>(5.0)</span>
          </div>
        </div>
        <h6 className="mthot__product-title mb-30">
          <a href="b">Tropical Pineapple</a>
        </h6>
        <div className="mthot__product-price-wrap d-flex align-items-center justify-content-between">
          <div className="mthot__product-price">
            <span>$16.00</span>
            <del>$20.00</del>
          </div>
          <div className="mthot__product-cart">
            <a href="c"><i className="fa-solid fa-basket-shopping"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>





            {/* ===== PRODUCT 3–7 EXACT SAME PATTERN ===== */}
            {/* hot-1-3.png → Creamy Yellow Banana */}
            {/* hot-1-4.png → Red Seedless Grapes */}
            {/* hot-1-5.png → Organic Yellow Bananas */}
            {/* hot-1-6.png → Tropical Yellow Pineapple (with offer) */}
            {/* hot-1-7.png → Tropical Pineapple */}

          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
