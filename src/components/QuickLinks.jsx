import React from 'react';

const QuickLinks = () => {
  // Define your data with titles and links
  const data = [
    { title: "Blogs", link: "/blogs" },
    { title: "Al Ameerah Dinner Cruise", link: "#" },
    { title: "Lama Dubai Cruise Dinner", link: "#" },
    { title: "Al Jawhara Dhow Cruise", link: "#" },
    { title: "Sultan Sea Cruise", link: "#" },
    { title: "Falcon Oasis Dhow Cruise Deira Creek", link: "#" },
    { title: "Al Shatar Floating Restaurant Diera", link: "#" },
    { title: "Unique Dhow Cruise Creek", link: "#" },
    { title: "Jameela Dinner Cruise", link: "#" },
    { title: "Dubai Creek Al Seef", link: "#" },
    { title: "Jannat Dinner Cruise", link: "#" },
    { title: "Al Khaleej Dinner Cruise", link: "#" },
    { title: "Al Mansour Dhow Cruise", link: "#" },
    { title: "Asya Dhow Cruise", link: "#" },
    { title: "Ramee Dinner Cruise", link: "#" },
    { title: "Desert Road Dinner Cruise", link: "#" },
    { title: "Al Wasl Dhow Cruise", link: "#" },
    { title: "Xclusive Dinner Cruise", link: "#" },
    { title: "Alexandra Dhow Cruise", link: "#" },
    { title: "Lotus Yacht Dinner Cruise", link: "#" },
    { title: "Dubai Marina Dinner Cruise", link: "#" },
    { title: "RIKKS Marina Dinner Cruise", link: "#" },
    { title: "Ocean Empress Dinner Cruise", link: "#" },
    { title: "Rayna Dhow Cruise", link: "#" },
    { title: "Oberoi Monalisa White Cruise", link: "#" },
    { title: "Royal Vision Dhow Cruise", link: "#" },
    { title: "Alishba Dhow Cruise", link: "#" },
    { title: "Dorby Dhow Cruise", link: "#" },
  ];

  return (
    <div className="flex justify-center">
      <section className="max-w-7xl py-10 lg:px-0">
        <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start text-start'>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 lg:mb-0 lg:w-1/4'>
            Quick Links
          </h1>
          <div className='flex flex-wrap justify-center lg:justify-start w-full'>
            {data.map((item, index) => (
              <div key={index} className='mr-2 mb-2'>
                <p className='text-center lg:text-left'>
                  <a href={item.link} className='text-gray-700 font-semibold'>
                    {item.title}
                  </a>
                  {index < data.length - 1 && <span> | </span>} {/* Add separator except for the last item */}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuickLinks;
