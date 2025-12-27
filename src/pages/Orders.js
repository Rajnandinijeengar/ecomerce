import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  // Fetch all orders
  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/orders");
      setOrders(res.data || []);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    }
  };

  // Delete order
  const deleteOrder = async (id) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/orders/${id}`);
      fetchOrders();
    } catch (error) {
      console.error("Failed to delete order:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="container mt-5">
      <h2>All Orders</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table" >
            <tr >
              <th style={{backgroundColor:"#17AF26", color:"white"}}>Order ID</th>
              <th style={{backgroundColor:"#17AF26", color:"white"}}>Customer</th>
              <th style={{backgroundColor:"#17AF26", color:"white"}}>Email</th>
              <th style={{backgroundColor:"#17AF26", color:"white"}}>Phone</th>
              <th style={{backgroundColor:"#17AF26", color:"white"}}>Products</th>
              <th style={{backgroundColor:"#17AF26", color:"white"}}>Total Amount</th>
              <th style={{backgroundColor:"#17AF26", color:"white"}}>Payment Method</th>
              <th style={{backgroundColor:"#17AF26", color:"white"}}>Status</th>
              <th style={{backgroundColor:"#17AF26", color:"white"}}>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="9" className="text-center">
                  No Orders Found
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>
                    {order.customer?.firstName || ""}{" "}
                    {order.customer?.lastName || ""}
                  </td>
                  <td>{order.customer?.email || "N/A"}</td>
                  <td>{order.customer?.phone || "N/A"}</td>
                  <td>
                    {order.products && order.products.length > 0 ? (
                      order.products.map((item) => (
                        <div
                          key={item._id || Math.random()}
                          className="d-flex align-items-center mb-2"
                        >
                          <img
                            src={`http://localhost:5000${item.image || ""}`}
                            alt={item.name || "Product"}
                            style={{ width: "50px", marginRight: "10px" }}
                          />
                          <div>
                            <strong>{item.name || "N/A"}</strong>
                            <div>
                              ₹{item.price || 0} x {item.qty || 1} = ₹
                              {(item.price || 0) * (item.qty || 1)}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <span>No Products</span>
                    )}
                  </td>
                  <td>₹{order.totalAmount || 0}</td>
                  <td>{order.paymentMethod || "N/A"}</td>
                  <td>{order.status || "Pending"}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteOrder(order._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
