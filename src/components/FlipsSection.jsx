import React from 'react';
import Spincard from './Spincard';

const FlipsSection = () => {
  const data = [
    {
      icon: "",
      ftitle: "What is the location of Dhow Cruise?",
      fsubtitle: "Dinner Cruises Department from Three Locations",
      btitle: "Departure locations",
      bsubtitle: "There are three locations: Dubai Marina, Dubai Creek & Dubai Water Canal",
      bbtnlink: "",
      frontColor: "bg-orange-300",
      backColor: "bg-gray-400"
    },
    {
      icon: "",
      ftitle: "On Which Time Cruise Operates?",
      fsubtitle: "Share dinner cruise tour is available every day for 2 hours",
      btitle: "Cruise Timings",
      bsubtitle: "All three Cruises are available on below Timings: 08:00 pm to 10:30 pm",
      bbtnlink: "",
      frontColor: "bg-green-300",
      backColor: "bg-gray-400"
    },
    {
      icon: "",
      ftitle: "What is the food menu?",
      fsubtitle: "We bring a variety of food dishes and drinks on-board",
      btitle: "Food Menu",
      bsubtitle: "We Offer Continental & Arabic Food Buffet Dinner with BBQ.",
      bbtnlink: "",
      frontColor: "bg-red-300",
      backColor: "bg-gray-400"
    },
    {
      icon: "",
      ftitle: "Attractions and places to Experience",
      fsubtitle: "Sightseeing is the prime thing to enjoy during cruise dinner",
      btitle: "Sightseeing",
      bsubtitle: "All three types of Dinner cruises have different locations. Check below for details:",
      bbtnlink: "",
      frontColor: "bg-blue-300",
      backColor: "bg-gray-400"
    },
  ];

  return (
    <div className='my-10'>
      <div className="items-center self-center">
        <h1 className="text-gray-900 text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl title-font font-medium my-4">
          Quick Info for Booking Dhow Cruise
        </h1>
        <div className="flex justify-center my-5">
          <p className="w-2/3 text-center ">
            Selecting a specific Dhow Cruise Trip depends on a few factors, which include price, location, food menu, and attractions, sightseeing (landmarks) of the excursion. Check below for details:
          </p>
        </div>
      </div>
      <div className="flex justify-center">
      <div className="grid w-2/3 container lg:grid-cols-4 gap-5 md:grid-cols-1 sm:grid-cols-1 ">
        {data.map((item, index) => (
          <Spincard 
            key={index}
            frontColor={item.frontColor}
            backColor={item.backColor}
            icon={item.icon} 
            ftitle={item.ftitle}
            fsubtitle={item.fsubtitle}
            btitle={item.btitle}
            bsubtitle={item.bsubtitle}
            bbtnlink={item.bbtnlink} 
          />
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default FlipsSection;
