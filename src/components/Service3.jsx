import React from "react";

const IconSection = () => {
  const icons = [
    {
      imgSrc: "https://i0.wp.com/dubaicruise.com/wp-content/uploads/2023/10/lightning.png?fit=512%2C512&ssl=1",
      title: "Satisfaction Guarantee",
     
    },
    {
      imgSrc: "https://i0.wp.com/dubaicruise.com/wp-content/uploads/2023/10/boat.png?fit=512%2C512&ssl=1",
      title: "Instant Booking",
 
    },
    {
      imgSrc: "https://i0.wp.com/dubaicruise.com/wp-content/uploads/2023/10/banquet.png?fit=512%2C512&ssl=1",
      title: "Money-Back Guarantee",
   
    },
    {
      imgSrc: "https://i0.wp.com/dubaicruise.com/wp-content/uploads/2023/10/confetti.png?fit=512%2C512&ssl=1",
      title: "Experienced Professionals",
     
    },
   
  ];

  return (
    <section className="flex flex-col self-center overflow-hidden container mx-auto px-5 py-10 bg-orange-400">
       
      <div className="container mx-auto flex flex-wrap justify-center gap-32 ">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform transform hover:scale-110 duration-300 ease-in-out"
          >
            <figure className="w-20 gap-3  mb-4 overflow-hidden">
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
