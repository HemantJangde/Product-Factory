import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Component/Page/Home/Home.jsx'
import Product from './Component/Page/Product/Product.jsx'
import About from './Component/Page/About/About.jsx'
import Contact from './Component/Page/Contact/Contact.jsx'
import Signin from './Component/Page/SignIn/Signin.jsx'
import Cart from './Component/Page/Cart/Cart.jsx'
import SingelPage from './Component/Page/SinglePage/SingelPage.jsx'
import Post from './Component/Page/AddProduct/Post.jsx'


const route  = createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[{
    path:'/',
    element:<Home/>
  },{
    path:'product',
    element:<Product/>
  },{
    path:'about',
    element:<About/>
  },{
    path:'contact',
    element:<Contact/>
  },{
    path:'signin',
    element:<Signin/>
  },{
    path:'cart',
    element:<Cart/>
  },{
    path:'singlePage/:id',
    element:<SingelPage/>
  },{
    path:'post',
    element:<Post/>
  },
]
}])


createRoot(document.getElementById('root')).render(

  <RouterProvider router={route}/>
)
