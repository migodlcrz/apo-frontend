import React, { useState, ReactNode } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

interface AccordionProps {
  title: string;
  children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b border-gray-700 ${isOpen && "pb-4"}`}>
      {/* Header Section */}
      <button
        className="w-full flex justify-between text-sm lg:text-xl items-center py-3 px-4 text-[#292e3b] font-medium focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <RiArrowDropDownLine size={24} />
        </span>
      </button>

      {/* Content Section */}
      <div
        className={`transition-all overflow-hidden duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100 p-4" : "max-h-0 opacity-0 p-0"
        }`}
      >
        <div className="text-[#292e3b] text-sm lg:text-lg font-normal text-justify">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
