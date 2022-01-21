import React from 'react'
import type { NextPage } from 'next'
import Navbar from '../../components/common/Navbar/Navbar'
import Slider from '../../components/pages/Slider'


const SliderPage: NextPage = () =>  {
  return (
    <div>
      <Navbar />
      <Slider />
    </div>
  )
}

export default SliderPage
