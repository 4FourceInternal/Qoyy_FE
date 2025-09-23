import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCMSData from '../hooks/useCMSData';
import * as cmsService from '../services/cmsService';
import { getImageUrl } from '../utils/imageUtils';

// Import background image and layer overlay
import agencyDiscussionImg from '../assets/Perbincangan-Agensi-Kreatif_simple_compose.png';
import layerImg from '../assets/Layer.png';

const Home = () => {
  const { data: home, loading, error } = useCMSData('home');








  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-2xl">
          Error loading content
          
        </div>
      </div>
    );
  }

  // Use CMS data or fallback to local content
  const seo = home?.seo || { title: 'Qoyy Global - Marketing Made Simple', description: 'Marketing made simple, all under one roof. Qoyy Global provides innovative solutions for your business.' };
  const hero = home?.hero || { title1: 'MARKETING', title2: 'ALL UNDER ONE ROOF' };

  // Get the background image from Strapi or fallback to local image
  const backgroundImage = getImageUrl(home?.hero?.backgroundImage) || agencyDiscussionImg;

  return (
    <>
      <Helmet>
        <title>{seo?.metaTitle || seo?.title || 'Qoyy Global - Marketing Made Simple'}</title>
        <meta name="description" content={seo?.metaDescription || seo?.description || 'Marketing made simple, all under one roof. Qoyy Global provides innovative solutions for your business.'} />
      </Helmet>

      {/* Full Page Background Layer */}
      <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`
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
          <div className="relative z-10 text-white mb-32">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-2">
              {hero.title1 || 'MARKETING'}
            </h1>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4">
              MADE SIMPLE
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-normal">
              {hero.title2 || 'ALL UNDER ONE ROOF'}
            </h3>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;