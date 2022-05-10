import React from 'react'
import type { NextPage } from 'next'
import Navbar from '../../components/common/Navbar/Navbar'
import Caffe from '../../components/pages/Cafe'


const SliderPage: NextPage = () =>  {
  return (
    <div>
      <Navbar />
      <Caffe />
    </div>
  )
}

export default SliderPage
