import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Testimony from '../components/Testimony'
import Menu from '../components/Menu'
import Blog from '../components/Blog'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Menu />
        <Testimony />
        <Blog />
        <Footer />
    </div>
  )
}

export default Home