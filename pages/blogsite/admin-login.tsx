import type { NextPage } from 'next'
import Navbar from '../../components/common/Navbar/Navbar'
import Blogpage from '../../components/pages/Blogpage'
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../../relay/environment';

import Login from '../../components/common/Login/login';


const BlogSite: NextPage = () =>  {
  return (
    <div>
      
      <RelayEnvironmentProvider environment={environment}>
      <Navbar />
      <Login />
    </RelayEnvironmentProvider>
    </div>
  )
}

export default BlogSite