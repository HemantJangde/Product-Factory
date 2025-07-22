import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeProduct } from "../../../../Features/ProductSlice";

function Cart() {
  const cart = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [paymentDone, setPaymentDone] = useState(false);

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const handlePayment = () => {
    setPaymentDone(true);
   
  };

  return (
    <>
      <Link to="/product" className="mx-5">
        Back
      </Link>

      <div className="container mt-4">
        <div className="row">
          {/* Cart Items (Left Side) */}
          <div className="col-md-8">
            <div className="row">
              {cart.map((item) => (
                <div className="col-md-6 mb-4" key={item.id || item._id}>
                  <div className="card product-cart p-3">
                    <div className="Image">
                      <img
                        src={item.image || item.profilePicture}
                        className="card-img-top"
                        alt="Product"
                        style={{ height: "200px", objectFit: "contain" }}
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{item.product}</h5>
                      <h6 className="text-success mb-3">
                        Price: ₹{item.price}
                      </h6>
                    
                      <button
                        onClick={() =>
                          dispatch(removeProduct(item.id || item._id))
                        }
                        className="btn btn-outline-danger w-100"
                      >
                        Remove item
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-4 mb-4 shadow-sm">
              <h4 className="mb-3">Shipping Address</h4>
              <form>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="mb-2">
                  <textarea
                    className="form-control"
                    placeholder="Address"
                    rows="2"
                  ></textarea>
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ZIP Code"
                  />
                </div>
              </form>
            </div>

            <div className="card p-4 shadow-sm">
              <h4 className="mb-4">Payment Summary</h4>
              <p className="fs-5">Total Items: {cart.length}</p>
              <p className="fs-5">Total Price: ₹{totalPrice}</p>

              {!paymentDone ? (
                <button
                  className="btn btn-success w-100 mt-3"
                  onClick={handlePayment}
                >
                  Proceed to Payment
                </button>
              ) : (
                <div className="alert alert-success mt-3" role="alert">
                  ✅ Payment successful! Thank you for your purchase.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
