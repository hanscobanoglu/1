import type { NextPage } from 'next'
import Navbar from '../../components/common/Navbar/Navbar'
import Blogpage from '../../components/pages/Blogpage'
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../../relay/environment';
import CategoryUpdate from '../../components/common/Articleview/CategoryUpdate';





const BlogSite: NextPage = () =>  {
  return (
    <div>
      
      <RelayEnvironmentProvider environment={environment}>
      <Navbar />
      <CategoryUpdate />
    </RelayEnvironmentProvider>
    </div>
  )
}

export default BlogSite