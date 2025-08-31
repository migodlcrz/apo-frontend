import { useState, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

interface EventsCarouselProps {
  events: Event[];
}

const EventsCarousel: React.FC<EventsCarouselProps> = ({ events }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const carouselRef = useRef<Carousel>(null);

  // Handle thumbnail click
  const handleThumbnailClick = (index: number) => {
    setSelectedIndex(index);
    carouselRef.current?.moveTo(index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto relative">
      <div className="absolute top-3 right-3 bg-yellow-400/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-black border border-white/50 z-10">
        ✨ EXCLUSIVE
      </div>
      {/* Main Carousel */}
      <Carousel
        ref={carouselRef}
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        showThumbs={false} // Hide default thumbnails
        showStatus={false}
        selectedItem={selectedIndex} // Sync with state
        onChange={(index) => setSelectedIndex(index)} // Track active slide
        className="rounded-2xl shadow-2xl border-4 border-white/50"
      >
        {events.map((event) => (
          <div key={event.id} className="bg-gradient-to-b from-white to-yellow-50/30 rounded-2xl overflow-hidden relative">
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-96 object-cover filter brightness-110 contrast-105"
            />
            <div className="p-6 text-center bg-white/50 backdrop-blur-sm">
              <h2 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">{event.title}</h2>
              <p className="text-yellow-700 font-semibold bg-yellow-100/50 rounded-lg px-3 py-1 inline-block mb-3">{event.date}</p>
              <p className="mt-2 text-gray-700 font-medium leading-relaxed">{event.description}</p>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Thumbnail Preview at the Bottom */}
      <div className="flex overflow-x-auto gap-3 mt-6 p-4 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/50">
        {events.map((event, index) => (
          <div
            key={event.id}
            onClick={() => handleThumbnailClick(index)}
            className={`cursor-pointer hover:opacity-80 transition-all transform hover:scale-110 relative group ${
              selectedIndex === index ? "border-3 border-yellow-500 shadow-2xl" : "border-2 border-white/50"
            }`}
          >
            {selectedIndex === index && (
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold z-10">
                ✨
              </div>
            )}
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-24 h-24 object-cover rounded-xl shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsCarousel;
