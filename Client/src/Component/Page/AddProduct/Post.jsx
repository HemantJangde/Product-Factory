import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./ProductForm.module.css";

function Post() {
  const [product, setProduct] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/note");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  const resetForm = () => {
    setProduct("");
    setContent("");
    setPrice("");
    setProfilePicture("");
    setEditId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = { product, content, price, profilePicture };

    try {
      if (editId) {
        await axios.put(`http://localhost:5001/api/note/${editId}`, productData);
        alert("Product updated successfully!");
      } else {
        await axios.post("http://localhost:5001/api/note", productData);
        alert("Product created successfully!");
      }

      fetchProducts();
      resetForm();
    } catch (error) {
      alert("Failed to submit product.");
      console.error("Error:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/note/${id}`);
      alert("Product deleted.");
      fetchProducts();
    } catch (error) {
      console.error("Failed to delete", error);
    }
  };

  const handleEdit = (product) => {
    setProduct(product.product);
    setContent(product.content);
    setPrice(product.price);
    setProfilePicture(product.profilePicture || "");
    setEditId(product._id);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{editId ? "Edit Product" : "Add Product"}</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Product Name:</label>
          <input
            type="text"
            className={styles.input}
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Description:</label>
          <textarea
            className={styles.textarea}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Price:</label>
          <input
            type="number"
            className={styles.input}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Image URL:</label>
          <input
            type="text"
            className={styles.input}
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
          />
        </div>

        <button type="submit" className={styles.button}>
          {editId ? "Update Product" : "Create Product"}
        </button>
      </form>

     
      <h3 className={styles.heading}>Product List</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Description</th>
            <th>Price (₹)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item._id}>
              <td>
                {item.profilePicture ? (
                  <img
                    src={item.profilePicture}
                    alt="product"
                    width="50"
                    height="50"
                    style={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                ) : (
                  "No Image"
                )}
              </td>
              <td>{item.product}</td>
              <td>{item.content}</td>
              <td>₹{item.price}</td>
              <td>
                <button
                  className={styles.editBtn}
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className={styles.deleteBtn}
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {products.length === 0 && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No products available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Post;
