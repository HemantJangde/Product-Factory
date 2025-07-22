import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../Features/ProductSlice";

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      try {
        if (id.length >= 20) {
    
          const res = await axios.get(`http://localhost:5001/api/note`);
          const found = res.data.find((item) => item._id === id);
          setProduct(found || null);
        } else {
 
          const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
          setProduct(res.data);
        }
      } catch (err) {
        console.error("Product fetch error:", err);
        setProduct(null);
      }
    };

    getProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="container text-center mt-5">
        <h3 className="text-danger">Product not found</h3>
        <Link to="/product" className="btn btn-secondary mt-3">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <Link to="/product" className="btn btn-outline-primary mb-4">← Back</Link>

      <div className="row shadow p-4 rounded-4 align-items-center bg-white">
        <div className="col-md-5 mb-3">
          <img
            src={product.image || product.profilePicture}
            alt="product"
            className="img-fluid rounded"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>
        <div className="col-md-7">
          <h3>{product.title || product.product}</h3>
          <p className="text-muted">{product.description || product.content}</p>
          <h4 className="text-success mb-3">Price: ₹{product.price}</h4>

         

          <div className="d-flex gap-3 mt-4">
            <button className="btn btn-dark"  onClick={() => {
                                dispatch(addProduct(product));
                                navigate("/cart");
                              }}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
