import React from 'react';
import Heroscroll from '../components/Heroscroll';

const Hero = () => {
  
  return (
    <section className="text-gray-600 body-font overflow-hidden container mx-auto px-5 py-10">
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

        {/* Hero Text Content */}
        <div className="w-full m-4">
          <h1 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl title-font font-medium mb-4">
            Book Unforgettable Dinner Cruise Experience
          </h1>
          <div className="flex mb-4">
            <a className="flex py-2 text-sm sm:text-lg px-1">
              15.3K Ratings ★★★★★
            </a>
          </div>
          <p className="mb-4 text-sm sm:text-base md:text-lg lg:text-xl">
            Welcome to DubaiCruise.com, your gateway to an unforgettable Cruise
            experience in the mesmerizing city of Dubai. We are here to curate a
            tailor-made Cruise Dinner experience that will surpass your every
            expectation.
          </p>
        </div>

        {/* Hero Scroll Component - Hidden on small screens */}
        <div className="w-full hidden lg:block">
          <Heroscroll />
        </div>

      </div>
      
    </section>
  );
};

export default Hero;
