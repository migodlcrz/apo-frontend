import React from "react";

interface RedirectCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColor?: string;
  onClick?: () => void;
}

const RedirectCard: React.FC<RedirectCardProps> = ({
  icon,
  title,
  description,
  iconColor,
  onClick,
}) => {
  return (
    <div
      className="flex flex-col w-full h-full cursor-pointer gap-4 bg-slate-100 hover:bg-slate-300 transition-colors duration-300 shadow-md rounded-lg p-5"
      onClick={onClick}
    >
      <div className="flex flex-row gap-2 items-center">
        <span className={`text-lg lg:text-2xl ${iconColor}`}>{icon}</span>
        <span className="text-lg lg:text-2xl font-bold">{title}</span>
      </div>
      <span className="text-sm lg:text-lg text-gray-500">{description}</span>
    </div>
  );
};

export default RedirectCard;
