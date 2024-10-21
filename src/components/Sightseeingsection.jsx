import React from 'react';
import img from '../assets/Shipone.jpg'; // Import your image correctly

const Sightseeingsection = () => {
  const data = [
    {
      img: img, // Use the imported image here
      title: "Deira Creek Cruise",
      description:
        "Dubai Creek immerses you in the city’s rich heritage, with traditional souks, historic wind towers, and the bustling atmosphere of Old Dubai. Sightseeing includes Deira Souq, Dhow Wharfage, the fishing harbor, Al Fahidi historical neighborhood, Grand Mosque with the tallest minaret in Bur Dubai, Abra Marine station, and the Al Seef waterfront promenade. Skyline includes Rolex Twin Towers, Emirates NBD headquarters building, Dubai Municipality headquarters, and Al Masraf bank building.",
    },
    {
      img: img, // Use the imported image here
      title: "Marina Dinner Cruise",
      description:
        "Dubai Marina showcases modern luxury, featuring stunning skyscrapers, glamorous hotels, and a vibrant waterfront walkway. While boarding the cruise, you can experience the utmost modernity and iconic vertical structures. Prominent landmarks which you can see are: Dubai Marina Mall, JBR Beach, Dubai tram bridge, Mohammed Al Mullah mosque, Palm Jumeirah, Atlantis, Burj Al Arab, and Dubai Eye (Bluewaters Island). The world’s largest man-made marina is home to some of the highest skyscrapers in the world.",
    },
    {
      img: img, // Use the imported image here
      title: "Water Canal Cruise",
      description:
        "The Dubai Canal, an artificial waterway, presents a blend of contemporary architecture and serene landscapes. It connects Dubai Creek to the Arabian Gulf. It starts near the Al Jadaf area and passes through Business Bay. While boarding the Dubai Water Canal cruise, you can have superb views of Downtown, Burj Khalifa, DFC Mall, Dubai Creek Harbour, JW Marriott, Sheikh Zayed Road, and Dubai Water Canal bridges. The ultimate cruise experience will imprint unforgettable memories in your life.",
    },
  ];

  return (
  <section className="flex flex-col self-center bg-orange-400 ">
    <div className=' pt-10'>
      <div className="items-center self-center">
        <h1 className="text-white text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl title-font font-medium mb-4">
          Sightseeing on Dinner Cruises in UAE's Tourism Capital
        </h1>
        <div className="flex justify-center m-5">
          <p className="w-2/3 text-white text-center">
            Dubai Creek, Marina, and Canal each offer unique and distinct cruising experiences. Cruising around the Historic fish harbor in Creek, watching the luminous Skyscrapers in Marina, and experiencing the attractiveness of Downtown while on-boarding on the water canal cruise can give you a separate flavor of entertainment. We can’t precisely rate or compare any one of these cruises due to the unique vibe of each service.
          </p>
        </div>
      </div>
<div className='flex justify-center'>


      <div className='grid lg:grid-cols-3 m-10 md:grid-cols-1 sm:grid-cols-1 gap-5'>
        {data.map((item, index) => (
           <div key={index} className="mb-5 w-full max-w-xs md:max-w-sm lg:max-w-md bg-white p-5 rounded-2xl">
            <div className='flex justify-center'>
              <img src={item.img} alt={item.title} className="w-full rounded-2xl h-auto" /> {/* Set image dimensions */}
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-center m-5">{item.title}</h1> {/* Styled heading */}
            </div>
            <div>
              <p className="text-gray-700 text-sm sm:text-base text-center m-2">{item.description}</p> {/* Description */}
            </div>
            <div className='flex justify-center'>
              <a href="#" className='font-bold text-lg sm:text-xl text-orange-400'>+More</a>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
    </section >
  );
};

export default Sightseeingsection;
