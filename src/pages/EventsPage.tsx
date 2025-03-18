import { useState } from "react";
import Calendar from "../components/Calendar";
import PastEvents from "../components/PastEvents";

const EventsPage: React.FC = () => {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const specificDate = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const [selectedDate, setSelectedDate] = useState<number>(today.getDate());

  // JSON for Past Events
  const pastEvents = [
    {
      id: 1,
      title: "Egg Hunting",
      date: "April 2024",
      description:
        "A fun-filled Easter event where participants of all ages searched for hidden eggs, enjoyed festive games, and celebrated the holiday with family and friends.",
      imageUrl: "/easter.JPG",
    },
    {
      id: 2,
      title: "Centennial Meeting",
      date: "January 2024",
      description:
        "A historic gathering marking 100 years of our organization, reflecting on past achievements, discussing future plans, and honoring long-standing members.",
      imageUrl: "/centennial.png",
    },
    {
      id: 3,
      title: "NYC Marathon",
      date: "November 2024",
      description:
        "An exhilarating marathon through the streets of New York City, bringing together runners from around the world to test their endurance and support charitable causes.",
      imageUrl: "/marathon.JPG",
    },
    {
      id: 4,
      title: "Adopt-A-Highway",
      date: "October 2024",
      description:
        "A community-driven initiative where volunteers came together to clean up and beautify a local highway, promoting environmental awareness and civic responsibility.",
      imageUrl: "/adopt.JPG",
    },
    {
      id: 5,
      title: "Election of Officers",
      date: "October 2024",
      description:
        "A crucial event where members voted to elect new officers, ensuring strong leadership and a bright future for our organization.",
      imageUrl: "/elect.JPG",
    },
    {
      id: 6,
      title: "Halloween",
      date: "October 2024",
      description:
        "A spooky and exciting celebration featuring costume contests, haunted attractions, and trick-or-treating fun for all ages.",
      imageUrl: "/halloween.JPG",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row p-8 gap-8 lg:gap-0">
        <div className="flex flex-col w-full lg:w-1/2 gap-5">
          <div>
            <h1 className="text-xl font-semibold text-gray-800">Today is</h1>
            <span className="text-4xl font-bold text-gray-700">
              {formattedDate}
            </span>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-800">
              The events for {specificDate} are:
            </h1>
            <span className="text-2xl font-semibold">None</span>
          </div>
        </div>
        <div className="flex w-full lg:w-1/2">
          <Calendar
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
          />
        </div>
      </div>

      {/* Upcoming & Past Events Section */}
      <div className="flex flex-col lg:flex-row border-t-2 border-[#e8d794] bg-[#292e3b]">
        <div className="flex flex-col w-1/2 p-8">
          <h1 className="text-white text-2xl font-bold">Upcoming events</h1>
        </div>
        <div className="flex flex-col w-1/2 p-8 gap-4">
          <h1 className="text-white text-2xl font-bold">Past events</h1>
          <PastEvents events={pastEvents} />
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
