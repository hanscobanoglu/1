import React from 'react';
import { NextPage } from 'next';
import Photos from '../../components/pages/Photos';
import Navbar from '../../components/common/Navbar/Navbar';

const PhotosPage: NextPage = () => {
  return (
    <div>
      <Navbar/>
      <Photos/>
    </div>
  );
};

export default PhotosPage;
