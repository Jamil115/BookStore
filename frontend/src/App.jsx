import React from 'react'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AllBooks from './pages/AllBooks'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import AboutUs from './pages/AboutUs'

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/all-books' element={<AllBooks />}></Route>
            <Route exact path='/cart' element={<Cart />}></Route>
            <Route exact path='/profile' element={<Profile />}></Route>
            <Route exact path='/login' element={<LogIn />}></Route>
            <Route exact path='/signup' element={<SignUp />}></Route>
            <Route exact path='/about-us' element={<AboutUs />}></Route>
          </Routes>
        <Footer />
      </Router>
    </div>
  )
}
