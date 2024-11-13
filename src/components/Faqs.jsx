import { div } from 'framer-motion/client';
import React, { useState } from 'react';

const Faqs = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null); // Track which answer is visible

  const data = [
    {
      title: "Marina",
      question1: "Location of Dubai Marina Dhow Cruise?",
      answer1: "Various companies operate Dubai Marina Cruises. You can check with your operators for the exact location. Usually, all cruises are parked near Al Rahim mosque opposite to JBR area. Click location link to see on map.",
      question2: "How to reach Dubai Marina Cruise?",
      answer2: "You can reach Marina Cruise by Dubai Metro, Public Bus, taxi (cab) & tram. Install the S’hail app on your mobile to plan your journey through the shortest route from your location.",
      question3: "How to go for Marina Cruise through Dubai Metro?",
      answer3: "Two dedicated metro train stations link Dubai Marina with the Metro Red-line. Sobha Realty Metro Station and Dubai Marina Mall metro station serves as the route for reaching Marina Dhow Cruise.",
      question4: "Is there parking available near the Marina Cruise ?",
      answer4: "Yes, there are parking facilities available near the Dubai Marina Cruise departure point. Various parking options, including paid parking lots and designated parking spaces, are conveniently located within walking distance. It’s recommended to arrive early to secure a parking spot, especially during peak hours or busy weekends.",
      question5: "What is food menu on Dubai Marina Cruise?",
      answer5: "Expect a buffet dinner with BBQ and beverages. To be honest, every operator has its own buffet menu on Dubai Marina Cruise. There are a few dishes that every company includes: Veg / Non-veg curries, steamed rice, fried rice, soups, chicken BBQ, fish BBQ and various types of salads.",
      question6: "Timings of Dubai Marina Cruise?",
      answer6: "Marina Dinner Cruise is mostly operated from 8:30 pm to 10:30 pm.",
    },
    {
        title: "Creek",
        question1: "Where Creek Dhow Cruise is located?",
        answer1: "Creek cruises are parked on both sides of Dubai Creek.  So firstly, ask your service provider to mention whether it’s in Diera side or Al Seef (Bur Dubai) area. Click link to see on map: Al Seef Area and Deira Side.",
        question2: "How to reach Creek Dhow Cruise by Metro?",
        answer2: "Creek Dhow cruise is accessible by Dubai Metro by Union and Baniyas metro stations. It’s better to take a public bus after metro because there is 600m walking distance.",
        question3: "How to get into Creek Dhow Cruise?",
        answer3: "You can go for a Creek cruise by riding on a public bus, taxi, abra or Dubai metro. S’hail mobile app can also help you to guide to cruise location.",
        question4: "Timings of Dubai Creek Dhow Cruise?",
        answer4: "Dubai creek dhow cruise has a trip of two hours. It usually starts at 8:30 pm and ends at 10:30 pm.",
        question5: "What food is served on Creek Dhow Cruise?",
        answer5: "A minimal buffet dinner is served to the guests. Menu includes veg / non-veg dishes with bread, rice and BBQ. Salads and soft drinks are also given to the visitors.",
        question6: "Is there any car parking near Creek Cruise?",
        answer6: "Parking is the major issue when we go for the Creek Dhow Cruise dinner. The boarding point is located near Old Dubai, with less spaces and busy roads.",
      },
      {
        title: "Canal ",
        question1: "Location of the Dubai Canal Cruise?",
        answer1: "Dubai canal cruise is located next to the jameel arts centre near Al Jadaf Metro Station. Cruises are parked on the back side of Palazzo Versace hotel. Click the location link to see on the map.",
        question2: "How to reach Dubai Canal Dhow Cruise?",
        answer2: "Reaching Dubai Canal Cruise is accessible by Metro train, taxi and Public bus. If you want to go by bus, install S’hail app to plan your trip. Currently, RTA water taxi has no route towards the cruise.",
        question3: "How to go Dubai Canal Cruise via Dubai Metro",
        answer3: "You can visit Water Canal Cruise by taking the Dubai Metro green line towards Creek. Leave the train at the second last terminal, “Al Jadaf Metro Station.”",
        question4: "Timings of Dubai Canal Cruise?",
        answer4: "Canal Cruise takes its guests on-board at 8:00 pm and leaves back to the boarding point at 10:30 pm.",
        question5: "What food is on the menu on Canal Cruise?",
        answer5: "A continental buffet dinner is arranged for guests on the Canal Dhow cruise. BBQ dishes and veg curries are also part of the menu. Unlimited soft drinks, tea and coffee is also served.",
        question6: "What are parking options near Canal Dhow Cruise?",
        answer6: "Free parking is available next to Canal cruise departure point. Navigate your car in-front of the Jameel Arts Centre to park your car.",
      },
  ];

  // Toggle visibility of the clicked question's answer
  const toggleAnswer = (questionIndex) => {
    if (visibleAnswer === questionIndex) {
      setVisibleAnswer(null); // Hide the answer if it's already visible
    } else {
      setVisibleAnswer(questionIndex); // Show the answer if it's not visible
    }
  };

  return (
    <div className="flex justify-center">
      <section className="flex flex-col self-center overflow-hidden my-10">
        <div className="max-w-7xl">
          <div className="text-center my-8">
            <h1 className="text-gray-900 p-3 text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-medium">
              General FAQ's Dhow Cruise Dubai
            </h1>
            <div className="flex justify-center">
              <p className="w-2/3 text-sm sm:text-base p-3 lg:text-lg text-gray-600">
                Selecting a specific Dhow Cruise Trip depends on a few factors which include price, location,
                food menu, and attractions, sightseeing (landmarks) of the excursion. Check below for details:
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-1 sm:grid-cols-1">
              {data.map((item, index) => (
                <div key={index} className="mb-5 w-full max-w-xs md:max-w-sm lg:max-w-md">
                  <h1 className="text-lg text-center md:text-xl font-semibold mb-4">{item.title}</h1>
                  <div className="border-2 rounded-md">
                    {Array.from({ length: 6 }, (_, i) => (
                      <div key={i} className="border-b-2">
                        <h2
                          className="cursor-pointer p-5 text-md md:text-lg font-semibold flex justify-between items-center"
                          onClick={() => toggleAnswer(`${index}-q${i + 1}`)}
                        >
                          <span>{item[`question${i + 1}`]}</span>
                          {visibleAnswer === `${index}-q${i + 1}` ? (
                            <button
                              className="text-gray-500 font-bold"
                              onClick={() => setVisibleAnswer(null)} // Close the answer
                            >
                              x
                            </button>
                          ) : (
                            <button
                              className="text-gray-500 font-bold"
                              onClick={() => toggleAnswer(`${index}-q${i + 1}`)} // Open the answer
                            >
                              +
                            </button>
                          )}
                        </h2>
                        {visibleAnswer === `${index}-q${i + 1}` && (
                          <p className="text-gray-600 p-5">{item[`answer${i + 1}`]}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;