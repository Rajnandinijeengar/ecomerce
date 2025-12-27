import React, { useState } from "react";

const PriceFilter = () => {
  const [price, setPrice] = useState([10, 500]); // min & max price
  const min = 0;
  const max = 1000;

  const handleChange = (e, index) => {
    const value = Number(e.target.value);
    const newPrice = [...price];
    newPrice[index] = value;
    setPrice(newPrice);
  };

  const handleFilter = () => {
    alert(`Filter applied for price: $${price[0]} - $${price[1]}`);
  };

  // Compute percentage positions for gradient
  const percent1 = ((price[0] - min) / (max - min)) * 100;
  const percent2 = ((price[1] - min) / (max - min)) * 100;

  return (
    <div className="mt-shop-widget mb-50">
      <h3 className="mt-shop-widget-title no-border">Filter by Price</h3>
      <div className="mt-shop-widget-content">
        <div className="mt-shop-widget-filter">
          {/* Min price */}
          <input
            type="range"
            min={min}
            max={max}
            value={price[0]}
            onChange={(e) => handleChange(e, 0)}
            style={{
              background: `linear-gradient(to right, #17AF26 0%, #17AF26 ${percent1}%, #ddd ${percent1}%, #ddd 100%)`,
            }}
          />
          {/* Max price */}
          <input
            type="range"
            min={min}
            max={max}
            value={price[1]}
            onChange={(e) => handleChange(e, 1)}
            style={{
              background: `linear-gradient(to right, #17AF26 0%, #17AF26 ${percent2}%, #ddd ${percent2}%, #ddd 100%)`,
            }}
          />

          <div className="mt-shop-widget-filter-info d-flex align-items-center justify-content-between mt-2">
            <span className="input-range">
              ${price[0]} - ${price[1]}
            </span>
            <button
              className="mt-shop-widget-filter-btn"
              type="button"
              onClick={handleFilter}
            >
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
