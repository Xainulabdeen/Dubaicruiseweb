import React from "react";

const IconSection = () => {
  const icons = [
    {
      imgSrc: "https://i0.wp.com/dubaicruise.com/wp-content/uploads/2023/10/lightning.png?fit=512%2C512&ssl=1",
      title: "Luxury Service",
     
    },
    {
      imgSrc: "https://i0.wp.com/dubaicruise.com/wp-content/uploads/2023/10/boat.png?fit=512%2C512&ssl=1",
      title: "Food Variety",
 
    },
    {
      imgSrc: "https://i0.wp.com/dubaicruise.com/wp-content/uploads/2023/10/banquet.png?fit=512%2C512&ssl=1",
      title: "Sightseeing",
   
    },
    {
      imgSrc: "https://i0.wp.com/dubaicruise.com/wp-content/uploads/2023/10/confetti.png?fit=512%2C512&ssl=1",
      title: "Live Entertainment",
     
    },
    {
      imgSrc: "https://i0.wp.com/dubaicruise.com/wp-content/uploads/2023/10/hotel.png?fit=512%2C512&ssl=1",
      title: "Birthday & Events",
  
    },
    {
      imgSrc: "https://i0.wp.com/dubaicruise.com/wp-content/uploads/2023/10/boat.png?fit=512%2C512&ssl=1",
      title: "24/7 Support",
    
    },
  ];

  return (
    
     
   <section className="flex flex-col  self-center overflow-hidden mt-10 mb-10 gap-10">
        <div className=" items-center self-center">
        <h1 className="text-gray-900 text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl title-font font-medium mb-4">
        Why to Choose DubaiCruise.com
          </h1>
        <div className="flex justify-center m-5">

        <p className="w-2/3 text-center">
            At DubaiCruise, we entertain our guests with utmost care. From booking confirmation to your last photograph on the ship, we handle your queries and requests professionally to make your trip memorable.
            </p>
        </div>
            </div>
            <div className=" flex flex-wrap justify-center gap-20 pb-10">
        {icons.map((icon, index) => (
          <div
            key={index}
             className="flex flex-col items-center transition-transform transform hover:scale-110 duration-300 ease-in-out"
          >
           <figure className="lg:w-20 w-10   mb-4 overflow-hidden">
              <img
                loading="lazy"
                decoding="async"
                src={icon.imgSrc}
                alt={icon.title}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="text-center">
              <h3 className="text-lg font-semibold">{icon.title}</h3>
              <p className="text-sm text-gray-500">{icon.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IconSection;
