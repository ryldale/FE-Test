import React, { useEffect, useState } from "react";

const Carousel = () => {
  const images = [
    { src: "./images/banner.png", alt: "banner-1" },
    { src: "./images/banner.png", alt: "banner-2" },
    { src: "./images/banner.png", alt: "banner-3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative flex justify-center items-center w-full overflow-hidden mt-2">
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            className="min-w-full flex justify-center items-center"
            key={index}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-contain w-[95%]"
              
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
