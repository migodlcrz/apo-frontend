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
    <div className="w-full max-w-4xl mx-auto">
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
        className="rounded-lg shadow-lg"
      >
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg overflow-hidden">
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-96 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold">{event.title}</h2>
              <p className="text-gray-500">{event.date}</p>
              <p className="mt-2 text-gray-700">{event.description}</p>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Thumbnail Preview at the Bottom */}
      <div className="flex overflow-x-auto gap-2 mt-4 p-2 border-t border-gray-300">
        {events.map((event, index) => (
          <div
            key={event.id}
            onClick={() => handleThumbnailClick(index)}
            className={`cursor-pointer hover:opacity-80 transition ${
              selectedIndex === index ? "border-2 border-blue-500" : ""
            }`}
          >
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-20 h-20 object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsCarousel;
