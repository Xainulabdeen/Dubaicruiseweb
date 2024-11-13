// Carousel.js
import React, { useRef, useState } from 'react';
import BlogPostCard from './Blogpostcard';

const Carousel = ({ cardsData }) => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Start the dragging process
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);  // Capture the initial position of the mouse
    setScrollLeft(carouselRef.current.scrollLeft);  // Capture the initial scroll position
  };

  // While dragging, update the scroll position based on mouse movement
  const handleMouseMove = (e) => {
    if (!isDragging) return;  // Only drag if the mouse button is down
    const distance = e.clientX - startX;  // Calculate how far the mouse has moved
    carouselRef.current.scrollLeft = scrollLeft - distance;  // Update the scroll position
  };

  // End the dragging process
  const handleMouseUp = () => {
    setIsDragging(false);  // Stop dragging when the mouse is released
  };

  // Prevent text selection and unwanted drag behavior
  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);  // Stop dragging if the mouse leaves the carousel area
    }
  };

  const scrollLeftHandler = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRightHandler = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className=" bg-black">
       <div className=" py-10 max-w-7xl lg:justify-self-center overflow-hidden">
          <div className="text-center my-8">
            <h1 className="text-white p-3 text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-medium">
              General FAQ's Dhow Cruise Dubai
            </h1>
            <div className="flex justify-center">
              <p className="w-2/3 text-sm sm:text-base p-3 lg:text-lg text-white">
                Selecting a specific Dhow Cruise Trip depends on a few factors which include price, location,
                food menu, and attractions, sightseeing (landmarks) of the excursion. Check below for details:
              </p>
            </div>
          </div>    
    <div className="container mx-auto px-4 max-w-7xl bg-black">
      <div className="relative">
        {/* Left Scroll Button */}
        <button
          onClick={scrollLeftHandler}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 sm:left-5 md:left-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto scrollbar-hide space-x-4 py-4 cursor-grab sm:space-x-4 md:space-x-8"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {cardsData.map((card, index) => (
            <div key={index} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <BlogPostCard
                id={card.id}
                image={card.image}
                title={card.title}
                description={card.description}
                btnlink={card.btnlink}
              />
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRightHandler}
          className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 sm:right-5 md:right-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
    </div>   </div>
  );
};

export default Carousel;
