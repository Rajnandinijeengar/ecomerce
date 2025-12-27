import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Green flowering healthy broccoli",
    img: "assets/img/product/feature-1-9.png",
    offer: "50% OFF",
    description:
      "Broccoli is a vibrant green vegetable with a unique appearance. It features a thick, edible stem topped with clusters of small, dark green flower buds.",
    qty: ["1Kg", "500Kg"],
    delPrice: 15,
    price: 11,
  },
  {
    id: 2,
    name: "Tropical brown coconut water",
    img: "assets/img/product/feature-1-2.jpg",
    offer: "50% OFF",
    description:
      "Refreshing coconut water, perfect for hydration.",
    qty: ["1Kg", "500Kg"],
    delPrice: 18,
    price: 13,
  },
  {
    id: 3,
    name: "Purple bulbous tasty eggplant",
    img: "assets/img/product/feature-1-4.jpg",
    offer: "50% OFF",
    description:
      "Eggplant with deep purple skin and tasty flesh.",
    qty: ["1Kg", "500Kg"],
    delPrice: 25,
    price: 18,
  },
  {
    id: 4,
    name: "Yellow squash summer vegetable",
    img: "assets/img/product/feature-1-12.png",
    offer: "50% OFF",
    description:
      "Fresh yellow squash, ideal for summer dishes.",
    qty: ["1Kg", "500Kg"],
    delPrice: 15,
    price: 11,
  },
  {
    id: 5,
    name: "Red bell pepper",
    img: "assets/img/product/feature-1-5.jpg",
    offer: "30% OFF",
    description:
      "Crisp and sweet red bell peppers.",
    qty: ["1Kg", "500Kg"],
    delPrice: 13,
    price: 9,
  },
  {
    id: 6,
    name: "Organic carrot",
    img: "assets/img/product/feature-1-6.jpg",
    offer: "20% OFF",
    description:
      "Fresh, crunchy organic carrots.",
    qty: ["1Kg", "500Kg"],
    delPrice: 10,
    price: 8,
  },
  {
    id: 7,
    name: "Fresh tomato",
    img: "assets/img/product/feature-1-7.jpg",
    offer: "15% OFF",
    description:
      "Ripe and juicy tomatoes.",
    qty: ["1Kg", "500Kg"],
    delPrice: 9,
    price: 7,
  },
  {
    id: 8,
    name: "Cucumber",
    img: "assets/img/product/feature-1-8.jpg",
    offer: "25% OFF",
    description:
      "Cool and fresh cucumbers.",
    qty: ["1Kg", "500Kg"],
    delPrice: 8,
    price: 6,
  },
  {
    id: 9,
    name: "Spinach bunch",
    img: "assets/img/product/feature-1-10.png",
    offer: "40% OFF",
    description:
      "Leafy green spinach, full of nutrients.",
    qty: ["1Kg", "500Kg"],
    delPrice: 7,
    price: 5,
  },
  {
    id: 10,
    name: "Fresh ginger",
    img: "assets/img/product/feature-1-11.jpg",
    offer: "35% OFF",
    description:
      "Spicy and aromatic ginger.",
    qty: ["1Kg", "500Kg"],
    delPrice: 18,
    price: 12,
  },
  {
    id: 11,
    name: "Garlic bulbs",
    img: "assets/img/product/feature-1-13.jpg",
    offer: "30% OFF",
    description:
      "Fresh garlic bulbs for cooking.",
    qty: ["1Kg", "500Kg"],
    delPrice: 6,
    price: 4,
  },
  {
    id: 12,
    name: "Potatoes",
    img: "assets/img/product/feature-1-14.jpg",
    offer: "20% OFF",
    description:
      "Starchy and fresh potatoes.",
    qty: ["1Kg", "500Kg"],
    delPrice: 7,
    price: 5,
  },
  {
    id: 13,
    name: "Onions",
    img: "assets/img/product/feature-1-15.jpg",
    offer: "15% OFF",
    description:
      "Fresh onions, perfect for cooking.",
    qty: ["1Kg", "500Kg"],
    delPrice: 8,
    price: 6,
  },
  {
    id: 14,
    name: "Lettuce",
    img: "assets/img/product/feature-1-16.jpg",
    offer: "25% OFF",
    description:
      "Crisp green lettuce.",
    qty: ["1Kg", "500Kg"],
    delPrice: 7,
    price: 5,
  },
  {
    id: 15,
    name: "Sweet corn",
    img: "assets/img/product/feature-1-17.jpg",
    offer: "20% OFF",
    description:
      "Fresh sweet corn.",
    qty: ["1Kg", "500Kg"],
    delPrice: 9,
    price: 7,
  },
  {
    id: 16,
    name: "Red chili",
    img: "assets/img/product/feature-1-18.jpg",
    offer: "30% OFF",
    description:
      "Spicy red chilies.",
    qty: ["1Kg", "500Kg"],
    delPrice: 12,
    price: 8,
  },
];

const GoList = () => {
  const [perRow, setPerRow] = useState(3); // Default 3 products per row
     

  return (
    <div
      className="tab-pane fade"
      id="pills-profile"
      role="tabpanel"
      aria-labelledby="pills-profile-tab"
    >
      <div className="mt-shop-list-wrapper">
  <div style={{ padding: "20px" }}>
      {/* Option to change products per row */}
      <div style={{ marginBottom: "20px" }}>
        <label>Products per row: </label>
        <select value={perRow} onChange={(e) => setPerRow(Number(e.target.value))}>
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${perRow}, 1fr)`,
          gap: "20px",
        }}
      >
        {products.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img src={p.img} alt={p.name} style={{ width: "100%" }} />
            <h3>{p.name}</h3>
            <p>
              <del>${p.delPrice}</del> <span>${p.price}</span>
            </p>
            <p>{p.offer}</p>
          </div>
        ))}
      </div>
    </div>

        {/* Pagination */}
        <div className="mt-pagination-wrap d-flex align-items-center justify-content-between mt-20 flex-wrap">
          <div className="mt-pagination mb-20">
            <a href="a" className="button">
              <i className="fa-regular fa-chevron-left"></i> Prev
            </a>
            {[1, 2, 3].map((page) => (
              <a href="b" key={page}>
                {page}
              </a>
            ))}
            <a href="c">...</a>
            <a href="d" className="button">
              Next <i className="fa-regular fa-chevron-right"></i>
            </a>
          </div>

          <div className="mt-pagination-sort mb-20">
            <div className="ddd">
              <span>Show</span>
            </div>
            <select>
              {[12, 16, 20, 25].map((num) => (
                <option key={num}>{num}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoList;
