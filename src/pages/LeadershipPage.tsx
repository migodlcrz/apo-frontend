import { useState } from "react";
import ExecomPanel from "../components/ExecomPanel";
import BodPanel from "../components/BodPanel";

const LeadershipPage = () => {
  const [activeTab, setActiveTab] = useState<"executive" | "board">(
    "executive"
  );

  return (
    <div className="flex flex-col w-full justify-center items-center pt-20 relative">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/40 via-white to-yellow-50/20 -z-10"></div>
      <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-r from-yellow-300/15 to-yellow-500/15 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-40 left-10 w-60 h-60 bg-gradient-to-l from-yellow-400/10 to-yellow-600/10 rounded-full blur-2xl -z-10"></div>
      {/* Header */}
      <div className="flex flex-col gap-6 w-full justify-center items-center p-10 lg:p-20 relative">
        <div className="relative text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-2xl blur-2xl"></div>
          <span className="relative text-xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            🏆 Our Leadership
          </span>
        </div>

        <div className="flex flex-col w-full items-center justify-center px-6 relative">
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-xl border border-yellow-200/50"></div>
          <span className="relative text-slate-600 text-sm lg:text-xl text-center font-medium px-6 py-4">
            Meet the dedicated individuals who lead our organization with vision
            and expertise.
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-col w-full px-2 lg:px-40 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/30 to-yellow-200/20 rounded-2xl blur-xl -z-10"></div>
        <div className="flex flex-row w-full bg-gradient-to-r gap-2 from-slate-100 to-slate-50 rounded-2xl overflow-hidden p-2 shadow-xl border-2 border-white/50 backdrop-blur-sm">
          <button
            className={`w-1/2 py-4 px-6 transition-all duration-300 font-bold hover:cursor-pointer rounded-xl relative group ${
              activeTab === "executive"
                ? "bg-gradient-to-r from-[#282e3a] to-[#1a1f2e] text-white shadow-2xl border-2 border-yellow-400/30"
                : "bg-transparent text-slate-600 hover:bg-white/50 hover:text-slate-800"
            }`}
            onClick={() => setActiveTab("executive")}
          >
            {activeTab === "executive" && (
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent rounded-xl"></span>
            )}
            <span className="relative lg:text-lg text-sm flex items-center justify-center gap-2">
              👑 Executive Committee
            </span>
          </button>
          <button
            className={`w-1/2 py-4 px-6 transition-all duration-300 font-bold hover:cursor-pointer rounded-xl relative group ${
              activeTab === "board"
                ? "bg-gradient-to-r from-[#282e3a] to-[#1a1f2e] text-white shadow-2xl border-2 border-yellow-400/30"
                : "bg-transparent text-slate-600 hover:bg-white/50 hover:text-slate-800"
            }`}
            onClick={() => setActiveTab("board")}
          >
            {activeTab === "board" && (
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent rounded-xl"></span>
            )}
            <span className="relative lg:text-lg text-sm flex items-center justify-center gap-2">
              🎯 Board of Directors
            </span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="w-full px-4 lg:px-40 mt-8 transition-all duration-500 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-50/30 to-transparent rounded-3xl -z-10"></div>
        {activeTab === "executive" ? (
          <div className="flex flex-col w-full bg-gradient-to-b from-white to-yellow-50/30 rounded-2xl p-8 shadow-2xl transition-opacity duration-300 opacity-100 border-2 border-white/50 backdrop-blur-sm relative">
            <div className="relative text-center mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-xl blur-lg"></div>
              <h2 className="relative text-2xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                👑 Executive Committee
              </h2>
            </div>
            <ExecomPanel />
          </div>
        ) : (
          <div className="flex flex-col w-full bg-gradient-to-b from-white to-yellow-50/30 rounded-2xl p-8 shadow-2xl transition-opacity duration-300 opacity-100 border-2 border-white/50 backdrop-blur-sm relative">
            <div className="relative text-center mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-xl blur-lg"></div>
              <h2 className="relative text-2xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                🎯 Board of Directors
              </h2>
            </div>
            <BodPanel />
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadershipPage;
