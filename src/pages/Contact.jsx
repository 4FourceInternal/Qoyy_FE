import React from 'react';
import { Helmet } from 'react-helmet-async';
import LoadingSkeleton from '../components/LoadingSkeleton';
import useCMSData from '../hooks/useCMSData';
import { contact } from '../cms/content';

// Import background image and layer overlay
import contactUsImg from '../assets/contactUs.png';
import layerImg from '../assets/Layer.png';

const Contact = () => {
  const { data, isLoading, error } = useCMSData('contact');

  return (
    <>
      <Helmet>
        <title>{contact.seo.title}</title>
        <meta name="description" content={contact.seo.description} />
      </Helmet>

      {/* Full Page Background Layer */}
      <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${contactUsImg})`
          }}
        />
        {/* Layer.png overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={layerImg}
            alt="Layer Overlay"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <main className="min-h-screen relative z-0">
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
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8 max-w-4xl mx-auto">
                  {/* WhatsApp Button */}
                  <div className="w-full md:w-auto">
                    <a
                      href={contact.buttons.whatsapp.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full flex items-center justify-center gap-3 transition-colors duration-300 text-lg whitespace-nowrap"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      CONTACT US VIA WHATSAPP
                    </a>
                  </div>

                  {/* Email Button */}
                  <div className="w-full md:w-auto">
                    <a
                      href={contact.buttons.email.href}
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full flex items-center justify-center gap-3 transition-colors duration-300 text-lg whitespace-nowrap"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      CONTACT US VIA EMAIL
                    </a>
                  </div>
                </div>

              
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;