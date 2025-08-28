import React from 'react';
import { Link } from 'react-router-dom';
import { footer } from '../cms/content';

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white relative z-50">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center text-center">
          {/* Contact Information */}
          <div className="flex flex-col items-center justify-center h-full w-full">
            <table className="w-auto text-left text-sm">
              <tbody>
                <tr>
                  <td className="pr-2 align-center">
                    <img
                      src="/src/assets/Address.png"
                      alt="Address Icon"
                      className="w-18 h-full inline-block align-middle"
                    />
                  </td>
                  <td>
                    B3-3A-13A Solaris Dutamas, No. 1 Jalan Dutamas 1, 50480 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur.
                  </td>
                </tr>
                <tr>
                  <td className="pr-2 align-center">
                    <img
                      src="/src/assets/Letter.png"
                      alt="Email Icon"
                      className="w-18 h-full inline-block align-middle"
                    />
                  </td>
                  <td>
                    commercial@qoyyglobal.com
                  </td>
                </tr>
                <tr>
                  <td className="pr-2 align-center">
                    <img
                      src="/src/assets/Phone.png"
                      alt="Phone Icon"
                      className="w-18 h-full inline-block align-middle"
                    />
                  </td>
                  <td>
                    +6016-670 4742
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Logo and Copyright */}
          <div className="flex flex-col items-center justify-center space-y-4 h-full">
            <div className="flex items-center">
              <img
                src="/src/assets/QOYY GLOBAL-WHITE-LOGO.png"
                alt={footer.companyName}
                className="h-32"
              />
            </div>
            <p className=" whitespace-pre-line text-sm text-center !mt-0">
              {footer.copyright}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-end gap-2 justify-evenly h-full">
            {footer.quickLinks.filter(link => link.path !== '/').map((link) => (
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