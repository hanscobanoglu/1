import type { NextPage } from 'next'
import Navbar from '../../components/common/Navbar/Navbar'
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../../relay/environment';
import BookUpdate from '../../components/common/Articleview/BookUpdate';


const BlogSite: NextPage = () =>  {
  return (
    <div>
      
      <RelayEnvironmentProvider environment={environment}>
      <Navbar />
      <BookUpdate />
    </RelayEnvironmentProvider>
    </div>
  )
}

export default BlogSite