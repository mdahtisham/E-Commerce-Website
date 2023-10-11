import { useState } from 'react'
import { React } from "react"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css'

import { Store } from "./Pages/Store"
import { Iphone } from "./Pages/Iphone"
import { Mac } from "./Pages/Mac"
import { Ipad } from "./Pages/Ipad"
import { Watch } from "./Pages/Watch"
import { AirPods } from "./Pages/AirPods"
import { Form } from "./Pages/Contact"
import { Nav } from "./Pages/Nav"
import { Cart } from "./Pages/cart"
import { Login } from './Pages/login'

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Store />} />
          <Route path='/iphone' element={<Iphone />} />
          <Route path='/mac' element={<Mac />} />
          <Route path='/ipad' element={<Ipad />} />
          <Route path='/watch' element={<Watch />} />
          <Route path='/airpods' element={<AirPods />} />
          <Route path='/contact' element={<Form />} />
          <Route path='cart' element={<Cart />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
