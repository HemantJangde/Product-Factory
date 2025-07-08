import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  
  const cart = useSelector((state) => state.product);


  return (
    <>

<Link to='/product'className="mx-5">Back</Link>
  
      <div className="item-box">
        {cart.map((item) => (
          <div className="items p-4" key={item.id}>
            <div className="card   product-cart p-3 " style={{ width: "18rem" }}>
              <div className="Image">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt="Product Image"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title title">{item.title}</h5>
                <h6 className="text-success mb-3">Price: {item.price}</h6>
                <a href="#" className="btn btn-dark w-100">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart;
