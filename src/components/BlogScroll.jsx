import React, { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom"; // Only this import is necessary

const BlogCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  const blogPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      title: "The Future of AI in Web Development",
      description: "Exploring how artificial intelligence is shaping the future of web development and user experiences.",
      link: "" // Add a link for more details
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      title: "Remote Work Trends in 2023",
      description: "Analyzing the latest trends and challenges in remote work environments across various industries.",
      link: ""
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
      title: "Breakthrough in Quantum Computing",
      description: "Scientists achieve a major milestone in quantum computing, paving the way for revolutionary advancements.",
      link: ""
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561",
      title: "The Impact of Diet on Mental Health",
      description: "New research reveals the strong connection between dietary habits and mental well-being.",
      link: ""
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      title: "Hidden Gems of Southeast Asia",
      description: "Discover lesser-known destinations in Southeast Asia that offer unique cultural experiences.",
      link: ""
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      title: "The Rise of Edge Computing",
      description: "How edge computing is revolutionizing data processing and improving response times in various applications.",
      link: ""
    },
  ];

  const updateSlidesToShow = () => {
    if (window.innerWidth >= 1024) {
      setSlidesToShow(4);
    } else if (window.innerWidth >= 768) {
      setSlidesToShow(3);
    } else if (window.innerWidth >= 640) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(1);
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === blogPosts.length - slidesToShow ? 0 : prevIndex + 1
    );
  }, [blogPosts.length, slidesToShow]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? blogPosts.length - slidesToShow : prevIndex - 1
    );
  }, [blogPosts.length, slidesToShow]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="flex flex-col bg-black self-center overflow-hidden px-5 py-10">
      <div className="self-center">
        <h1 className="text-white text-2xl mt-10 text-center sm:text-3xl md:text-4xl lg:text-5xl title-font font-medium mb-4">
          Dubai Cruise Blogs
        </h1>
        <div className="flex justify-center m-5">
          <p className="w-full md:w-1/2 lg:w-1/2 text-center text-white">
            Selecting a specific Dhow Cruise Trip depends on few factors which includes price
          </p>
        </div>
      </div>
      <div className="container self-center sm:px-0">
        <div className="relative md:relative lg:relative overflow-hidden xsm:overflow-x-scroll ">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
          >
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/${slidesToShow} px-2 flex-shrink-0`}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 sm:h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="mt-2 text-lg sm:text-xl font-bold leading-7 text-gray-900">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-base leading-6 text-gray-500">
                      {post.description}
                    </p>
                    <Link to={post.link} className="text-gray-500 font-semibold hover:underline">Read more</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide} 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="text-gray-600  " />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
            aria-label="Next slide"
          >
            <FaChevronRight className="text-gray-600" />
          </button>
        </div>
      </div>
      <div className="m-10 mb-10 self-center">
        <Link to="/blogs" className="p-5 xsm:p-3 sm:p-3 md:p-5 lg:p-5 text-center rounded-lg bg-orange-400 text-white">
          View More
        </Link>
      </div>
    </section>
  );
};

export default BlogCarousel;
