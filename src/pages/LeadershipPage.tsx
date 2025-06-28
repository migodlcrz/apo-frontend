import { useState } from "react";
import ExecomPanel from "../components/ExecomPanel";
import BodPanel from "../components/BodPanel";

const LeadershipPage = () => {
  const [activeTab, setActiveTab] = useState<"executive" | "board">(
    "executive"
  );

  return (
    <div className="flex flex-col w-full justify-center items-center pt-20">
      {/* Header */}
      <div className="flex flex-col gap-5 w-full justify-center items-center p-10 lg:p-20">
        <span className="text-xl lg:text-6xl font-bold">Our Leadership</span>
        <div className="flex flex-col w-full items-center justify-center px-6">
          <span className="text-slate-500 text-sm lg:text-xl text-center">
            Meet the dedicated individuals who lead our organization with vision
            and expertise.
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-col w-full px-2 lg:px-40">
        <div className="flex flex-row w-full bg-slate-100 rounded-lg overflow-hidden p-1">
          <button
            className={`w-1/2 py-2 transition-all duration-300 font-semibold ${
              activeTab === "executive"
                ? "bg-white text-black shadow"
                : "bg-slate-100 text-slate-500"
            }`}
            onClick={() => setActiveTab("executive")}
          >
            Executive Committee
          </button>
          <button
            className={`w-1/2 py-2 transition-all duration-300 font-semibold ${
              activeTab === "board"
                ? "bg-white text-black shadow"
                : "bg-slate-100 text-slate-500"
            }`}
            onClick={() => setActiveTab("board")}
          >
            Board of Directors
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="w-full px-4 lg:px-40 mt-8 transition-all duration-500">
        {activeTab === "executive" ? (
          <div className="flex flex-col w-full bg-white rounded-lg p-6 shadow-md transition-opacity duration-300 opacity-100">
            <h2 className="text-2xl font-bold mb-4">Executive Committee</h2>
            <ExecomPanel />
          </div>
        ) : (
          <div className="flex flex-col w-full bg-white rounded-lg p-6 shadow-md transition-opacity duration-300 opacity-100">
            <h2 className="text-2xl font-bold mb-4">Board of Directors</h2>
            <BodPanel />
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadershipPage;
