import type { NextPage } from 'next'
import Articledetail from '../../components/common/Articleview/articledetail'
import Navbar from '../../components/common/Navbar/Navbar'


const Detail: NextPage = () =>  {

  return (
    <div>
       <Navbar />
      <Articledetail  />
    </div>
  )
}

export default Detail
