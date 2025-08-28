import React from 'react';
import { Helmet } from 'react-helmet-async';
import { home } from '../cms/content';

// Import background image and layer overlay
import agencyDiscussionImg from '../assets/Perbincangan-Agensi-Kreatif_simple_compose.png';
import layerImg from '../assets/Layer.png';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{home.seo.title}</title>
        <meta name="description" content={home.seo.description} />
      </Helmet>

      {/* Full Page Background Layer */}
      <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${agencyDiscussionImg})`
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

      <main className="container-custom relative z-0">
        {/* Hero Section */}
        <div className="relative h-screen flex items-center">
          {/* <div className="absolute inset-0 z-0">
            <img
              src={home.hero.backgroundImage}
              alt="Marketing Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div> */}
         
          <div className="relative z-10 text-white mb-32">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-2">
              MARKETING
            </h1>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4">
              MADE SIMPLE
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-normal">
              {home.hero.title2}
            </h3>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;