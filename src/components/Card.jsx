import React, { useState } from 'react';

const CruiseCard = ({ imageSrc, title, subHeadings, content, price, discountPrice, features }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="flex flex-col justify-center overflow-hidden  w-full sm:px-2 md:px-6 lg:px-8">
<div className="flex justify-center">
      <div className="border-2 rounded-2xl w-full bg-white flex flex-col lg:flex-row max-w-7xl">
        {/* Left section - Image */}
        <div className="w-full lg:w-1/3">
          <img
            src={imageSrc}
            alt={title}
            className="rounded-3xl object-cover h-60 sm:h-72 md:h-80 lg:h-full w-full p-2"
          />
        </div>

        {/* Middle section - Content */}
        <div className="w-full lg:w-1/2 border-r-2">
          <h2 className="text-lg sm:text-xl md:text-2xl m-4 font-semibold mb-2">{title}</h2>
          <div className="flex border-b  overflow-x-scroll scrollbar-hide ">
            {subHeadings.map((sub, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`py-4 px-3 sm:px-5 gap-5 ${
                  activeTab === index ? 'border-orange-500 border-b-2 text-orange-600' : ''
                } hover:text-orange-600`}
              >
                {sub}
              </button>
            ))}
          </div>
          <div className="mt-4">
            <pre className="whitespace-pre-wrap p-3 text-sm sm:text-base md:text-lg">{content[activeTab]}</pre>
          </div>
        </div>

        {/* Right section - Price and CTA */}
        <div className="text-center lg:text-right m-3 flex flex-col">
          <div className="mt-10 text-gray-400 lg:self-end">
            <span>from</span>
            <span className="line-through text-gray-400"> AED {discountPrice}</span>
            <span className="text-xl sm:text-2xl font-semibold text-black"> AED {price}</span>
            <p className="bg-green-700 rounded text-white text-center p-1 w-full sm:w-2/3 mx-auto lg:mx-0 mt-3">
              Save {Math.floor(((discountPrice - price) / discountPrice) * 100)}%
            </p>
            <button className="bg-orange-500 text-white w-full mt-5 p-3 rounded-lg hover:bg-orange-600">
              <a href="/booking"> Book now</a>
            </button>
            <div className="mt-5 w-full">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3 justify-start">
                  <span role="img" aria-label="icon">{feature.icon}</span>
                  <span className="text-sm sm:text-base text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default CruiseCard;
