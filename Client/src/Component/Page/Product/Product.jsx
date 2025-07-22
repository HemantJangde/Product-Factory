import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../Features/ProductSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Product() {
  const [items, setItems] = useState([]);
  const [item2, setItem2] = useState([]);
  const [price, setPrice] = useState(1000);
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [filterBackend, setFilterBackend] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setItems(res.data))
      .catch((err) => console.log("FakeStore Error", err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/note")
      .then((res) => setItem2(res.data))
      .catch((err) => console.log("Backend API Error", err));
  }, []);
  

  useEffect(() => {
  
    const result = items.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) &&
        price > item.price
    );
    setFilterData(result);

    const backendResult = item2.filter(
      (item) =>
        item.product.toLowerCase().includes(search.toLowerCase()) &&
        price > item.price
    );
    setFilterBackend(backendResult);
  }, [price, search, items, item2]);

  return (
    <>
      <div className="tools">
        <div className="price-range">
          <label htmlFor="range">Price: ₹{price}</label>
          <br />
          <input
            type="range"
            id="range"
            min={1}
            max={1500}
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>

        <div className="searchBar">
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            id="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
      </div>

      <div className="item-box p-3">
        {filterBackend.map((item) => (
          <div className="items my-1 p-4" key={item._id}>
            <div className="card product-card p-3" style={{ width: "18rem" }}>
              <div className="Image">
                <img
                  src={item.profilePicture }
                  className="card-img-top"
                  alt="Product"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title title">{item.product}</h5>
                <p className="card-text">{item.content}</p>
                <h6 className="text-secondary-emphasis mb-3">
                  Price: ₹{item.price}
                </h6>
                <button
  className="btn btn-outline-secondary w-100 mb-2"
  onClick={() => navigate(`/singlePage/${item.id || item._id}`)}
>
  View
</button>
              
                <button
                  className="btn btn-dark w-100"
                  onClick={() => {
                    dispatch(addProduct(item));
                    navigate("/cart");
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}

      
        {filterData.map((item) => (
          <div className="items my-1 p-4" key={item.id}>
            <div className="card product-card p-3" style={{ width: "18rem" }}>
              <div className="Image">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt="Product"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <h6 className="text-secondary-emphasis mb-3">
                  Price: ₹{item.price}
                </h6>
                <button
  className="btn btn-outline-secondary w-100 mb-2"
  onClick={() => navigate(`/singlePage/${item.id || item._id}`)}
>
  View
</button>
                <button
                  className="btn btn-dark w-100"
                  onClick={() => {
                    dispatch(addProduct(item));
                    navigate("/cart");
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
