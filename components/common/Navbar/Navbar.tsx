import { FunctionComponent, useEffect, useState } from 'react'
import logo from '../../../public/test.png';
import Link from "next/link";
import { useRouter } from 'next/router';

const Navbar: FunctionComponent = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true)
  const [currentWidth, setCurrentWidth] = useState('');
  console.log(router.query.log); 
  useEffect(() => {
    function handleResize() {
      if(window.innerWidth < 600){
        setCurrentWidth('mobile');
      }else{
        setCurrentWidth('desktop');
      }

      if(router.query.log == "true" ){
        setLoading(true)
      }else{
        setLoading(false)
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [currentWidth,router]);

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
          {
            loading ? 
            <Link href="/blogsite/admin-login">Login</Link>
            :
            <Link href={{
              pathname: '/',
              query: { log: loading==false } 
            }}>
              Logout</Link>
          }
          
        </div>
      </div>      
    </div>
  )
}

export default Navbar;
