import React from 'react'
import type { NextPage } from 'next'
import HeightPage from '../../components/pages/HeightPage'
import Navbar from '../../components/common/Navbar/Navbar'

const ScrollPage: NextPage = () =>  {
  return (
    <div>
      <Navbar />
      <HeightPage />
    </div>
  )
}

export default ScrollPage
