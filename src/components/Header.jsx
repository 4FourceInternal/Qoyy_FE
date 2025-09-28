import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useCMSData from '../hooks/useCMSData';
import * as cmsService from '../services/cmsService';
import LogoCompany from '../assets/QOYY GLOBAL-WHITE-LOGO.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { data: global, loading, error } = useCMSData('global');





  const isActive = (path) => location.pathname === path;

  // Use CMS data or fallback to local content
  // Check if header component exists and has data, otherwise use fallback
  const hasHeaderData = global?.header && 
    global.header.brand && 
    global.header.navLinks && 
    Array.isArray(global.header.navLinks) && 
    global.header.navLinks.length > 0;

  const header = hasHeaderData ? global.header : {
    brand: {
      logoText: 'Qoyy Global'
    },
    navLinks: [
      { path: '/about', label: 'About Us' },
      { path: '/services', label: 'Our Service' },
      { path: '/info', label: 'Quick Info' },
      { path: '/contact', label: 'Contact Us' }
    ]
  };

  // Debug logging for mobile navigation
  console.log('Header data:', header);
  console.log('Nav links:', header?.navLinks);
  console.log('Is menu open:', isMenuOpen);



  if (loading) {
    return (
      <header className="bg-transparent top-0 z-50 h-32">
        <div className="container-custom h-full">
          <div className="flex items-center justify-center h-full">
            <div className="text-white text-lg">Loading...</div>
          </div>
        </div>
      </header>
    );
  }

  if (error) {
    return (
      <header className="bg-transparent top-0 z-50 h-32">
        <div className="container-custom h-full">
          <div className="flex items-center justify-center h-full">
            <div className="text-white text-lg">
              Error loading header

            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-transparent top-0 z-50 h-32 relative">
      <div className="container-custom h-full">
        <div className="flex flex-col justify-between h-full">
          <div className="flex items-center justify-between flex-1">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-white flex items-center">
              <img
                src={LogoCompany}
                alt={header?.brand?.logoText || 'Qoyy Global'}
                className="h-30 mr-2"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4">
              {header?.navLinks?.filter(link => link.path !== '/').map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-200 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => {
                console.log('Hamburger clicked, isMenuOpen:', isMenuOpen);
                setIsMenuOpen(!isMenuOpen);
              }}
              className="md:hidden p-2 text-gray-300 hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Ticker line (white, no animation, no content) */}
          <div className="w-full h-1 bg-white mb-1"></div>
        </div>
      </div>

      {/* Mobile Navigation - Moved outside container for proper positioning */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700 absolute top-full left-0 right-0 z-50">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {header?.navLinks?.filter(link => link.path !== '/').map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => {
                  console.log('Mobile nav link clicked:', link.path);
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;