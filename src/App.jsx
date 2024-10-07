import React from 'react'
import Header from './layouts/Header'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/style.css'
import Footer from './layouts/Footer'
import Home from './pages/Home'
const App = () => {
  return (
    <>
    <Header></Header>
    <Home></Home>
    <Footer></Footer>
    </>
  )
}

export default App
