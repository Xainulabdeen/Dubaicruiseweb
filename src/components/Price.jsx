import React from "react";
import Pricecard from "../components/Pricecard";
import defaulticon  from '../assets/defaulticon.png'

const Price = () => {
  const data = [
    {
      promp:"",
      title: "Dubai Creek Cruise",
      subtitle: "Variety Food with Views of Historic Dubai Creek",
      price: "29",
      item1icon: defaulticon,
      item1: "Two Hour Cruising Time",
      item2icon: defaulticon,
      item2: " Unlimited Welcome Drinks",
      item3icon: defaulticon,
      item3: "  Continental Buffet Dinner",
      item4icon: defaulticon,
      item4: " Tanura Dance",
      item5icon: defaulticon,
      item5: "Views of Historic Dubai Creek",
      item6icon: defaulticon,
      item6: "Old Deira Historic District",
      btnlink: defaulticon,
    },
    {
      promo:"promo",
      title: "Dubai Marina Cruise",
      subtitle: "Lavish Buffet Dinner & Majestic Views",
      price: "29",
      item1icon: defaulticon,
      item1: " Two Hour Cruising Time",
      item2icon: defaulticon,
      item2: " Unlimited Welcome Drinks",
      item3icon: defaulticon,
      item3: " International & Arabic Buffet Dinner",
      item4icon: defaulticon,
      item4: "Tanura Dance & Horse Show",
      item5icon: defaulticon,
      item5: " Views of Skyline of Dubai Marina",
      item6icon: defaulticon,
      item6: " Dubai Eye, Atlantis & Palm Jumeriah",
      btnlink: defaulticon,
    },
    {
      promp:"",
      title: "Dubai Creek Cruise",
      subtitle: "Splendid Buffet Dinner & Downtown Views",
      price: "29",
      item1icon: defaulticon,
      item1: " Two Hour Cruising Time",
      item2icon: defaulticon,
      item2: " Unlimited Welcome Drinks",
      item3icon: defaulticon,
      item3: "Continental Buffet Dinner",
      item4icon: defaulticon,
      item4: " Tanura Dance & Horse Show",
      item5icon: defaulticon,
      item5: "Views of Downtown Dubai",
      item6icon: defaulticon,
      item6: "Burj Khalifa & Dubai Water Canal",
    
    },
  ];

  return (

    <section className="flex flex-col self-center overflow-hidden container mx-auto px-5 py-10">
        {/* Header Section */}
        <div className="text-center mb-8">

          <h1 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
            Compare Which Dinner is Best For You?
          </h1>
          <p className="w-2/3 mx-auto text-sm sm:text-base lg:text-lg text-gray-600">
            Dinner Cruises in Dubai operate from three locations. Each service
            has its own specialty. We can compare them based on price, location
            of cruising, ship type (wooden dhow / modern yacht), food menu,
            views of location, and quality of service.
          </p>
        </div>

        {/* Responsive Price cards grid layout */}
        <div className="items-center self-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
          {data.map((item, index) => (
            <Pricecard
              key={index}
              promo={item.promo}
              title={item.title}
              subtitle={item.subtitle}
              price={item.price}
              item1={item.item1}
              item1icon={item.item1icon}
              item2={item.item2}
              item2icon={item.item2icon}
              item3={item.item3}
              item3icon={item.item3icon}
              item4={item.item4}
              item4icon={item.item4icon}
              item5icon={item.item5icon}
              item5={item.item5}
              item6={item.item6}
              item6icon={item.item6icon}
            
            />
          ))}
        </div>
      </section>
   
  );
};

export default Price;
