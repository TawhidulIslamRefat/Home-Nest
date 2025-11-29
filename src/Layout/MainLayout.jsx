import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Components/Footer/Footer';
import Loading from '../Components/Loading/Loading';
import Aos from 'aos';
import "aos/dist/aos.css";

const MainLayout = () => {
    const [showLoader, setShowLoader] = useState(false);
  const location = useLocation();
  useEffect(()=>{
    Aos.init({
      duration:1000,
    })
  },[])
  useEffect(() => {
    setShowLoader(true);
    const timeOut = setTimeout(() => {
      setShowLoader(false);
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [location.pathname]);
      return showLoader ? (
        <div>
      <Loading></Loading>
    </div>
      ) : (
        <div className='flex flex-col'>
            <nav>
                <Navbar></Navbar>
            </nav>

            <main className='flex-1 min-h-screen'>
                <Outlet></Outlet>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;