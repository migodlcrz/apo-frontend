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
    <div className="w-full mx-auto bg-gradient-to-b from-white to-yellow-50/30 shadow-2xl rounded-2xl p-8 border-2 border-white/60 backdrop-blur-sm relative">
      {/* Calendar Header */}
      <div className="text-center text-xl font-bold mb-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-lg blur-sm"></div>
        <span className="relative bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          📅 {monthYear}
        </span>
      </div>

      {/* Day Labels */}
      <div className="grid grid-cols-7 gap-3 mb-4 text-gray-700 text-md font-bold">
        {dayLabels.map((label, idx) => (
          <div
            key={idx}
            className="text-center bg-yellow-100/50 rounded-lg py-2 border border-yellow-200/50"
          >
            {label}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-3">
        {days.map((day) => (
          <motion.button
            key={day}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onDateChange(day)}
            className={`h-16 p-4 rounded-xl text-center text-xs lg:text-md font-bold transition-all shadow-lg border-2 ${
              selectedDate === day
                ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black shadow-2xl scale-105 border-white/50"
                : "bg-white/70 hover:bg-yellow-100/50 border-white/40 hover:border-yellow-200/50 backdrop-blur-sm"
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
