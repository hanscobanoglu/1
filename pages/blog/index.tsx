import React from 'react';
import { NextPage } from 'next';
import Blog from '../../components/pages/Blog';
import Navbar from '../../components/common/Navbar/Navbar';

const BlogPage: NextPage = () => {
  return (
    <div>
      <Navbar/>
      <Blog/>
    </div>
  );
};

export default BlogPage;
