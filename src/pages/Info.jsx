import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCMSData from '../hooks/useCMSData';
import * as cmsService from '../services/cmsService';

// Import background image and layer overlay
import quickInfoBgImg from '../assets/quickInfo-bg.png';
import layerImg from '../assets/Layer.png';

const Info = () => {
  const { data: info, loading, error } = useCMSData('info');







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
  const seo = info?.seo || { title: 'Quick Info - Qoyy Global', description: 'Answers for every question. Explore our services, process, and support for your marketing and creative needs.' };
  const heading = info?.heading || 'ANSWERS FOR EVERY QUESTION';
  const lead = info?.lead || 'Explore our services, process, and support for your marketing and creative needs.';
  
  // Handle CMS data structure for FAQs
  let faqs = info?.faqs || [];
  if (faqs && faqs.length > 0) {
    // Ensure FAQs have the expected structure
    faqs = faqs.map(faq => ({
      question: faq.question || 'Question',
      answer: faq.answer || 'Answer'
    }));
  } else {
    // Fallback FAQs
    faqs = [
      {
        question: 'Which services are available?',
        answer: 'We offer comprehensive media monitoring and public relations services including real-time brand monitoring, sentiment analysis, crisis management, press release distribution, media relations, strategic communication, digital PR, and government relations. Our services are tailored to meet the specific needs of government agencies and corporate brands across various industries.'
      },
      {
        question: 'Who do you usually work with?',
        answer: 'Our client base includes government agencies, corporate brands, and organizations across various sectors. We have extensive experience working with both public and private sector clients, understanding the unique challenges and opportunities that each sector presents. Our team is equipped to handle projects of all sizes, from small businesses to large multinational corporations.'
      },
      {
        question: 'How fast is project delivery?',
        answer: 'Project timelines vary depending on complexity and scope. Media monitoring services can be implemented within 24-48 hours, while comprehensive PR campaigns typically take 2-4 weeks to develop and launch. Crisis management responses are immediate, with 24/7 support available. We provide detailed timelines during our initial consultation and maintain regular communication throughout the project lifecycle.'
      },
      {
        question: 'How can I get a proposal?',
        answer: 'Getting a proposal is simple. You can contact us via WhatsApp for quick responses or email for detailed discussions. We\'ll schedule a consultation to understand your specific needs, challenges, and objectives. Based on this discussion, we\'ll provide a comprehensive proposal including strategy, timeline, deliverables, and investment. Our proposals are detailed and transparent, with no hidden costs.'
      }
    ];
  }

  // Handle CMS data structure for process
  const process = info?.process || {
    title: 'Our Process',
    steps: [
      { num: '1.', label: 'Discovery & Analysis', note: 'Understanding your needs and market position' },
      { num: '2.', label: 'Strategy Development', note: 'Creating tailored solutions and approaches' },
      { num: '3.', label: 'Implementation', note: 'Executing campaigns and monitoring results' },
      { num: '4.', label: 'Optimization', note: 'Continuous improvement and performance tracking' }
    ]
  };

  // Handle CMS data structure for whyUs
  const whyUs = info?.whyUs || {
    title: 'Why Choose Us',
    points: [
      { label: 'Proven Track Record', note: 'Success with government and corporate clients' },
      { label: '24/7 Support', note: 'Round-the-clock crisis management' },
      { label: 'Transparent Reporting', note: 'Clear metrics and ROI measurement' },
      { label: 'Custom Solutions', note: 'Tailored strategies for your specific needs' }
    ]
  };



  return (
    <>
      <Helmet>
        <title>{seo?.metaTitle || seo?.title || 'Quick Info - Qoyy Global'}</title>
        <meta name="description" content={seo?.metaDescription || seo?.description || 'Answers for every question. Explore our services, process, and support for your marketing and creative needs.'} />
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
                {heading}
              </h1>
              <p className="text-xl md:text-2xl text-white">
                {lead}
              </p>
            </div>

            {/* FAQ Section */}
            <div className="space-y-8">
              {faqs.map((faq, index) => (
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

            {/* Additional Info */}
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
          </div>
        </div>
      </main>
    </>
  );
};

export default Info;