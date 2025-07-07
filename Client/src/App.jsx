import { useState } from 'react'
import './App.css'
import Navbar from './Component/head/Navbar'
import Footer from './Component/footer/Footer'
import {Outlet} from "react-router-dom"
import {Store} from '../App/Store'
import {Provider} from "react-redux"
function App() {
  const [count, setCount] = useState(0)

  return (
  < Provider  store={Store}>
    <Navbar/>
    <Outlet/>
    <Footer/>

    </Provider>
  )
}

export default App
