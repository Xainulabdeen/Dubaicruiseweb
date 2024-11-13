import React from 'react';
import Heroscroll from '../components/Heroscroll';
import ShiponeImage from '../assets/Shipone.jpg'; // Make sure to import the background image

const Hero = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden flex justify-center self-center">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center self-center container max-w-7xl">

        {/* Hero Section with Dynamic Background and Opacity */}
        <div className="w-full">
          {/* Small Screens Background Image with Opacity */}
          <div
            className="bg-cover bg-center h-1/2 border-2 relative sm:block lg:hidden"
            style={{
              backgroundImage: `url(${ShiponeImage})`, // Dynamically set the background image
            }}
          >
            {/* Background Overlay for Opacity on Small Screens */}
            <div className="absolute inset-0 bg-white opacity-50"></div> {/* Only affects small screens */}

            {/* Hero Content - Visible on Top of Background */}
            <div className="relative z-10 p-4 text-black">
              <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-4xl title-font font-medium mb-4">
                Book Unforgettable Dinner Cruise Experience
              </h1>
              <div className="flex">
                <a className="text-sm sm:text-lg p-3 pt-0">15.3K Ratings ★★★★★</a>
              </div>
              <div className='flex justify-center'>
                <p className="mb-4 text-sm p-3 sm:text-base md:text-lg lg:text-xl">
                  Welcome to DubaiCruise.com, your gateway to an unforgettable Cruise
                  experience in the mesmerizing city of Dubai. We are here to curate a
                  tailor-made Cruise Dinner experience that will surpass your every
                  expectation.
                </p>
              </div>
            </div>
          </div>

          {/* Large Screens Background (Without Opacity) */}
          <div className="relative bg-cover bg-center h-1/2 hidden lg:block"
          
          >
            {/* Hero Content for Large Screens */}
            <div className="relative z-10 p-4">
              <h1 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-4xl title-font font-medium mb-4">
                Book Unforgettable Dinner Cruise Experience
              </h1>
              <div className="flex">
                <a className="text-sm sm:text-lg p-3 pt-0">15.3K Ratings ★★★★★</a>
              </div>
              <div className='flex justify-center'>
                <p className="mb-4 text-sm p-3 sm:text-base md:text-lg lg:text-xl">
                  Welcome to DubaiCruise.com, your gateway to an unforgettable Cruise
                  experience in the mesmerizing city of Dubai. We are here to curate a
                  tailor-made Cruise Dinner experience that will surpass your every
                  expectation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Scroll Component - Hidden on small screens */}
        <div className="container hidden lg:block">
          <div className="w-full pb-10">
            <Heroscroll />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
