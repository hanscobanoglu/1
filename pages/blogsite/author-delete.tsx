import type { NextPage } from 'next'
import Navbar from '../../components/common/Navbar/Navbar'
import Blogpage from '../../components/pages/Blogpage'
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../../relay/environment';
import AuthorUpdate from '../../components/common/Articleview/AuthorUpdate';
import AuthorDelete from '../../components/common/Articleview/AuthorDelete';





const BlogSite: NextPage = () =>  {
  return (
    <div>
      
      <RelayEnvironmentProvider environment={environment}>
      <Navbar />
      <AuthorDelete />
    </RelayEnvironmentProvider>
    </div>
  )
}

export default BlogSite