import React from "react";
import { ExecomMember } from "./ExecomPanel"; // Adjust import path if needed

type Props = {
  member: ExecomMember;
  onClose: () => void;
};

const LearnMoreModal: React.FC<Props> = ({ member, onClose }) => {
  return (
    <div
      className="fixed inset-0 backdrop-blur-sm bg-black/30 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl p-6 w-[90%] max-w-3xl shadow-lg relative 
           transform transition-all duration-300 ease-out scale-100 opacity-100"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-600 text-lg"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold text-[#0c238a]">{member.name}</h2>
        <p className="text-gray-800 mt-2">{member.role}</p>
        {member.description && (
          <p className="text-gray-700 mt-2">{member.description}</p>
        )}
        {member.batch && <p className="text-gray-700 mt-2">{member.batch}</p>}
        {member.chapter && (
          <p className="text-gray-700 mt-2 whitespace-pre-line">
            {member.chapter}
          </p>
        )}
      </div>
    </div>
  );
};

export default LearnMoreModal;
