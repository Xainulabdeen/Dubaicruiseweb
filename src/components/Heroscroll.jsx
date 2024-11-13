import React, { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import ImageOne from '../assets/Shipone.jpg';
import ImageTwo from '../assets/Shiptwo.jpg';
import ImageThree from '../assets/Shipthree.jpg';

const images = [ImageOne, ImageTwo, ImageThree];

const ProductCard = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [height, setHeight] = useState("400px"); // Default height
  const dragX = useMotionValue(0);

  const updateHeight = () => {
    if (window.innerWidth >= 1024) {
      setHeight("400px"); // Height for large screens
    } else if (window.innerWidth >= 768) {
      setHeight("300px"); // Height for medium screens
    } else {
      setHeight("150px"); // Height for small screens
    }
  };

  useEffect(() => {
    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -30 && imgIndex < images.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= 30 && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="justify-items-center ">
      <div className="rounded-2xl w-full  ">
        <div className="relative overflow-hidden rounded-2xl h-64 w-full object-cover object-end">
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
                  height: height, // Use dynamic height
                  width: "100%",
                }}
                className="flex-shrink-0 w-full rounded-2xl"
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
