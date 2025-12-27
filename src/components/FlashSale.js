import React, { useState } from "react";

const FlashSale = () => {
  const [activeTab, setActiveTab] = useState("mt-flashs1");

  const tabs = [
    { id: "mt-flashs1", label: "Milk & Sugar" },
    { id: "mt-flashs2", label: "Grocery Items" },
    { id: "mt-flashs3", label: "Meat & Chicken" },
    { id: "mt-flashs4", label: "Fresh Vegetables" },
    { id: "mt-flashs5", label: "Organic Food" },
  ];

  return (
    <div className="mttop__product-main mttop__product-flash-main mb-75">
      <div className="cols">
        <div className="mttop__product-category">
          <div className="mttop__product-category-wrap mb-25">
            <h3 className="mttop__product-cattitle">Flash Sale</h3>
          </div>

          <div className="mttop__product-categories-item">
            <ul
              className="flex-column nav-pills mb-65"
              id="v-pills-tab1"
              role="tablist"
            >
              {tabs.map((tab) => (
                <li
                  key={tab.id}
                  className={`nav-link mt-cat-sale ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                  role="tab"
                  style={{ cursor: "pointer" }}
                >
                  {tab.label}
                </li>
              ))}
            </ul>

            {/* Slider buttons */}
            <div className="mtflashsale__product-slider-wrap">
              <div className="mtflashsale__product-slider-left">
                <span>
                  <i className="fa-regular fa-angle-left"></i>
                </span>
              </div>
              <div className="mtflashsale__product-slider-right">
                <span>
                  <i className="fa-regular fa-angle-right"></i>
                </span>
              </div>
            </div>

         
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
