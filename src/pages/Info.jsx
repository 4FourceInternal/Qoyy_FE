import React from 'react';
import { Helmet } from 'react-helmet-async';
import LoadingSkeleton from '../components/LoadingSkeleton';
import useCMSData from '../hooks/useCMSData';
import { info } from '../cms/content';

// Import background image and layer overlay
import quickInfoBgImg from '../assets/quickInfo-bg.png';
import layerImg from '../assets/Layer.png';

const Info = () => {
  const { data, isLoading, error } = useCMSData('info');

  return (
    <>
      <Helmet>
        <title>{info.seo.title}</title>
        <meta name="description" content={info.seo.description} />
      </Helmet>

      {/* Full Page Background Layer */}
      <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${quickInfoBgImg})`
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
          <div className="max-w-6xl mx-auto">
             <h2 className="text-center text-white text-xl mb-10">
                          QUICK INFO
                        </h2>
            {/* Main Heading */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
                {info.heading}
              </h1>
              <p className="text-xl md:text-2xl text-white">
                {info.lead}
              </p>
            </div>

            {/* FAQ Section */}
            {isLoading ? (
              <div className="space-y-8">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="animate-pulse">
                    <div className=" p-8 rounded-lg">
                      <div className="h-8 bg-gray-600 rounded mb-4 w-1/2"></div>
                      <div className="space-y-3">
                        <div className="h-6 bg-gray-600 rounded w-full"></div>
                        <div className="h-6 bg-gray-600 rounded w-5/6"></div>
                        <div className="h-6 bg-gray-600 rounded w-4/5"></div>
                        <div className="h-6 bg-gray-600 rounded w-3/4"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-8">
                {info.faqs.map((faq, index) => (
                  <div key={index} className=" p-8 rounded-lg">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {faq.question}
                    </h3>
                    <p className="text-lg text-white leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Additional Info */}
            {!isLoading && (
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* <div className=" p-8 rounded-lg">
                  <h4 className="text-xl font-semibold text-orange-500 mb-4">
                    {info.process.title}
                  </h4>
                  <div className="space-y-4 text-white">
                    {info.process.steps.map((step, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-orange-500 mr-3 mt-1 font-bold">{step.num}</span>
                        <div>
                          <div className="font-semibold">{step.label}</div>
                          <div className="text-sm">{step.note}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div> */}
               
                {/* <div className=" p-8 rounded-lg">
                  <h4 className="text-xl font-semibold text-orange-500 mb-4">
                    {info.whyUs.title}
                  </h4>
                  <div className="space-y-4 text-white">
                    {info.whyUs.points.map((point, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-orange-500 mr-3 mt-1">✓</span>
                        <div>
                          <div className="font-semibold">{point.label}</div>
                          <div className="text-sm">{point.note}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div> */}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Info;