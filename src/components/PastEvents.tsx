import React from "react";

type Event = {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
};

type PastEventsProps = {
  events: Event[];
};

const PastEvents: React.FC<PastEventsProps> = ({ events }) => {
  return (
    <div className="flex flex-col gap-6 p-6 bg-white rounded-md">
      {events.length === 0 ? (
        <p className="text-gray-500">No past events available.</p>
      ) : (
        events.map((event) => (
          <div
            key={event.id}
            className="bg-slate-100 p-4 rounded-lg shadow-md flex flex-col lg:flex-row gap-4"
          >
            {/* Event Image */}
            <div className="w-full lg:w-1/3">
              <img
                src={event.imageUrl}
                alt={event.title}
                className="rounded-lg w-full object-cover h-40"
              />
            </div>

            {/* Event Details */}
            <div className="flex flex-col justify-between w-full lg:w-2/3">
              <div>
                <h2 className="text-lg font-bold text-gray-800">
                  {event.title}
                </h2>
                <p className="text-sm text-gray-500">{event.date}</p>
                <p className="text-gray-700 mt-2">{event.description}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PastEvents;
