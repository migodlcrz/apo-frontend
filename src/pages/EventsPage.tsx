import { useState } from "react";
import Calendar from "../components/Calendar";

const EventsPage: React.FC = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const [selectedDate, setSelectedDate] = useState<number>(today.getDate());

  return (
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
            The events for today is
          </h1>
          <span>None</span>
        </div>
        {/* <p className="mt-4 text-gray-600">Selected date: {selectedDate}</p> */}
      </div>
      <div className="flex w-full lg:w-1/2">
        <Calendar selectedDate={selectedDate} onDateChange={setSelectedDate} />
      </div>
    </div>
  );
};

export default EventsPage;
