import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Spincard = ({ 
  frontColor = "bg-white", // Default color for front face
  backColor = "bg-blue-500", // Default color for back face
  icon, 
  ftitle, 
  fsubtitle, 
  btitle, 
  bsubtitle, 
  bbtnlink 
}) => {
  const [isHovered, setIsHovered] = useState(false); // State to track hover status

  return (
    
    <section className=" container ">
      <div className='flex justify-center w-full'>

    
      {/* Card container */}
      <motion.div
        className=" w-full h-60 "
        style={{ perspective: 1000 }} // Ensures proper 3D perspective
      >
        {/* Flipping container */}
        <motion.div
          className="relative w-full h-full transition-transform transform-style-preserve-3d"
          onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
          onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
          animate={{ rotateY: isHovered ? 180 : 0 }} // Rotate based on hover state
        >
          {/* Front of the card */}
          <motion.div
            className={`${frontColor} absolute inset-0 shadow-lg rounded-2xl flex flex-col items-center justify-center p-3 `}
            style={{ backfaceVisibility: isHovered ? 'hidden' : 'visible' }} // Hide backface on hover
          >
            <img src={icon} alt="icon" className="w-16 h-16 mb-4" />
            <h1 className="text-lg font-bold text-center text-white">{ftitle}</h1>
            <h2 className="text-sm text-center text-white">{fsubtitle}</h2>
          </motion.div>

          {/* Back of the card */}
          <motion.div
            className={`${backColor} absolute inset-0 shadow-lg rounded-2xl text-white flex flex-col items-center justify-center p-3`}
            style={{ backfaceVisibility: isHovered ? 'visible' : 'hidden', rotateY: 180 }} // Show backface on hover
          >
            <h1 className="text-lg font-bold text-center">{btitle}</h1>
            <p className="text-sm text-center">{bsubtitle}</p>
            <a
              href={bbtnlink}
              className="mt-4 px-7 py-4 border-2 bg-gray-400  hover:bg-white text-white hover:text-gray-400 "
            >
              More Info
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
      </div>
 </section>
  );
};

export default Spincard;
