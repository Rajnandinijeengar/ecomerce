import React, { useEffect, useState } from "react";
import axios from "axios";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import Door from "../components/Door";
const ProductManager = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    oldPrice: "",
    offer: "",
    weight: "",
    category: "",
    rating: 5,
    img: null,
  });

  const CATEGORY_API = "http://localhost:5000/api/categories";
  const PRODUCT_API = "http://localhost:5000/api/products";

  /* ---------------- FETCH DATA ---------------- */
  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get(CATEGORY_API);
      setCategories(res.data);
    } catch (err) {
      console.error("Category error:", err);
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await axios.get(PRODUCT_API);
      setProducts(res.data);
    } catch (err) {
      console.error("Product error:", err);
    }
  };

  /* ---------------- FORM ---------------- */
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "img") {
      setFormData({ ...formData, img: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, val]) =>
      data.append(key, val)
    );

    try {
      if (editId) {
        await axios.put(`${PRODUCT_API}/${editId}`, data);
        setEditId(null);
      } else {
        await axios.post(PRODUCT_API, data);
      }

      setFormData({
        title: "",
        price: "",
        oldPrice: "",
        offer: "",
        weight: "",
        category: "",
        rating: 5,
        img: null,
      });

      fetchProducts();
    } catch (err) {
      console.error("Save error:", err);
    }
  };

  /* ---------------- EDIT / DELETE ---------------- */
  const handleEdit = (product) => {
    setEditId(product._id);
    setFormData({
      title: product.title,
      price: product.price,
      oldPrice: product.oldPrice || "",
      offer: product.offer || "",
      weight: product.weight || "",
      category: product.category?._id || "",
      rating: product.rating || 5,
      img: null,
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    await axios.delete(`${PRODUCT_API}/${id}`);
    fetchProducts();
  };

  /* ---------------- UI ---------------- */
  return (
    <div>
       
  <main>  
    <div className="container mt-5 pb-5">
      <div className="row">
 <h3 style={{fontSize:"60px", color:"#17AF26", fontWeight:"normal", textAlign:"center"}}> Add  Products</h3>
        {/* FORM */}
        <div className="col-lg-6 mb-4">
        

          <form onSubmit={handleSubmit} >
            <input className="form-control mb-2" style={{border:"2px solid #17AF26" , color:"#17AF26"}} name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
            <input className="form-control mb-2" style={{border:"2px solid #17AF26" , color:"#17AF26"}} name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
            <input className="form-control mb-2" style={{border:"2px solid #17AF26" , color:"#17AF26"}} name="oldPrice" placeholder="Old Price" value={formData.oldPrice} onChange={handleChange} />
            <input className="form-control mb-2" style={{border:"2px solid #17AF26" , color:"#17AF26"}} name="offer" placeholder="Offer" value={formData.offer} onChange={handleChange} />
            <input className="form-control mb-2" style={{border:"2px solid #17AF26" , color:"#17AF26"}} name="weight" placeholder="Weight" value={formData.weight} onChange={handleChange} />

            <select className="form-control mb-2" name="category" value={formData.category} onChange={handleChange} required style={{border:"2px solid #17AF26" }}>
              <option value="" >Select Category</option>
              {categories.map((c) => (
                <option key={c._id} value={c._id}>{c.name}</option>
              ))}
            </select>

            <input type="number" min={1} max={5} style={{border:"2px solid #17AF26"}} className="form-control mb-2" name="rating" value={formData.rating} onChange={handleChange} />
            <input type="file" style={{border:"2px solid #17AF26"}} className="form-control mb-2" name="img" onChange={handleChange} />

            <button className="btn  w-100" style={{backgroundColor:"#17AF26", color: "white"}}>
              {editId ? "Update Product" : "Add Product"}
            </button>
          </form>
        </div>

        {/* PRODUCTS */}
   <div className="col-lg-6">
  <div className="row">
    {products.map((product) => (
      <div className="col-md-6 mb-4" key={product._id}>
        <div className="mtfeature__product-item p-relative fix h-100">

          {/* Offer */}
          {product.offer && (
            <div className="mtfeature__product-offer">
              <span>{product.offer}</span>
            </div>
          )}

          {/* Product Image */}
          <div className="mtfeature__product-img mb-15">
            <img
              src={product.img ? `http://localhost:5000${product.img}` : "https://via.placeholder.com/150"}
              alt={product.title}
              className="img-fluid"
            />
          </div>

          {/* Product Content */}
          <div className="mtfeature__product-content mb-15">
            {product.weight && <span>{product.weight}</span>}
            <h5 className="mtfeature__product-title">{product.title}</h5>
            {product.category?.name && (
              <span className="text-muted">Category: {product.category.name}</span>
            )}
          </div>

          {/* Rating */}
          <div className="mtfeature__product-rating mb-15">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={i < (product.rating || 0) ? "fa-solid fa-star" : "fa-regular fa-star"}
                style={{ color: "#fdb343" }}
              ></i>
            ))}
          </div>

          {/* Price */}
          <div className="mtfeature__product-price mb-15">
            {product.oldPrice > 0 && <del>₹{Number(product.oldPrice).toFixed(2)}</del>} <br />
            <span>₹{Number(product.price).toFixed(2)}</span>
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-between">
            <button
              className="btn"
              style={{ backgroundColor: "#17AF26", color: "#fff", border: "none" }}
              onClick={() => handleEdit(product)}
            >
              Edit
            </button>
            <button
              className="btn"
              style={{ backgroundColor: "#17AF26", color: "#fff", border: "none" }}
              onClick={() => handleDelete(product._id)}
            >
              Delete
            </button>
          </div>

        </div>
      </div>
    ))}
  </div>
</div>




      </div>
    </div>
    <section className="mtnewslatter__area mtnewslatter__space mt-120 mb-120">
      <div className="container">
        <div
          className="mtnewslatter__mainwrapper p-relative fix br-20 wow img-custom-anim-left"
          data-wow-duration="1.5s"
          data-wow-delay="0.1s"
          style={{ backgroundImage: "url('assets/img/newslatter/newslatter-bg-2.jpg')" }}
        >
          <div className="mtnewslatter__shape">
            <img src="assets/img/newslatter/star.png" alt="Star Shape" />
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="mtnewslatter__wrapper wow img-custom-anim-left"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                <div className="mtnewslatter__item">
                  <h3 className="mtnewslatter__title mb-10">
                    Subscribe{" "}
                    <span className="p-relative">
                      newsletter{" "}
                      <img src="assets/img/newslatter/shape-text.png" alt="Shape Text" />
                    </span>{" "}
                    <br />
                    to get offers
                  </h3>
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
          </div>
        </div>
      </div>
    </section>
    <Door></Door>
    </main>

    

    </div>
  );
};

export default ProductManager;
