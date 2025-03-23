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
      title: "Centennial Meeting",
      date: "January 2024",
      description:
        "A historic gathering marking 100 years of our organization, reflecting on past achievements, discussing future plans, and honoring long-standing members.",
      imageUrl: "/centennial.png",
    },
    {
      id: 2,
      title: "APO Philippines Founding Anniversary Celebration",
      date: "March 2024",
      description:
        "A momentous celebration honoring the founding of APO Philippines. Members from different generations came together to commemorate the organization's legacy, celebrate its achievements, and strengthen bonds through fellowship and shared traditions.",
      imageUrl: "/founding-anniversary.jpg",
    },
    {
      id: 3,
      title: "Egg Hunting",
      date: "April 2024",
      description:
        "A fun-filled Easter event where participants of all ages searched for hidden eggs, enjoyed festive games, and celebrated the holiday with family and friends.",
      imageUrl: "/easter.JPG",
    },
    {
      id: 4,
      title: "Philippine Independence Day Celebration",
      date: "June 2024",
      description:
        "A vibrant celebration honoring the Philippines' independence, showcasing Filipino heritage through cultural performances, patriotic ceremonies, and community gatherings. Attendees came together to reflect on the nation's history, celebrate its freedom, and strengthen unity among Filipinos.",
      imageUrl: "/pidc.jpg",
    },
    {
      id: 5,
      title: "Quezon Day",
      date: "August 2024",
      description:
        "A special commemoration honoring the legacy of President Manuel L. Quezon, known as the 'Father of the National Language.' The event highlights his contributions to Philippine independence, governance, and cultural identity through educational programs, tributes, and community activities.",
      imageUrl: "/quezon-day.jpg",
    },
    {
      id: 6,
      title: "Adopt-A-Highway",
      date: "October 2024",
      description:
        "A community-driven initiative where volunteers came together to clean up and beautify a local highway, promoting environmental awareness and civic responsibility.",
      imageUrl: "/adopt.JPG",
    },
    {
      id: 7,
      title: "Election of Officers",
      date: "October 2024",
      description:
        "A crucial event where members voted to elect new officers, ensuring strong leadership and a bright future for our organization.",
      imageUrl: "/elect.JPG",
    },
    {
      id: 8,
      title: "Halloween",
      date: "October 2024",
      description:
        "A spooky and exciting celebration featuring costume contests, haunted attractions, and trick-or-treating fun for all ages.",
      imageUrl: "/halloween.JPG",
    },
    {
      id: 9,
      title: "Breast Cancer Walk",
      date: "October 2024",
      description:
        "A heartfelt event dedicated to raising awareness and funds for breast cancer research. Participants walked together in solidarity, honoring survivors, remembering loved ones, and supporting the fight against breast cancer.",
      imageUrl: "/breast-cancer.jpg",
    },
    {
      id: 10,
      title: "Boat Ride for 'God’s Special Children'",
      date: "October 2024",
      description:
        "A meaningful event dedicated to providing a joyful and unforgettable boat ride experience for children with special needs. Volunteers and families came together to create a fun, safe, and inclusive environment, ensuring a day filled with smiles, laughter, and cherished memories.",
      imageUrl: "/boat-ride.jpg",
    },
    {
      id: 11,
      title: "NYC Marathon",
      date: "November 2024",
      description:
        "An exhilarating marathon through the streets of New York City, bringing together runners from around the world to test their endurance and support charitable causes.",
      imageUrl: "/marathon.JPG",
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
          <div>
            <span className="text-4xl font-semibold">Upcoming Events:</span>
            <ul className="mt-4 list-disc list-inside text-lg text-gray-700">
              <li>March 2025 - Virtual Spin the Wheel</li>
              <li>April 2025 - Virtual Fun Run</li>
              <li>May 2025 - Bingo Online/Bowling</li>
              <li>June 2025 - Filipino Parade (Sell)</li>
              <li>July 2025 - Fun Run</li>
              <li>August 2025 - Virtual Spin the Wheel</li>
              <li>September 2025 - Bingo Online</li>
              <li>October 2025 - Virtual Spin the Wheel</li>
            </ul>
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
      <div className="flex flex-col lg:flex-row bg-[#282e3a]">
        {/* <div className="flex flex-col w-1/2 p-8">
          <h1 className="text-white text-2xl font-bold">Upcoming events</h1>
        </div> */}
        <div className="flex flex-col w-full lg:w-1/2 p-8 gap-4">
          <h1 className="text-white text-2xl font-bold">Past events</h1>
          <PastEvents events={pastEvents} />
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
