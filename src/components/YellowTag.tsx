import React from "react";

interface YellowTagProps {
  icon?: React.ReactNode;
  text?: string;
}

const YellowTag: React.FC<YellowTagProps> = ({ icon, text }) => {
  return (
    <div className="flex flex-row gap-1 lg:gap-2 items-center bg-yellow-500 px-4 py-2 rounded-full text-black font-semibold text-sm lg:text-lg shadow-lg">
      <span className="text-lg">{icon}</span>
      <span className="text-xs lg:text-lg">{text}</span>
    </div>
  );
};

export default YellowTag;
