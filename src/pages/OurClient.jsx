import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCMSData from '../hooks/useCMSData';
import * as cmsService from '../services/cmsService';
import { getImageUrl } from '../utils/imageUtils';

import companyWebsiteImg from '../assets/Gambar_Company_Website.jpg';
import layerImg from '../assets/Layer.png';

const OurClient = () => {
  const { data: client, loading, error } = useCMSData('client');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-2xl">
          Error loading content
        </div>
      </div>
    );
  }

  const backgroundImage = companyWebsiteImg;
  const logos = Array.isArray(client?.Clients_logo) ? client.Clients_logo : [];

  return (
    <>
      <Helmet>
        <title>{client?.Title || 'Our Clients - Qoyy Global'}</title>
      </Helmet>

      {/* Background */}
      <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`
          }}
        />
      </div>

      <main className="container-custom relative z-0 min-h-screen flex flex-col">

        <h2 className="text-center text-white text-lg md:text-xl mt-6 tracking-wider">
        </h2>

        <h2 className="text-center text-white text-lg md:text-xl mt-2 tracking-wider uppercase">
          {client?.Title || 'OUR CLIENTS'}
        </h2>

        <h3 className="text-center text-white text-2xl md:text-3xl lg:text-4xl font-bold mt-4 mb-4 tracking-wide font-open-sans">
          {client?.TajukBesar || ''}
        </h3>

        <p className="text-center text-white/90 text-base md:text-lg max-w-3xl mx-auto mb-6">
          {client?.SmallSubtitle || ''}
        </p>

        <div className="flex-grow flex flex-col justify-center items-center px-4 py-8 max-w-4xl mx-auto">
          
          <div className="text-white text-base md:text-lg leading-relaxed whitespace-pre-line text-center mb-12">
            {client?.BodyText || ''}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {logos.map((row, index) => (
              <div key={row.id ?? index} className="flex flex-col items-center gap-2 text-center">
                
                {row.Client_image && (
                  <img
                    src={getImageUrl(row.Client_image)}
                    alt={row.Client_Name || 'Client'}
                    className="max-h-24 w-auto object-contain"
                  />
                )}

                {row.Client_Name && (
                  <span className="text-white text-xs md:text-sm">
                    {row.Client_Name}
                  </span>
                )}

              </div>
            ))}
          </div>

        </div>
      </main>
    </>
  );
};

export default OurClient;