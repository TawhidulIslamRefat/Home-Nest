import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Loading from "../Components/Loading/Loading";
import Aos from "aos";
import "aos/dist/aos.css";

const MainLayout = () => {
  const [showLoader, setShowLoader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    setShowLoader(true);
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {showLoader && (
        <div className="fixed inset-0 z-[999] bg-base-100 flex items-center justify-center">
          <Loading />
        </div>
      )}

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
