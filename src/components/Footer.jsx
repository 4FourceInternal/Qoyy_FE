import React from 'react';
import { Link } from 'react-router-dom';
import useCMSData from '../hooks/useCMSData';
import * as cmsService from '../services/cmsService';
import LogoCompany from '../assets/QOYY GLOBAL-WHITE-LOGO.png';
import phoneicon from '../assets/Phone.svg';
import emailicon from '../assets/Letter.svg';
import addressicon from '../assets/Address.png';

const Footer = () => {
  const { data: global, loading, error } = useCMSData('global');





  // Use CMS data or fallback to local content
  const footer = global?.footer || {
    companyName: 'Qoyy Global',
    copyright: 'COPYRIGHT Ⓒ 2025 QOYY GLOBAL (002857086-D)‍\nAll rights reserved.',
    quickLinks: [
      { path: '/about', label: 'About Us' },
      { path: '/services', label: 'Our Service' },
      { path: '/info', label: 'Quick Info' },
      { path: '/contact', label: 'Contact Us' }
    ],
    contactInfo: {
      address: 'B3-3A-13A Solaris Dutamas, No. 1 Jalan Dutamas 1, 50480 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur.',
      email: 'commercial@qoyyglobal.com',
      phone: '+6016-670 4742'
    }
  };

  // Extract contact info with fallbacks
  // Handle both Strapi data structure (addressLines array) and fallback (address string)
  const contactInfo = footer?.contactInfo ? {
    // Convert addressLines array to string, or use fallback
    address: Array.isArray(footer.contactInfo.addressLines) 
      ? footer.contactInfo.addressLines.join(', ')
      : footer.contactInfo.addressLines || 'B3-3A-13A Solaris Dutamas, No. 1 Jalan Dutamas 1, 50480 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur.',
    email: footer.contactInfo.email || 'commercial@qoyyglobal.com',
    phone: footer.contactInfo.phone || '+6016-670 4742'
  } : {
    address: 'B3-3A-13A Solaris Dutamas, No. 1 Jalan Dutamas 1, 50480 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur.',
    email: 'commercial@qoyyglobal.com',
    phone: '+6016-670 4742'
  };

  // Extract quick links with fallbacks
  const quickLinks = footer?.quickLinks || [
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Our Service' },
    { path: '/info', label: 'Quick Info' },
    { path: '/contact', label: 'Contact Us' }
  ];



  if (loading) {
    return (
      <footer className="bg-orange-500 text-white relative z-50">
        <div className="container-custom section-padding">
          <div className="flex items-center justify-center h-32">
            <div className="text-white text-lg">Loading...</div>
          </div>
        </div>
      </footer>
    );
  }

  if (error) {
    return (
      <footer className="bg-orange-500 text-white relative z-50">
        <div className="container-custom section-padding">
          <div className="flex items-center justify-center h-32">
            <div className="text-white text-lg">
              Error loading footer

            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-orange-500 text-white relative z-50">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center text-center">
          {/* Contact Information */}
          <div className="flex flex-col items-center justify-center h-full w-full mt-8">
            <table className="w-auto text-center md:text-left text-sm">
              <tbody>
                <tr>
                  <td className="align-center">
                    <img
                      src={addressicon}
                      alt="Address Icon"
                      className="min-w-6 w-full h-full inline-block align-middle"
                    />
                  </td>
                  <td>
                    {contactInfo.address}
                  </td>
                </tr>
                <tr>
                  <td className="align-center">
                    <img
                      src={emailicon}
                      alt="Email Icon"
                      className="min-w-6 w-full h-full inline-block align-middle"
                    />
                  </td>
                  <td>
                    {contactInfo.email}
                  </td>
                </tr>
                <tr>
                  <td className="align-center">
                    <img
                      src={phoneicon}
                      alt="Phone Icon"
                      className="min-w-6 w-full h-full inline-block align-middle"
                    />
                  </td>
                  <td>
                    {contactInfo.phone}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Logo and Copyright */}
          <div className="flex flex-col items-center justify-center space-y-4 h-full">
            <div className="flex items-center">
              <img
                src={LogoCompany}
                alt={footer.companyName}
                className="h-32"
              />
            </div>
            <p className=" whitespace-pre-line text-sm text-center !mt-0">
              {footer.copyright}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-end gap-2 justify-evenly h-full">
            {quickLinks.filter(link => link.path !== '/').map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className="text-white font-semibold text-sm hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;