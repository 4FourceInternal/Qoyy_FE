import React from 'react';
import { Helmet } from 'react-helmet-async';
import LoadingSkeleton from '../components/LoadingSkeleton';
import useCMSData from '../hooks/useCMSData';
import { contact } from '../cms/content';

const Contact = () => {
  const { data, isLoading, error } = useCMSData('contact');

  return (
    <>
      <Helmet>
        <title>{contact.seo.title}</title>
        <meta name="description" content={contact.seo.description} />
      </Helmet>
     
      <main className="min-h-screen">
        <div className="container-custom section-padding">
          <div className="max-w-8xl mx-auto">
             <h2 className="text-center text-white text-xl mb-10">
                          CONTACT US
                        </h2>
            {/* Main Heading */}
            <div className="text-center mb-12">
             <h1 className="text-3xl md:text-6xl font-bold text-white mb-8 whitespace-nowrap ">
              {contact.heading}
            </h1>

            </div>

            {/* Sub Heading */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-4xl font-bold text-white mb-8">
                {contact.subheading}
              </h2>
              <p className="text-xl md:text-2xl text-white leading-relaxed max-w-4xl mx-auto">
                {contact.lead}
              </p>
            </div>

            {/* Contact Buttons */}
            {isLoading ? (
              <LoadingSkeleton type="contact" />
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  <div className="text-center">
                    <a
                      href={contact.buttons.whatsapp.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-block w-full py-6 text-xl font-bold"
                    >
                      {contact.buttons.whatsapp.label}
                    </a>
                    <p className="text-gray-400 mt-4">
                      Quick responses for urgent inquiries and immediate support
                    </p>
                  </div>
                 
                  <div className="text-center">
                    <a
                      href={contact.buttons.email.href}
                      className=" btn-secondary inline-block w-full py-6 text-xl font-bold"
                    >
                      {contact.buttons.email.label}
                    </a>
                    <p className="text-gray-400 mt-4">
                      Detailed project discussions and comprehensive proposals
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                {/* <div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-4 text-2xl">📍</span>
                      <div>
                        <div className="font-semibold">Address</div>
                        {contact.info.addressLines.map((line, index) => (
                          <div key={index}>{line}</div>
                        ))}
                      </div>
                    </div>
                   
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-4 text-2xl">📞</span>
                      <div>
                        <div className="font-semibold">Phone</div>
                        <div>{contact.info.phone}</div>
                      </div>
                    </div>
                   
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-4 text-2xl">✉️</span>
                      <div>
                        <div className="font-semibold">Email</div>
                        <div>{contact.info.email}</div>
                      </div>
                    </div>
                   
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-4 text-2xl">🕒</span>
                      <div>
                        <div className="font-semibold">Business Hours</div>
                        {contact.info.hours.map((hour, index) => (
                          <div key={index}>{hour}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div> */}
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;