import { useState, useEffect } from "react";

const nycImages = [
  "/newyork-gif.gif",
  "/newyork-skyline.jpg",
  "/newyork-skyline-1.jpg",
  "/newyork-skyline-2.jpg",
  "/newyork-skyline-3.jpg",
];

const NYCSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % nycImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[calc(100vh-64px)] overflow-hidden">
      {nycImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
            index === currentIndex
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <img
            src={image}
            className="w-full h-full object-cover brightness-[0.6] transform transition-transform duration-1000"
            alt={`NYC Background ${index + 1}`}
          />
        </div>
      ))}

      {/* Mobile-optimized parallax overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />

      {/* Subtle slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {nycImages.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-yellow-400 w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default NYCSlideshow;
