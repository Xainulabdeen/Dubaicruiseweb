import React from "react";

const IconSection = () => {
  const icons = [
    {
      imgSrc: "https://i0.wp.com/dubaicruise.com/wp-content/uploads/2023/10/lightning.png?fit=512%2C512&ssl=1",
      title: "Instant Booking",
      description: "Hustle Free",
    },
    {
      imgSrc: "https://i0.wp.com/dubaicruise.com/wp-content/uploads/2023/10/boat.png?fit=512%2C512&ssl=1",
      title: "2 Hours Cruise",
      description: "Open Sea Cruise",
    },
    {
      imgSrc: "https://i0.wp.com/dubaicruise.com/wp-content/uploads/2023/10/banquet.png?fit=512%2C512&ssl=1",
      title: "Dinner Buffet",
      description: "Veg / Non-veg",
    },
    {
      imgSrc: "https://i0.wp.com/dubaicruise.com/wp-content/uploads/2023/10/confetti.png?fit=512%2C512&ssl=1",
      title: "Entertainment",
      description: "Performances on Cruise",
    },
    {
      imgSrc: "https://i0.wp.com/dubaicruise.com/wp-content/uploads/2023/10/hotel.png?fit=512%2C512&ssl=1",
      title: "Hotel Transfer",
      description: "We Provide Pick & Drop",
    },
    {
      imgSrc: "https://i0.wp.com/dubaicruise.com/wp-content/uploads/2023/10/boat.png?fit=512%2C512&ssl=1",
      title: "Boat Rental",
      description: "Explore the Waters",
    },
  ];

  return (
    <div className=" justify-self-center my-10">
    <section className="overflow-hidden max-w-7xl">
    <div className="justify-self-center grid  lg:grid-rows-1 lg:grid-cols-6 grid-rows-3 grid-cols-2 gap-16">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="flex flex-col items-center  transition-transform transform hover:scale-110 duration-300 ease-in-out"
          >
            <figure className="lg:w-20 w-10 gap-3  mb-4 overflow-hidden">
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
    </div>
  );
};

export default IconSection;
