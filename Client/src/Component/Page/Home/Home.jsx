import React ,{useState}from 'react'
import Img1 from '../image/slider1.avif'
import Img2 from '../image/slider2.jpg'

import {Link} from "react-router-dom"


export default function Home() {

  fetch('https://fakestoreapi.com/Products')
  .then((res)=>res.json())
  .then((val)=>SetProduct(val))

  const[product ,SetProduct ]=useState([])


  


  return (
    <>


<div className="container bg-dark text-light d-flex p-5  ">
<div className="row featurette">
      <div className="col-md-7 order-md-2  ">
        <h2 className="featurette-heading m-5 ">Welcome to Our Store!</h2>
        <p className="lead  p-3">We believe shopping should be simple, enjoyable, and trustworthy. That’s why we’ve built this platform with handpicked products, secure checkout, and fast delivery to give you the best experience from start to finish.</p>
      </div>
      <div className="col-md-5 order-md-1">
      <div className="image">
    <img src={Img2} alt="" />
   </div>
      </div>
    </div>
</div>

<div >

{/* <div className="card m-5" style={{width: '18rem'}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}
<Link to='product' className="container my-5" style={{display:'flex',flexWrap:'wrap',width:'90%',textAlign:'center',justifyContent:'space-around'}} >
{product.map((data)=>( <div className="card    p-2 product-item" style={{width: "18rem" ,height:'215px ',overflow:'hidden'}}>
  <div className="Image-Home">
        <img src={data.image} className="card-img-top" alt="Product Image"/></div>
  <div className="card-body">
    {/* <p className="card-text p-3">{data.title}</p> */}
  </div>
</div>

))}
</Link>

</div>
    </>
  )
}
