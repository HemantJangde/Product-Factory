import { useState } from 'react'
import './App.css'
import Navbar from './Component/head/Navbar'
import Footer from './Component/footer/Footer'
import {Outlet} from "react-router-dom"
import {Store} from '../App/Store'
import {Provider} from "react-redux"
import Signin from './Component/Page/SignIn/Signin'
function App() {
 
  const [isLoggedIn, setIsloggedIn] = useState(true);
  const [role, setRole] = useState("User");
  // const [role, setRole] = useState("Admin");


  return (

  < Provider  store={Store}>




    <Navbar  isloggedIn={isLoggedIn} role={role} />

    {isLoggedIn ? <Outlet/> : <Signin   setIsloggedIn={setIsloggedIn} setRole={setRole}/>}
        


    <Footer/>

    </Provider>
  )
}

export default App
