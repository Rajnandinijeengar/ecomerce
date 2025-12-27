import React, { useState } from "react";

const Table = () => {
  // Sample product data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Red Seedless Grapes",
      variant: "organic",
      weight: "500g",
      price: 10.75,
      quantity: 1,
      image: "assets/img/product/feature-1-10.png",
    },
    {
      id: 2,
      name: "Pure Organic White Mushrooms",
      variant: "",
      weight: "500g",
      price: 90.75,
      quantity: 1,
      image: "assets/img/product/feature-1-13.png",
    },
    {
      id: 3,
      name: "Red Seedless Grapes",
      variant: "Pure Organic",
      weight: "500g",
      price: 50.0,
      quantity: 1,
      image: "assets/img/product/feature-1-12.png",
    },
    {
      id: 4,
      name: "Fresh Packaged Red Tomato",
      variant: "",
      weight: "500g",
      price: 16.75,
      quantity: 1,
      image: "assets/img/product/feature-1-11.png",
    },
  ]);
   const [couponCode, setCouponCode] = useState("");
  const [, setDiscount] = useState(0);

  const handleApplyCoupon = () => {
    if (couponCode === "DISCOUNT10") {
      setDiscount(0.1); // 10% discount
      alert("Coupon applied! 10% discount added.");
    } else {
      setDiscount(0);
      alert("Invalid coupon code!");
    }
  };

  // Increase quantity
  const handleIncrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const handleDecrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove item
  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className="mt-whislist-area mt-whislist-cart pt-120 pb-50 p-relative">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mt-whislist">
              <div className="table-content table-responsive">
                <table className="table">
                  <thead className="mt-whislist-header">
                    <tr>
                      <th className="product-thumbnail">Images</th>
                      <th className="cart-product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-subtotal">Total Price</th>
                      <th className="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td className="mt-whislist-thumbnail">
                          <img src={item.image} alt={item.name} />
                        </td>
                        <td className="mt-whislist-name">
                          <div className="mt-whislist-info">
                            <h4 className="mt-whislist-title mb-15">
                              {item.name} <br /> {item.variant}
                            </h4>
                            <span>{item.weight}</span>
                          </div>
                        </td>
                        <td className="mt-whislist-price">
                          <span className="amount">${item.price.toFixed(2)}</span>
                        </td>
                        <td>
                          <div className="mt-shop-details__quantity-box">
                            <div className="mt-shop-details__quantity">
                              <button
                                className="mt-cart-minus mt-cart-min-plus"
                                onClick={() => handleDecrease(item.id)}
                              >
                                <i className="fal fa-minus"></i>
                              </button>
                              <input
                                type="text"
                                value={item.quantity}
                                readOnly
                              />
                              <button
                                className="mt-cart-plus mt-cart-min-plus"
                                onClick={() => handleIncrease(item.id)}
                              >
                                <i className="fal fa-plus"></i>
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="mt-whislist-total-price">
                          <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </td>
                        <td className="mt-whislist-remove">
                          <button onClick={() => handleRemove(item.id)}>
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Cart Total Section */}
        <div className="row justify-content-end">


             <div className="col-md-7 mt-50">
        <div className="mt-coupon p-relative d-flex">
          <input
            type="text"
            value={couponCode}
            placeholder="Enter Coupon Code"
            onChange={(e) => setCouponCode(e.target.value)}
            className="input-text"
          />
          <button
            className="mt-btn-3 mt-btn-apply-coupon"
            onClick={handleApplyCoupon}
          >
            Apply Coupon
          </button>
        </div>
      </div>
          <div className="col-md-5 mr-auto">
            <div className="mt-cart-page-total mt-50">
              <div className="mt-section-content mb-40">
                <h3 className="mt-section-title">
                  Cart <span>Total</span>
                </h3>
              </div>
              <div className="mt-cart-subtotal-price">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="mt-cart-shipping-cart-box">
                <span>Shipping</span>
                <span>$50.00</span>
              </div>
              <div className="mt-cart-total mb-40">
                <span>Total</span>
                <span>${(subtotal + 50).toFixed(2)}</span>
              </div>
              <a className="mt-btn" href="checkout.html">
                Proceed to checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
