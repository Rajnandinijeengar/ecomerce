import React, { useState, useEffect } from "react";
import axios from "axios";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const shipping = 50; // fixed shipping cost

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Form data for customer
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Total calculation
  const subtotal = cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  const totalAmount = subtotal + shipping;

  // Confirm order
  const confirmOrder = async () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/orders", {
        customer: formData,
        products: cart,
        totalAmount,
        shipping,
      });

      alert("Order Placed Successfully!");
      setCart([]);
      localStorage.removeItem("cart");
    } catch (error) {
      console.error(error);
      alert("Order Failed!");
    }
  };

  return (
    <div className="checkout-page" style={{ padding: "20px" }}>
      <h2>Order Summary</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} style={{ display: "flex", marginBottom: "10px" }}>
              <img src={item.image} alt={item.name} width="80" />
              <div style={{ marginLeft: "10px" }}>
                <h4>{item.name}</h4>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity || 1}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}

          <hr />
          <p>Subtotal: ₹{subtotal}</p>
          <p>Shipping: ₹{shipping}</p>
          <h3>Total: ₹{totalAmount}</h3>
          <button onClick={confirmOrder}>Place Order</button>
        </div>
      )}

      <h3>Shipping Details</h3>
      <div className="customer-form" style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}>
        <input name="firstName" placeholder="First Name" onChange={handleChange} />
        <input name="lastName" placeholder="Last Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="phone" placeholder="Phone" onChange={handleChange} />
        <input name="street" placeholder="Street Address" onChange={handleChange} />
        <input name="city" placeholder="City" onChange={handleChange} />
        <input name="zip" placeholder="Zip Code" onChange={handleChange} />
        <input name="country" placeholder="Country" onChange={handleChange} />
      </div>
    </div>
  );
};

export default Checkout;
