import React from "react";

const Newsletter = () => {
  return (
    <section
      className="mtnewslatter__area mtnewslatter__space p-relative fix mb-50"
      style={{ backgroundImage: "url('/assets/img/bg/newsletter-bg.jpg')" }}
    >
      {/* Shapes */}
      <div className="mtnewslatter__shape-wrap">
        <div className="mtnewslatter__shape">
          <img src="/assets/img/shape/newsla-1-2.png" alt="" />
        </div>
        <div className="mtnewslatter__shape-2">
          <img src="/assets/img/shape/newsla-1-1.png" alt="" />
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6">
            <div className="mtnewslatter__wrapper">
              <div className="mtnewslatter__item">
                <h3 className="mtnewslatter__title mb-10">Subscribe Newsletter</h3>
                <p className="mb-35">
                  Enjoy early access to sales, new product launches, expert advice, and special offers
                  delivered straight to your inbox.
                </p>
                <form>
                  <div className="mtnewslatter__subscribe p-relative">
                    <input type="email" placeholder="Enter Your Email" />
                    <button type="submit" className="mt-btn">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6">
            <div className="mtnewslatter__wrappers text-end mt-20">
              <div className="mtnewslatter__thumb">
                <img src="/assets/img/newslatter/newslatter-1.png" alt="Rosun" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
