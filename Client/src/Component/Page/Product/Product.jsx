import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../Features/ProductSlice";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const [items, SetItems] = useState([]);
  const [price, SetPrice] = useState(1000);
  const [search, SetSearch] = useState("");
  const [filterData, SetFilterData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/Products")
      .then((res) => res.json())
      .then((val) => SetItems(val));
  }, []);

  // let filterData  =  items.filter((item)=>

  // console.log("the filtered data ",filterData);

  useEffect(() => {
    let result = items.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) &&
        price > item.price
    );
    SetFilterData(result);
  }, [price, search, items]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div className="tools">
        <div className="price-range">
          <label htmlFor="range">price : ₹{price} </label>
          <br />
          <input
            type="range"
            id="range
          "
            min={1}
            max={500}
            onChange={(e) => SetPrice(e.target.value)}
            value={price}
          />
        </div>

        <div className="searchBar">
          <label htmlFor="range">Search : </label>

          <input
            type="text"
            id="search"
            onChange={(e) => SetSearch(e.target.value)}
            value={search}
          />
        </div>
      </div>

      <div className="item-box p-3">
        {filterData.map((item) => (
          <div className="items my-1 p-4" key={item.id}>
            <div className="card   product-card p-3 " style={{ width: "18rem" }}>
              <div className="Image">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt="Product Image"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title title">{item.title}</h5>
                <p className="card-text ">{item.description}</p>
                <h6 className="text-secondary-emphasis mb-3">
                  Price: ₹{item.price}
                </h6>

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
