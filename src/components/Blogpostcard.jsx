import React from 'react';

const Blogpostcard = ({ id, image, title, description, btnlink }) => {
  return (
    <div className="flex justify-center hover:group-[ease-in-out]:hover:ease-in-out hover:-translate-y-3 transition-transform duration-300">
  
      <div className="border-2 rounded-lg flex flex-col mb-6 sm:mb-0 max-w-sm bg-white">
        <img
          src={image}
          alt={title} // Added alt text for better accessibility
          className="w-full h-40 object-cover object-center rounded-t-lg"
        />
        <div className="m-5 font-semibold text-lg">{title}</div>
        <div className="m-5 text-gray-700">{description}</div>
        <div className="m-5">
          <a
            href={btnlink}
            className=" hover:underline font-medium"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blogpostcard;
