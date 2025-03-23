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
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        showThumbs={false}
        showStatus={false}
        className="rounded-lg shadow-lg"
      >
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg overflow-hidden">
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{event.title}</h2>
              <p className="text-gray-500">{event.date}</p>
              <p className="mt-2 text-gray-700">{event.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default EventsCarousel;
