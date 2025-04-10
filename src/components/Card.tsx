import React from "react";

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col bg-white shadow-lg p-5 rounded-xl w-full lg:w-1/2 gap-4">
      <div className="flex flex-row w-full items-center gap-4">
        <span className="bg-slate-200 h-fit p-2 rounded-full">{icon}</span>
        <span className="text-md lg:text-2xl font-bold">{title}</span>
      </div>
      <span className="w-full text-justify text-slate-600">{description}</span>
    </div>
  );
};

export default Card;
