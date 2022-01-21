import React from 'react';
import { NextPage } from 'next';
import AboutUs from '../../components/pages/AboutUs';
import Navbar from '../../components/common/Navbar/Navbar';

const AboutUsPage: NextPage = () => {
  return (
    <div>
      <Navbar/>
      <AboutUs/>
    </div>
  );
};

export default AboutUsPage;
