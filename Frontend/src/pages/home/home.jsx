import React from 'react'
import Banner from './Banner'
import Blogs from '../blogs/Blogs'

function home() {
  return (
    <div className='bg-white text-primary container mx-auto mt-8 p-8'>
      <Banner/>
      <hr/> 
      <Blogs/>
    </div>
  )
}

export default home
