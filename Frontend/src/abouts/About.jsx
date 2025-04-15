import React from 'react'
import Navbar from '../components/Navbar'
import Abouts from "../components/About"

function About() {
  return (
    <div>
      <Navbar />
      <div className='min-h-screen'>
        <Abouts />
      </div>
    </div>
  )
}

export default About
