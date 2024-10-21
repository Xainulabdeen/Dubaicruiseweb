// src/Card.js
import React from 'react';

const Card = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col p-4">
      <img src={image} alt={title} className="h-40 w-full object-cover" />
      <h2 className="text-lg font-bold mt-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <button className="mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Read More
      </button>
    </div>
  );
};

export default Card;
