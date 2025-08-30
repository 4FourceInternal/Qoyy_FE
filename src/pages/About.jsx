import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCMSData from '../hooks/useCMSData';
import * as cmsService from '../services/cmsService';

// Import background image and layer overlay
import companyWebsiteImg from '../assets/Gambar_Company_Website.jpg';
import layerImg from '../assets/Layer.png';

const About = () => {
  const { data: about, loading, error } = useCMSData('about');







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
  const seo = about?.seo || { title: 'About Us - Qoyy Global', description: 'Creative impact, measurable results. Learn about Qoyy Global\'s journey of growth built on shared successes.' };
  const heading = about?.heading || 'CREATIVE IMPACT, MEASURABLE RESULTS.';
  
  // Handle both CMS data structure and fallback
  let paragraphText;
  if (about?.paragraphs && Array.isArray(about.paragraphs) && about.paragraphs.length > 0) {
    // CMS data structure - use the first paragraph directly
    paragraphText = about.paragraphs[0];
  } else if (about?.paragraphs && typeof about.paragraphs === 'object') {
    // Complex CMS data structure (if it exists)
    try {
      const p = about.paragraphs;
      if (p.establishment_year && p.location && p.agency_type && p.solutions && p.team_size && p.client_portfolio) {
        paragraphText = `Established in ${p.establishment_year} and based in ${p.location}, we are an ${p.agency_type.toLowerCase()} delivering end-to-end solutions across ${p.solutions.join(', ').toLowerCase()}. With a growing team of ${p.team_size} passionate professionals, we proudly serve over ${p.client_portfolio.retained_government_clients} retained government clients and ${p.client_portfolio.corporate_brands} corporate brands.`;
      } else {
        // Fallback if complex structure is incomplete
        paragraphText = about.paragraphs[0] || 'Established in 2018 and based in Kuala Lumpur, we are an integrated marketing agency delivering end-to-end solutions across digital, creative, media, events, and print. With a growing team of 15 passionate professionals, we proudly serve over 20 retained government clients and 10 corporate brands.';
      }
    } catch (error) {
      console.warn('Error processing complex paragraph structure:', error);
      paragraphText = about.paragraphs[0] || 'Established in 2018 and based in Kuala Lumpur, we are an integrated marketing agency delivering end-to-end solutions across digital, creative, media, events, and print. With a growing team of 15 passionate professionals, we proudly serve over 20 retained government clients and 10 corporate brands.';
    }
  } else {
    // Fallback structure
    paragraphText = about?.paragraphs?.[0] || 'Established in 2018 and based in Kuala Lumpur, we are an integrated marketing agency delivering end-to-end solutions across digital, creative, media, events, and print. With a growing team of 15 passionate professionals, we proudly serve over 20 retained government clients and 10 corporate brands.';
  }
  
  const quote = about?.quote || '"OUR JOURNEY OF GROWTH IS BUILT ON SHARED SUCCESSES WITH THOSE WE SERVE."';



  return (
    <>
      <Helmet>
        <title>{seo?.metaTitle || seo?.title || 'About Us - Qoyy Global'}</title>
        <meta name="description" content={seo?.metaDescription || seo?.description || 'Creative impact, measurable results. Learn about Qoyy Global\'s journey of growth built on shared successes.'} />
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
            {heading}
          </h3>
        {/* Content Section */}

        <div className="flex-grow flex flex-col justify-center items-center px-4 py-16">
          {/* Small heading */}

          {/* Description paragraph */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-white text-base md:text-lg lg:text-xl text-center leading-relaxed font-normal">
              {paragraphText}
            </p>
          </div>

          {/* Quote section */}
          <div className="max-w-5xl mx-auto">
            <p className="text-white text-center text-lg md:text-xl lg:text-2xl font-bold leading-relaxed">
              {quote}
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;