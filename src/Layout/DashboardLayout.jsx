import React, { use, useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import { 
  FaBars, 
  FaTimes, 
  FaHome, 
  FaChartBar, 
  FaPlus, 
  FaBuilding, 
  FaStar, 
  FaUser, 
  FaCog, 
  FaSignOutAlt,
  FaBell,
  FaSearch,
  FaChevronDown,
  FaChevronRight,
  FaDashcube,
  FaUserCircle,
  FaEnvelope,
  FaMoon,
  FaSun,
  FaExpand,
  FaCompress
} from 'react-icons/fa';
import { AuthContext } from '../Contexts/AuthContext';
import Swal from 'sweetalert2';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { user, logOut } = use(AuthContext);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notificationDropdownOpen, setNotificationDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      setProfileDropdownOpen(false);
      setNotificationDropdownOpen(false);
    };

    if (profileDropdownOpen || notificationDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [profileDropdownOpen, notificationDropdownOpen]);

  const menuItems = [
    {
      name: 'Overview',
      path: '/dashboard',
      icon: FaDashcube,
      exact: true,
      badge: null
    },
    {
      name: 'Add Property',
      path: '/dashboard/add-property',
      icon: FaPlus,
      badge: 'New'
    },
    {
      name: 'My Properties',
      path: '/dashboard/my-property',
      icon: FaBuilding,
      badge: '24'
    },
    {
      name: 'My Ratings',
      path: '/dashboard/my-ratings',
      icon: FaStar,
      badge: '4.8'
    }
  ];

  const isActiveRoute = (path, exact = false) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logout Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! ",
          error,
        });
      });
  };

  const sidebarWidth = sidebarCollapsed ? 'w-20' : 'w-64';
  return (
    <div className="h-screen overflow-hidden bg-gray-50 dark:bg-gray-900 flex">
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className={`fixed inset-y-0 left-0 z-50 ${sidebarWidth} bg-white dark:bg-gray-800 shadow-2xl transform transition-all duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 border-r border-gray-200 dark:border-gray-700 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700 bg-linear-to-r from-[#FF5A3C] to-red-500">
          <Link to="/" className={`flex items-center gap-3 ${sidebarCollapsed ? 'justify-center' : ''}`}>
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
              <FaHome className="text-white text-lg" />
            </div>
            {!sidebarCollapsed && (
              <span className="text-xl font-bold text-white">HomeNest</span>
            )}
          </Link>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="hidden lg:flex p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition-all duration-200"
            >
              <FaBars className="text-sm" />
            </button>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition-all duration-200"
            >
              <FaTimes className="text-sm" />
            </button>
          </div>
        </div>

        <nav className="flex-1 px-3 py-6 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = isActiveRoute(item.path, item.exact);
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-linear-to-r from-[#FF5A3C] to-red-500 text-white shadow-lg transform scale-105'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white hover:scale-105'
                }`}
                title={sidebarCollapsed ? item.name : ''}
              >
                <Icon className={`text-lg shrink-0 ${isActive ? 'text-white' : 'text-gray-500 dark:text-gray-400 group-hover:text-[#FF5A3C]'}`} />
                
                {!sidebarCollapsed && (
                  <>
                    <span className="flex-1">{item.name}</span>
                    {isActive && <FaChevronRight className="text-sm" />}
                  </>
                )}

                {sidebarCollapsed && (
                  <div className="absolute left-full ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                    {item.name}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
          <Link
            to="/"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all duration-200 mb-2 ${sidebarCollapsed ? 'justify-center' : ''}`}
            title={sidebarCollapsed ? 'Home' : ''}
          >
            <FaHome className="text-lg text-gray-500 dark:text-gray-400" />
            {!sidebarCollapsed && <span>Back to Home</span>}
          </Link>
          
          <button
            onClick={handleLogOut}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200 ${sidebarCollapsed ? 'justify-center' : ''}`}
            title={sidebarCollapsed ? 'Logout' : ''}
          >
            <FaSignOutAlt className="text-lg" />
            {!sidebarCollapsed && <span>Logout</span>}
          </button>
        </div>
      </div>

      <div className={`flex-1 flex flex-col h-screen overflow-hidden`}>
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-30 h-16 shrink-0">
          <div className="flex items-center justify-between h-full px-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-xl text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-700 transition-all duration-200"
              >
                <FaBars />
              </button>

              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  {menuItems.find(item => isActiveRoute(item.path, item.exact))?.name || 'Dashboard'}
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Welcome back, {user?.displayName || 'User'}
                </p>
              </div>
            </div>
            </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-6">
          <div className="h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;