import React, { useState } from 'react';

const CruiseCard = ({ imageSrc, title, subHeadings, content, price, discountPrice, features }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="flex flex-col self-center overflow-hidden container mx-auto px-5 ">
      <div className="border-2 rounded-2xl w-full bg-white flex flex-col lg:flex-row">
        {/* Left section - Image */}
        <div className="w-full lg:w-1/3 p-4">
          <img
            src={imageSrc}
            alt={title}
            className="rounded-xl object-cover h-60 sm:h-72 md:h-80 lg:h-full w-full"
          />
        </div>

        {/* Middle section - Content */}
        <div className="m-5 p-5 w-full lg:w-1/2 border-r-2">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">{title}</h2>
          <div className="flex border-b">
            {subHeadings.map((sub, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`py-2 px-2 ${
                  activeTab === index ? 'border-orange-500 border-b-2 text-orange-600' : ''
                } hover:text-orange-600`}
              >
                {sub}
                
              </button>
            ))}
          </div>
          <div className="mt-4">
            <pre className="whitespace-pre-wrap">{content[activeTab]}</pre>
          </div>
        </div>

        {/* Right section - Price and CTA */}
        <div className="text-center lg:text-right m-3 flex flex-col">
          <div className="mt-10 text-gray-400 lg:self-end">
            from
            <span className="line-through text-gray-400"> AED {discountPrice}</span>
            <span className="text-2xl font-semibold text-black"> AED {price}</span>
            <p className="bg-green-700 rounded text-white text-center p-1 w-full lg:w-2/3 mx-auto lg:mx-0">
              Save {Math.floor(((discountPrice - price) / discountPrice) * 100)}%
            </p>
            <button className="bg-orange-500 text-white w-full mt-5 p-3 rounded-lg hover:bg-orange-600">
            <a href="/booking"> Book now</a>
            </button>
            <div className="mt-5 w-full">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-5 items-center justify-center lg:justify-start">
                  <span role="img" aria-label="icon">{feature.icon}</span>
                  <span className="text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CruiseCard;
