import React, { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import ImageOne from '../assets/Shipone.jpg';
import ImageTwo from '../assets/Shiptwo.jpg';
import ImageThree from '../assets/Shipthree.jpg';
import { div } from "framer-motion/client";

const images = [ImageOne, ImageTwo, ImageThree];

const ProductCard = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -30 && imgIndex < images.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= 30 && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  return (

    <div className="product-card m-10">
    <div className="rounded-2xl  mx-auto w-full">
      <div className="relative overflow-hidden rounded-2xl w-full h-auto object-cover object-center ">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x: dragX }}
          animate={{ translateX: `-${imgIndex * 100}%` }}
          transition={{ type: "spring", stiffness: 30 }}
          onDragEnd={onDragEnd}
          className="flex cursor-grab"
        >
          {images.map((imgSrc, idx) => (
            <motion.div
              key={idx}
              style={{
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "400px", // Default height
                width: "100%",
              }}
              className="flex-shrink-0 w-full sm:w-full md:w-full  rounded-2xl"
            />
          ))}
        </motion.div>

        {/* Navigation dots */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setImgIndex(idx)}
              className={`h-3 w-3 rounded-full transition-colors ${
                idx === imgIndex ? "bg-orange-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductCard;
