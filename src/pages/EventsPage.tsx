import { useState } from "react";
import Calendar from "../components/Calendar";
import EventsCarousel from "../components/EventsCarousel";

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
      title: "APO Camping",
      date: "June 2024",
      description:
        "An exciting outdoor adventure where members gathered to experience nature, build camaraderie, and strengthen bonds through various team-building activities, bonfires, and fellowship. The event fostered leadership, unity, and the spirit of brotherhood in a fun and relaxing setting.",
      imageUrl: "/camping.jpg",
    },
    {
      id: 6,
      title: "Quezon Day",
      date: "August 2024",
      description:
        "A special commemoration honoring the legacy of President Manuel L. Quezon, known as the 'Father of the National Language.' The event highlights his contributions to Philippine independence, governance, and cultural identity through educational programs, tributes, and community activities.",
      imageUrl: "/quezon-day.jpg",
    },
    {
      id: 7,
      title: "Adopt-A-Highway",
      date: "October 2024",
      description:
        "A community-driven initiative where volunteers came together to clean up and beautify a local highway, promoting environmental awareness and civic responsibility.",
      imageUrl: "/adopt.JPG",
    },
    {
      id: 8,
      title: "Election of Officers",
      date: "October 2024",
      description:
        "A crucial event where members voted to elect new officers, ensuring strong leadership and a bright future for our organization.",
      imageUrl: "/elect.JPG",
    },
    {
      id: 9,
      title: "Halloween",
      date: "October 2024",
      description:
        "A spooky and exciting celebration featuring costume contests, haunted attractions, and trick-or-treating fun for all ages.",
      imageUrl: "/halloween.JPG",
    },
    {
      id: 10,
      title: "Breast Cancer Walk",
      date: "October 2024",
      description:
        "A heartfelt event dedicated to raising awareness and funds for breast cancer research. Participants walked together in solidarity, honoring survivors, remembering loved ones, and supporting the fight against breast cancer.",
      imageUrl: "/breast-cancer.jpg",
    },
    {
      id: 11,
      title: "Boat Ride for 'God’s Special Children'",
      date: "October 2024",
      description:
        "A meaningful event dedicated to providing a joyful and unforgettable boat ride experience for children with special needs. Volunteers and families came together to create a fun, safe, and inclusive environment, ensuring a day filled with smiles, laughter, and cherished memories.",
      imageUrl: "/boat-ride.jpg",
    },
    {
      id: 12,
      title: "NYC Marathon",
      date: "November 2024",
      description:
        "An exhilarating marathon through the streets of New York City, bringing together runners from around the world to test their endurance and support charitable causes.",
      imageUrl: "/marathon.JPG",
    },
  ];

  const morePhotos = [
    {
      title: "Easter 2024",
      date: "Apr 1-2, 2024",
      images: ["/easter1.jpg", "/easter2.jpg", "/easter3.jpg"],
    },
    {
      title: "Adopt a Hwy",
      date: "May 4-5, 2024",
      images: ["/adopt1.jpg", "/adopt2.jpg"],
    },
    {
      title: "Anniv/Xmas Party",
      date: "Dec 15-17, 2024",
      images: ["/xmas1.jpg", "/xmas2.jpg", "/xmas3.jpg", "/xmas4.jpg"],
    },
    {
      title: "2025 1st GMM",
      date: "Jan 19-20, 2025",
      images: [
        "/more-photos/first-gmm/photo-1.jpeg",
        "/more-photos/first-gmm/photo-2.jpeg",
        "/more-photos/first-gmm/photo-3.jpeg",
        "/more-photos/first-gmm/photo-4.jpeg",
        "/more-photos/first-gmm/photo-5.jpeg",
        "/more-photos/first-gmm/photo-6.jpeg",
        "/more-photos/first-gmm/photo-7.jpeg",
        "/more-photos/first-gmm/photo-8.png",
        "/more-photos/first-gmm/photo-9.jpeg",
        "/more-photos/first-gmm/photo-10.jpeg",
        "/more-photos/first-gmm/photo-11.jpeg",
        "/more-photos/first-gmm/photo-12.jpeg",
      ],
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
              <li>July 04 2025 - July 06 2025 - GNY Camping - Wildwood</li>
              <li>August 23 2025 - Adopt A Hwy & GMM - NJ</li>
              {/* <li>May 2025 - Bingo Online/Bowling</li>
              <li>June 2025 - Filipino Parade (Sell)</li>
              <li>July 2025 - Fun Run</li>
              <li>August 2025 - Virtual Spin the Wheel</li>
              <li>September 2025 - Bingo Online</li>
              <li>October 2025 - Virtual Spin the Wheel</li> */}
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
        {/* <div className="flex flex-col w-full lg:w-1/2 p-8 gap-4">
          <h1 className="text-white text-2xl font-bold">Past events</h1>
          <PastEvents events={pastEvents} />
        </div> */}
        <div className="flex flex-col items-center w-full p-6 gap-10">
          <h1 className="text-white text-2xl font-bold">Past events</h1>
          <EventsCarousel events={pastEvents} />
          {/* More Photos Section */}
          <div className="w-full max-w-screen-xl px-4 pb-12 flex flex-col gap-12">
            {morePhotos.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {section.title} ({section.date})
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {section.images.map((src, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={src}
                      alt={`${section.title} ${imgIndex + 1}`}
                      className="rounded-xl shadow-md"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
