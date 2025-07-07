import React from 'react'
import {useSelector} from 'react-redux'
function Cart() {
  const cart = useSelector(state=>state.product)
  console.log(cart);
  
  return (
    <>
     <div className="item-box" >
    {cart.map((item)=>(
      <div class="items p-4" key={item.id} >
      <div class="card   product-cart p-3 " style={{width: "18rem" }} >
        <div className="Image">
        <img src={item.image} class="card-img-top" alt="Product Image"/></div>
        <div class="card-body">
          <h5 class="card-title title">{item.title}</h5>
          <h6 class="text-success mb-3">Price: {item.price}</h6>
          <a href="#" class="btn btn-dark w-100">Buy Now </a>
        </div>
      </div>
    </div>
    ))}
    </div>
    </>
  )
}

export default Cart