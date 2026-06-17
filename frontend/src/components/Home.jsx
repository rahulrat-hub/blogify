import React from 'react'
import Register from '../pages/Register'
import Footer from './Footer'

function Home() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <Register />
      <Footer />
    </div>
  )
}

export default Home