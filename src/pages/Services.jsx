import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import useCMSData from '../hooks/useCMSData';
import { getImageUrl } from '../utils/imageUtils';

// Import background images
import companyWebsiteImg from '../assets/Gambar_Company_Website.jpg';
import workerStateImg from '../assets/Keadaan-Pekerja-Fancy_simple_compose.png';
import agencyDiscussionImg from '../assets/Perbincangan-Agensi-Kreatif_simple_compose.png';
import quickInfoBgImg from '../assets/quickInfo-bg.png';
import contactUsImg from '../assets/contactUs.png';

const Services = () => {
  // All hooks must be called in the same order every render
  const { data: services, loading, error } = useCMSData('services');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Ensure currentSlide is within bounds of available slides
  useEffect(() => {
    if (services?.cards && services.cards.length > 0 && currentSlide >= services.cards.length) {
      setCurrentSlide(0);
    }
  }, [services?.cards, currentSlide]);

  // Service content slides - dynamically generated from CMS data
  const serviceSlides = useMemo(() => {
    const cards = services?.cards || [];
    
    if (cards && cards.length > 0) {
      // Use CMS data - exactly as many slides as cards
      return cards.map((card, index) => ({
        title: card.title || `Service ${index + 1}`,
        description: card.description || 'Service description will appear here.',
        features: Array.isArray(card.features) ? card.features : [],
        backgroundImage: card.backgroundImage || null
      }));
    }
    
    // Fallback slides only if no CMS data
    return [
      {
        title: 'Media Monitoring',
        description: 'Real-time tracking of brand mentions, sentiment analysis, and competitive intelligence across all media channels.',
        features: ['24/7 brand monitoring', 'Sentiment analysis', 'Crisis detection', 'Competitive insights'],
        backgroundImage: companyWebsiteImg
      },
      {
        title: 'Public Relations',
        description: 'Strategic PR campaigns that build brand reputation, manage crises, and create positive media coverage.',
        features: ['Press release distribution', 'Media relations', 'Crisis management', 'Event PR'],
        backgroundImage: workerStateImg
      },
      {
        title: 'Strategic Communication',
        description: 'Comprehensive communication strategies that align with your business objectives and target audience.',
        features: ['Message development', 'Stakeholder engagement', 'Content strategy', 'Brand positioning'],
        backgroundImage: agencyDiscussionImg
      },
      {
        title: 'Digital PR',
        description: 'Online reputation management and digital media strategies for the modern digital landscape.',
        features: ['Online reputation management', 'Social media PR', 'Influencer partnerships', 'Digital crisis management'],
        backgroundImage: quickInfoBgImg
      },
      {
        title: 'Reporting & Analytics',
        description: 'Comprehensive reporting and analytics to measure the impact and ROI of your PR campaigns.',
        features: ['Monthly reports', 'ROI measurement', 'Performance tracking', 'Strategic insights'],
        backgroundImage: contactUsImg
      }
    ];
  }, [services?.cards]);


  const nextSlide = () => {
    if (isTransitioning || !serviceSlides || serviceSlides.length === 0) return;

    setIsTransitioning(true);
    setCurrentSlide((prev) => {
      const next = (prev + 1) % serviceSlides.length;
      return Math.max(0, Math.min(next, serviceSlides.length - 1));
    });

    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

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
  const seo = services?.seo || { title: 'Our Service - Qoyy Global', description: 'Solutions that drive brands forward. Media monitoring and public relations services that keep your brand informed, relevant, and strategically visible.' };
  const heading = services?.heading || 'SOLUTIONS THAT DRIVE BRANDS FORWARD';

  return (
    <>
      <Helmet>
        <title>{seo?.metaTitle || seo?.title || 'Our Service - Qoyy Global'}</title>
        <meta name="description" content={seo?.metaDescription || seo?.description || 'Solutions that drive brands forward. Media monitoring and public relations services that keep your brand informed, relevant, and strategically visible.'} />
      </Helmet>

      {/* Full Page Background Layer - Behind Everything */}
      <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
        {/* Background Images with Crossfade Animation - Only for actual slides */}
        {serviceSlides && serviceSlides.length > 0 && serviceSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${getImageUrl(slide.backgroundImage)})`
            }}
          />
        ))}
      </div>

      {/* Content Layer - Above Background */}
      <main className="container-custom min-h-screen flex flex-col relative z-0">
        <h2 className="text-center text-white text-xl mt-10 font-open-sans">
          OUR SERVICE
        </h2>
        <div className="relative flex items-center justify-center rounded-lg mt-8 mb-8 flex-grow"> 
          <div className="relative w-full flex flex-col items-center justify-center px-4 h-full">
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-6 uppercase font-open-sans">
              {heading}
            </h1>
           
            {/* Sliding Content Section */}
            <div className="w-full mb-8">
              {serviceSlides && serviceSlides.length > 0 && serviceSlides[currentSlide] ? (
                <div className="relative bg-black bg-opacity-30 rounded-lg p-8 mb-8 h-96 overflow-hidden">
                  <div className={`text-center transition-all duration-700 ease-in-out transform ${
                    isTransitioning ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'
                  }`}>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 transition-all duration-500 ease-in-out font-open-sans">
                      {serviceSlides[currentSlide]?.title || 'Service Title'}
                    </h3>
                    <p className="text-lg text-white mb-6 leading-relaxed transition-all duration-600 ease-in-out font-open-sans">
                      {serviceSlides[currentSlide]?.description || 'Service description will appear here.'}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {serviceSlides[currentSlide] && Array.isArray(serviceSlides[currentSlide].features) ? 
                        serviceSlides[currentSlide].features.map((feature, index) => (
                          <div
                            key={index}
                            className={`flex items-center text-white transition-all duration-700 ease-in-out transform ${
                              isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                            }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                          >
                            <span className="text-orange-500 mr-3 text-xl">✓</span>
                            <span className="text-lg font-open-sans">{feature}</span>
                          </div>
                        ))
                        : 
                        ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'].map((feature, index) => (
                          <div
                            key={index}
                            className={`flex items-center text-white transition-all duration-700 ease-in-out transform ${
                              isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                            }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                          >
                            <span className="text-orange-500 mr-3 text-xl">✓</span>
                            <span className="text-lg font-open-sans">{feature}</span>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                 
                  {/* Right Arrow */}
                  <button
                    onClick={nextSlide}
                    disabled={isTransitioning}
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 bg-opacity-90 hover:bg-gray-300 text-gray-800 p-3 rounded-lg transition-all duration-200 shadow-lg ${
                      isTransitioning ? 'opacity-50 cursor-not-allowed scale-95' : 'opacity-100 hover:scale-105'
                    }`}
                    aria-label="Next service"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </button>
                </div>
              ) : (
                <div className="relative bg-black bg-opacity-30 rounded-lg p-8 mb-8 h-96 overflow-hidden">
                  <div className="text-center">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-open-sans">
                      Loading Services...
                    </h3>
                    <p className="text-lg text-white font-open-sans">
                      Please wait while we load the service information.
                    </p>
                  </div>
                </div>
              )}
             
              {/* Slide Indicators */}
              {serviceSlides && serviceSlides.length > 0 && (
                <div className="flex justify-center space-x-2">
                  {serviceSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (!isTransitioning && index !== currentSlide) {
                          setIsTransitioning(true);
                          setCurrentSlide(index);
                          setTimeout(() => setIsTransitioning(false), 700);
                        }
                      }}
                      disabled={isTransitioning}
                      className={`w-3 h-3 rounded-full transition-all duration-300 transform ${
                        index === currentSlide
                          ? 'bg-orange-500 scale-125'
                          : 'bg-gray-400 hover:bg-gray-300 hover:scale-110'
                      } ${isTransitioning ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Services;