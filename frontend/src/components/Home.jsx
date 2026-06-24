import React from 'react'
import Footer from './Footer'
import Hero from './Hero'

function Home() {
  return (
    <div className=" bg-white text-black dark:bg-gray-900 dark:text-white">
     <Hero />
      <Footer />
    </div>
  )
}

export default Home