import React from 'react';
import { Helmet } from 'react-helmet-async';
import { about } from '../cms/content';

// Import background image and layer overlay
import companyWebsiteImg from '../assets/Gambar_Company_Website.jpg';
import layerImg from '../assets/Layer.png';

const About = () => {
  return (
    <>
      <Helmet>
        <title>{about.seo.title}</title>
        <meta name="description" content={about.seo.description} />
      </Helmet>

      {/* Full Page Background Layer */}
      <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${companyWebsiteImg})`
          }}
        />
        {/* Layer.png overlay */}
        <div className="absolute inset-0 z-0">
          {/* <img
            src={layerImg}
            alt="Layer Overlay"
            className="w-full h-full object-cover"
          /> */}
        </div>
      </div>

      <main className="container-custom relative z-0 min-h-screen flex flex-col">
        <h2 className="text-center text-white text-lg md:text-xl mt-6 tracking-wider">
            ABOUT US
          </h2>

          {/* Creative Impact tagline */}
          <h3 className="text-center text-white text-2xl md:text-3xl lg:text-4xl font-bold mt-4 mb-8 tracking-wide">
            CREATIVE IMPACT, MEASURABLE RESULTS.
          </h3>
        {/* Content Section */}

        <div className="flex-grow flex flex-col justify-center items-center px-4 py-16">
          {/* Small heading */}

          {/* Description paragraph */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-white text-base md:text-lg lg:text-xl text-center leading-relaxed font-normal">
              {about.paragraphs[0]}
            </p>
          </div>

          {/* Quote section */}
          <div className="max-w-5xl mx-auto">
            <p className="text-white text-center text-lg md:text-xl lg:text-2xl font-bold leading-relaxed">
              {about.quote}
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;