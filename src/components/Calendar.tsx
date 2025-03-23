import { motion } from "framer-motion";

type CalendarProps = {
  selectedDate: number;
  onDateChange: (day: number) => void;
};

const Calendar: React.FC<CalendarProps> = ({ selectedDate, onDateChange }) => {
  const today = new Date();
  const daysInMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  ).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const monthYear = today.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const dayLabels = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <div className="w-full mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-300">
      {/* Calendar Header */}
      <div className="text-center text-xl font-bold mb-4 text-gray-800">
        {monthYear}
      </div>

      {/* Day Labels */}
      <div className="grid grid-cols-7 gap-2 mb-2 text-gray-600 text-md font-semibold">
        {dayLabels.map((label, idx) => (
          <div key={idx} className="text-center">
            {label}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => (
          <motion.button
            key={day}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onDateChange(day)}
            className={`h-16 p-4 rounded-lg text-center text-xs lg:text-md font-medium transition-all ${
              selectedDate === day
                ? "bg-blue-500 text-white shadow-md scale-105"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {day}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
