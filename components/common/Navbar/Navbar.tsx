import { FunctionComponent, useEffect, useState } from 'react'
import logo from '../../../public/test.png';
import Link from "next/link";

const Navbar: FunctionComponent = () => {
  const [currentWidth, setCurrentWidth] = useState('');
  useEffect(() => {
    function handleResize() {
      if(window.innerWidth < 600){
        setCurrentWidth('mobile');
      }else{
        setCurrentWidth('desktop');
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [currentWidth]);
  //console.log('current',currentWidth)
  return (
    <div className="navbar-container">
      <div className="navbar-logo-wrapper">
        <img src={logo.src} alt="logo" className="navbar-logo"/>
      </div>
      <div className="navbar-buttons-container">
        <div className="navbar-button-wrapper">
          <Link href="/">Home</Link>
          <Link href="/aboutus">About Us</Link>
          <Link href="/photos">Photos</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/scroll">Scroll</Link>
          <Link href="/slider">SliderPage</Link>
          <Link href="/blogsite">BlogPage</Link>
        </div>
      </div>      
    </div>
  )
}

export default Navbar;
