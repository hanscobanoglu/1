import type { NextPage } from 'next'
import Navbar from '../../components/common/Navbar/Navbar'
import Blogpage from '../../components/pages/Blogpage'
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../../relay/environment';
import CreateCategory from '../../components/common/Articleview/CreateCategory';


const BlogSite: NextPage = () =>  {
  return (
    <div>
      
      <RelayEnvironmentProvider environment={environment}>
      <Navbar />
      <CreateCategory />
    </RelayEnvironmentProvider>
    </div>
  )
}

export default BlogSite