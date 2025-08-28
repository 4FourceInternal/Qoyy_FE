import React from 'react';
import { Helmet } from 'react-helmet-async';
import { about } from '../cms/content';

const About = () => {
  return (
    <>
      <Helmet>
        <title>{about.seo.title}</title>
        <meta name="description" content={about.seo.description} />
      </Helmet>
     
      <main className="container-custom">
      <div className="relative flex items-center justify-center rounded-lg mt-8 mb-12 h-full">
        <div className="relative w-full flex flex-col items-center justify-center px-4 h-full">
          <h2 className="text-center text-white text-xl mb-10">
            ABOUT US
          </h2>
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-12">
            {about.heading}
          </h1>
          <p className="text-white text-base md:text-lg text-center mt-2 font-normal font-semibold">
            {about.paragraphs[0]}
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center mb-10">
        <p className="text-white text-center text-xl md:text-2xl font-bold w-full mt-12">
          {about.quote}
        </p>
      </div>
      </main>
    </>
  );
};

export default About;