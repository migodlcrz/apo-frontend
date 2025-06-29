import React from "react";
import { ExecomMember } from "./ExecomPanel";

type Props = {
  member: ExecomMember;
  onClose: () => void;
};

const LearnMoreModal: React.FC<Props> = ({ member, onClose }) => {
  return (
    <div
      className="fixed inset-0 backdrop-blur-sm bg-black/30 z-50 flex flex-col justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex bg-white rounded-xl p-6 w-[90%] max-w-3xl shadow-lg relative 
           transform transition-all duration-300 ease-out scale-100 opacity-100"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-600 text-lg"
        >
          &times;
        </button>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col lg:flex-row gap-5">
            <img src={member.image} alt="" className="w-full lg:w-1/2" />
            <div className="flex flex-col w-full lg:w-1/2">
              <h2 className="text-xl font-bold text-[#0c238a]">
                {member.name}
              </h2>
              <p className="text-gray-800 mt-2 font-semibold">{member.role}</p>
              {member.description && (
                <p className="text-gray-700 mt-2">{member.description}</p>
              )}
              {member.batch && (
                <p className="text-gray-700 mt-2">{member.batch}</p>
              )}
              {member.chapter && (
                <p className="text-gray-700 mt-2 whitespace-pre-line">
                  {member.chapter}
                </p>
              )}
            </div>
          </div>
          <div className="w-full max-h-96 overflow-y-auto text-justify whitespace-pre-line text-gray-700 pr-2">
            {member.summary}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMoreModal;
