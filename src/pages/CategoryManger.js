import React, { useState, useEffect } from "react";
import axios from "axios";
import Door from "../components/Door";

const CategoryManager = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");

  const apiURL = "http://localhost:5000/api/categories";

  // Fetch categories from backend
  const fetchCategories = async () => {
    try {
      const res = await axios.get(apiURL);
      setCategories(res.data);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Add new category
  const handleAdd = async () => {
    if (!newCategory.trim()) return;
    try {
      const res = await axios.post(apiURL, { name: newCategory });
      setCategories([...categories, res.data]);
      setNewCategory("");
    } catch (err) {
      console.error("Error adding category:", err);
    }
  };

  // Delete category
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiURL}/${id}`);
      setCategories(categories.filter((cat) => cat._id !== id));
    } catch (err) {
      console.error("Error deleting category:", err);
    }
  };

  // Start edit
  const handleEdit = (id, name) => {
    setEditId(id);
    setEditName(name);
  };

  // Save edit
  const handleSave = async () => {
    try {
      const res = await axios.put(`${apiURL}/${editId}`, { name: editName });
      setCategories(
        categories.map((cat) => (cat._id === editId ? res.data : cat))
      );
      setEditId(null);
      setEditName("");
    } catch (err) {
      console.error("Error updating category:", err);
    }
  };

  // Inline styles
  const styles = {
    container: { marginTop: "50px", fontFamily: "Arial, sans-serif" },
    header: { textAlign: "center", marginBottom: "30px", color: "#4e73df" },
    formBox: {
      padding: "20px",
      borderRadius: "10px",
      backgroundColor: "#f9f9ff",
      boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    },
    listBox: {
      padding: "20px",
      borderRadius: "10px",
      backgroundColor: "#ffffff",
      boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    },
    table: { width: "100%", borderCollapse: "collapse", marginTop: "15px" },
    th: {
      backgroundColor: "#4e73df",
      color: "white",
      padding: "10px",
      textAlign: "left",
    },
    td: { padding: "10px", borderBottom: "1px solid #ddd" },
    input: {

      padding: "8px",
      width: "100%",
      marginBottom: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    btnPrimary: {
      padding: "8px 12px",
      backgroundColor: "#4e73df",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    btnSuccess: { padding: "5px 10px", backgroundColor: "#1cc88a", color: "#fff", border: "none", borderRadius: "5px", marginRight: "5px", cursor: "pointer" },
    btnWarning: { padding: "5px 10px", backgroundColor: "#f6c23e", color: "#fff", border: "none", borderRadius: "5px", marginRight: "5px", cursor: "pointer" },
    btnDanger: { padding: "5px 10px", backgroundColor: "#e74a3b", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" },
    btnSecondary: { padding: "5px 10px", backgroundColor: "#858796", color: "#fff", border: "none", borderRadius: "5px", marginRight: "5px", cursor: "pointer" },
  };

  return (
    <div>
 <header className="mtheader__area p-relative">
      {/* Header Top Area */}
      <div className="mtheader__top-area mtheader__top-2 theme-bg p-relative d-none d-lg-block">
        <div className="container">
          <div className="mtborder__top-wrapper d-flex align-items-center justify-content-between">
            <div className="mtheader__top-left">
              <a href="mailto:info@example.com">
                <i className="fa-light fa-envelope"></i>
                <span>info@example.com</span>
              </a>
              <span>
                <i className="fa-solid fa-star-sharp"></i>
              </span>
              <a href="a">
                <i className="fa-light fa-location-dot"></i>
                <span>Lincoln- 344, Illinois, Florida, USA</span>
              </a>
            </div>

            <div className="mtheader__top-right d-flex align-items-center justify-content-between">
              <div className="mtheader__top-social">
                <a href="b"><i className="fa-brands fa-pinterest-p"></i></a>
                <a href="c"><i className="fa-brands fa-instagram"></i></a>
                <a href="d"><i className="fa-brands fa-facebook-f"></i></a>
              </div>
              <span><i className="fa-solid fa-star-sharp"></i></span>

              <div className="mtheader__top-lang">
                 <select
    style={{
      width: "100%",
      border: "none",
      outline: "none",
      background: "transparent",
      padding: "5px 20px 5px 5px", // right padding matches arrow width
      appearance: "none",
      WebkitAppearance: "none",
      MozAppearance: "none",
      cursor: "pointer",
    }}
  >
    <option  value="1">Eng </option>
    <option   value="2">Bang</option>
    <option  value="3">Lang</option>
    <option  value="4">Latin</option>
  </select>
              </div>

              <span><i className="fa-solid fa-star-sharp"></i></span>

              <div className="mtheader__top-currency">
                 <select id="currencySelect"      style={{
      width: "100%",
      border: "none",
      outline: "none",
      background: "transparent",
      padding: "5px 20px 5px 5px", // right padding matches arrow width
      appearance: "none",
      WebkitAppearance: "none",
      MozAppearance: "none",
      cursor: "pointer",
    }}>
    <option value="1">USD</option>
    <option value="2">URO</option>
    <option value="3">BDT</option>
    <option value="4">RCS</option>
  </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header Menu Area */}
      <div id="mt-header-sticky" className="mtheader__bottom-area mtheader__bottom-2 mt-sticky-theme-2 p-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2 col-6">
              <div className="mtheader__bottom-category-wrap p-relative">
                <div className="mtheader__bottom-category">
                  <div className="mtheader__logo">
                    <a href="index.html">
                      <img src="assets/img/logo/black-logo.png" alt="Rosun" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-10 col-6">
              <div className="mtheader__bottom-wrapper p-relative d-flex align-items-center justify-content-end justify-content-xl-between">
                
                {/* Desktop Menu */}
                <div className="mtheader__bottom-menu d-none d-xl-block">
                  <nav className="mt-mobile-menu-active">
                    <ul>
                      <li className="has-dropdown">
                        <a href="index.html">Home</a>
                        <ul className="sub-menu mt-submenu">
                          <li><a href="index.html">Home One</a></li>
                          <li><a href="index-2.html">Home Two</a></li>
                        </ul>
                      </li>
                      <li><a href="about.html">About</a></li>
                      <li className="has-dropdown">
                        <a href="e">Shop</a>
                        <ul className="sub-menu mt-submenu">
                          <li><a href="shop.html">Shop</a></li>
                          <li><a href="product-details.html">Product Details</a></li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <a href="f">Pages</a>
                        <ul className="sub-menu mt-submenu">
                          <li><a href="about.html">About</a></li>
                          <li><a href="contact.html">Contact</a></li>
                          <li><a href="faq.html">Faq</a></li>
                          <li><a href="team.html">Team</a></li>
                          <li><a href="team-details.html">Team Details</a></li>
                          <li><a href="product-details.html">Product</a></li>
                          <li><a href="wishlist.html">Wishlist</a></li>
                          <li><a href="checkout.html">Checkout</a></li>
                          <li><a href="cart.html">Cart</a></li>
                          <li><a href="login.html">Login</a></li>
                          <li><a href="register.html">Register</a></li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <a href="g">Blog</a>
                        <ul className="sub-menu mt-submenu">
                          <li><a href="blog.html">Blog</a></li>
                          <li><a href="blog-grid.html">Blog Grid</a></li>
                          <li><a href="blog-details.html">Blog Details</a></li>
                        </ul>
                      </li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </nav>
                </div>

                {/* Middle Account / Wishlist / Cart */}
                <div className="mtheader__midel-account-wrap p-relative d-flex align-items-center justify-content-between">
                  <div className="mtheader__midel-wishlist d-none d-lg-block">
                    <a href="wishlist.html"><i className="fa-regular fa-heart"></i></a>
                  </div>
                  <span className="d-none d-lg-block"><i className="fa-solid fa-star-sharp"></i></span>

                  <div className="mtheader__midel-login mtheader__mobile-cart">
                    <a href="login.html" className="mt__header-login-another-page">
                      <i className="fa-solid fa-user-plus"></i>
                      <span>Login your</span>
                      <h6>Account</h6>
                    </a>
                  </div>

                  <span><i className="fa-solid fa-star-sharp"></i></span>

                  <div className="mtheader__midel-login mtheader__mobile-cart">
                    <div className="mtcartmini-open-btn">
                      <div className="mtheader__midel-card-value">
                        <i className="fa-solid fa-basket-shopping"></i>
                        <p>2</p>
                        <span>Cart Items</span>
                        <h6>$570.00</h6>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Toggle */}
                <div className="mt-header-toogle d-xl-none text-end">
                  <button className="mt-offcanvas-toogle mt-offcanvas-toogle-2">
                    <i className="fa-regular fa-bars-staggered"></i>
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </header>



       <main>
          <div style={styles.container}>
      <h2 style={{fontSize:"50px", color:"#17AF26", textAlign:"center"}}>Category Manager</h2>
      <div className="row">
        {/* Left Column: Add Category */}
        <div className="col-lg-6 mb-4">
          <div style={styles.formBox}>
            <h4 style={{fontSize:"30px", color:"#17AF26"}}>Add New Category</h4>
            <input
              type="text"
              style={styles.input}
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Enter category name"
            />
            <button style={{ ...styles.btnDanger, backgroundColor: "#17AF26" }} onClick={handleAdd}>
              Add Category
            </button>
          </div>
        </div>

        {/* Right Column: Category List */}
        <div className="col-lg-6">
          <div style={styles.listBox}>
            <h4 style={{fontSize:"30px", color:"#17AF26"}}>Category List</h4>
            <table style={styles.table} >
             <tr>
    <th style={{ ...styles.th, backgroundColor: "#17AF26", color: "#fff" }}>
      Category Name
    </th>
    <th style={{ ...styles.th, backgroundColor: "#17AF26", color: "#fff" }}>
      Actions
    </th>
  </tr>
        
              <tbody style={{backgroundColor:"#e7f9e4"}}>
                {categories.map((cat) => (
                  <tr key={cat._id}>
                    <td style={styles.td}>
                      {editId === cat._id ? (
                        <input
                          type="text"
                          style={styles.input}
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                        />
                      ) : (
                        cat.name
                      )}
                    </td>
                    <td style={styles.td}>
  {editId === cat._id ? (
    <>
      <button
        style={{ ...styles.btnSuccess, backgroundColor: "#17af26ff" }}
        onClick={handleSave}
      >
        Save
      </button>
      <button
        style={{ ...styles.btnSecondary, backgroundColor: "#17AF26" }}
        onClick={() => setEditId(null)}
      >
        Cancel
      </button>
    </>
  ) : (
    <>
      <button
        style={{ ...styles.btnWarning, backgroundColor: "#17AF26" }}
        onClick={() => handleEdit(cat._id, cat.name)}
      >
        Edit
      </button>
      <button
        style={{ ...styles.btnDanger, backgroundColor: "#17AF26" }}
        onClick={() => handleDelete(cat._id)}
      >
        Delete
      </button>
    </>
  )}
</td>

                  </tr>
                ))}
              </tbody>
            </table>
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
      <footer className="mt-footer-area mt-footer-2 p-relative fix pt-80" style={{ backgroundColor: "#171A2B" }}>
      <div className="mt-footer-wraper p-relative">
        <div className="container">
          <div className="row">
            {/* Logo & Info */}
            <div className="col-lg-3 col-md-4">
              <div className="mt-footer-widget footer-2-cols-1">
                <div className="mt-footer-logo mb-20">
                  <a href="a"><img src="assets/img/logo/white-logo.png" alt="Rosun" /></a>
                </div>
                <div className="mt-footer-content">
                  <p className="mb-25">Roshun is an online grocery shop. We are selling grocery products.</p>
                  <div className="mt-footer-social mb-30">
                    <a href="b"><i className="fa-brands fa-pinterest-p"></i></a>
                    <a href="c"><i className="fa-brands fa-instagram"></i></a>
                    <a href="d"><i className="fa-brands fa-facebook-f"></i></a>
                  </div>
                  <div className="mt-footer-app mb-20">
                    <h4 className="mt-footer-app-title">Download App</h4>
                    <div className="mt-footer-app-img mt-20">
                      <a href="e"><img src="assets/img/footer/goolge-play.png" alt="Rosun" /></a>
                      <a href="f"><img src="assets/img/footer/app-store.png" alt="Rosun" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="col-lg-9 col-md-8">
              <div className="mt-footer-wrapper mb-30">
                <div className="row">
                  {[
                    {
                      title: "Company",
                      links: [
                        { name: "About Us", href: "about.html" },
                        { name: "Contact Us", href: "contact.html" },
                        { name: "Privacy Policy", href: "#" },
                        { name: "Terms & Condition", href: "#" },
                        { name: "Site Map", href: "#" },
                        { name: "Careers", href: "#" },
                      ],
                    },
                    {
                      title: "Quick Links",
                      links: [
                        { name: "About Company", href: "about.html" },
                        { name: "Articles & Blogs", href: "blog.html" },
                        { name: "Flash Sales", href: "shop.html" },
                        { name: "Checkout", href: "checkout.html" },
                        { name: "FAQs Page", href: "faq.html" },
                      ],
                    },
                    {
                      title: "Support",
                      links: [
                        { name: "My Account", href: "login.html" },
                        { name: "Payment Method", href: "#" },
                        { name: "License & Permit", href: "#" },
                        { name: "Our Partners", href: "about.html" },
                        { name: "Support Center", href: "contact.html" },
                      ],
                    },
                    {
                      title: "Category",
                      links: [
                        { name: "Fresh Produce", href: "shop.html" },
                        { name: "Dairy & Eggs", href: "shop.html" },
                        { name: "Meat & Seafood", href: "shop.html" },
                        { name: "Beverages", href: "shop.html" },
                        { name: "Vegetables", href: "shop.html" },
                      ],
                    },
                  ].map((section, idx) => (
                    <div className="col-xl-3 col-md-6 mb-50" key={idx}>
                      <div className={`mt-footer-widget footer-2-cols-${idx + 2}`}>
                        <h2 className="mt-footer-title mb-50">{section.title}</h2>
                        <div className="mt-footer-list">
                          <ul>
                            {section.links.map((link, i) => (
                              <li key={i}>
                                <a href={link.href}>{link.name}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Mid Section */}
      <div className="mt-footer-midel mt-footer-midel-border pb-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="mt-footer-midel-item d-flex align-items-center mb-20">
                <div className="mt-footer-midel-icon mr-15">
                  <span><i className="fa-solid fa-location-dot"></i></span>
                </div>
                <div className="mt-footer-midel-content">
                  <a href="g">Tri Opposite 123 Main Street, <br /> Anytown, California 90210 USA</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="mt-footer-midel-item d-flex align-items-center mb-20 justify-content-lg-center">
                <div className="mt-footer-midel-icon mr-15">
                  <span><i className="fa-light fa-envelope-open-text"></i></span>
                </div>
                <div className="mt-footer-midel-content">
                  <a href="mailto:info@example.com">info@example.com</a><br />
                  <a href="mailto:support@example.com">support@example.com</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="mt-footer-midel-item d-flex align-items-center mb-20 justify-content-lg-center">
                <div className="mt-footer-midel-icon mr-15">
                  <span><i className="fa-regular fa-headset"></i></span>
                </div>
                <div className="mt-footer-midel-content">
                  <a href="tel:+991234567888">+99 123 4567 888</a><br />
                  <a href="tel:+001235555888">+00 123 5555 888</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="mt-footer-midel-item d-flex align-items-center mb-20 justify-content-lg-center">
                <div className="mt-footer-midel-icon mr-15">
                  <span><i className="fa-light fa-clock"></i></span>
                </div>
                <div className="mt-footer-midel-content">
                  <a href="h">10:00 - 18:00 <br /> Monday - Saturday</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-copyright-area mt-copyright-2 pt-20 pb-20">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="mt-copyright-left text-center text-md-start">
                <p>Copyright 2025 © Rosun. All rights reserved.</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="mt-copyright-right text-center text-md-end">
                <img src="assets/img/footer/payment.png" alt="Payment Methods" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
   
  );
};

export default CategoryManager;
