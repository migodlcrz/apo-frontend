import { useState, useRef } from "react";
import { FaDonate } from "react-icons/fa";
import RafflePage from "./RafflePage";

const DonationPage = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [amount, setAmount] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "12161925") {
      setIsAuthenticated(true);
      setShowError(false);
    } else {
      setShowError(true);
      setPassword("");
    }
  };
  const handleAmountClick = (value: any) => {
    setAmount(value);
  };

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#282e3a] via-[#1a1f2e] to-black flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-[#e8d794] to-[#d4c285] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-[#282e3a]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">
                Exclusive Access
              </h1>
              <p className="text-white/70 text-sm">
                Enter the exclusive code to access our premium donation portal
              </p>
            </div>

            <form onSubmit={handlePasswordSubmit} className="space-y-6">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter exclusive code"
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#e8d794] focus:border-transparent transition-all"
                  required
                />
              </div>

              {showError && (
                <div className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                  Invalid code. Please try again.
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#e8d794] to-[#d4c285] text-[#282e3a] font-bold py-3 px-4 rounded-lg hover:from-[#d4c285] hover:to-[#c4b275] transition-all transform hover:scale-[1.02] shadow-lg"
              >
                Access Portal
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-white/50 text-xs">Authorized personnel only</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="Landing Page" className="flex flex-col pb-10 relative">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/30 to-white/50 -z-10"></div>
      <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-r from-yellow-300/15 to-yellow-500/15 rounded-full blur-3xl -z-10"></div>
      <div className="w-full relative">
        <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full text-sm font-bold shadow-2xl border-2 border-white/30">
          ✨ VIP DONOR ACCESS
        </div>
        <img
          src="/group-students.jpg"
          className="w-full h-[80vh] object-cover filter brightness-110 contrast-105"
          alt="Main Landing"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 z-5"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 lg:px-12 space-y-6 z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-2xl blur-2xl"></div>
            <span className="relative text-white text-3xl lg:text-6xl font-extrabold drop-shadow-2xl bg-gradient-to-r bg-clip-text">
              💰 Ways and Means
            </span>
          </div>
          <div className="relative max-w-4xl">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-yellow-400/10 rounded-2xl blur-xl"></div>
            <span className="relative text-white text-lg lg:text-3xl font-medium drop-shadow-lg">
              <span className="text-yellow-300 font-bold">
                Exclusive VIP Portal:
              </span>{" "}
              Support Our Mission - Your Contribution Empowers Leadership,
              Service, and Lasting Change.
            </span>
          </div>
          <button
            className="relative group bg-gradient-to-r from-[#e8d794] to-[#d4c285] text-[#282e3a] font-bold text-lg lg:text-xl py-4 px-10 rounded-2xl shadow-2xl transition-all transform hover:scale-105 border-2 border-white/30"
            onClick={handleScrollToForm}
          >
            <span className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="relative flex items-center gap-2">
              ✨ Donate Now
            </span>
          </button>
        </div>
        <div className="flex bg-[#282e3a] px-10 py-5">
          <span className="text-white text-justify lg:text-lg text-sm">
            Notice: A portion of the funds raised from the APO Camping event
            will go toward supporting APO’s Centennial Celebration. Your
            participation not only fosters camaraderie and leadership but also
            contributes to making this historic milestone a grand and memorable
            occasion. Thank you for your support!
          </span>
        </div>
      </div>
      <div
        ref={formRef}
        className="min-h-screen bg-gradient-to-b from-gray-100 via-yellow-50/30 to-white py-10 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/20 via-transparent to-yellow-100/20 rounded-3xl -z-10"></div>
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-white to-yellow-50/30 p-10 rounded-2xl shadow-2xl border-2 border-white/60 backdrop-blur-sm relative">
          <div className="relative text-center mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-xl blur-lg"></div>
            <h1 className="flex flex-row items-center gap-2 relative text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
              <FaDonate color="black" /> Support Our Cause
            </h1>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/60 shadow-inner mb-8">
            <p className="text-gray-700 text-center font-medium">
              Your donation helps us make a difference. Any contribution is
              greatly appreciated!
            </p>
          </div>

          <div className="flex justify-center mb-8 relative">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-yellow-600/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <img
                src="/students.jpg"
                alt="Donation"
                className="relative rounded-2xl h-60 shadow-2xl border-4 border-white/60 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-gray-800 font-bold mb-2">
                👤 Name
              </label>
              <input
                type="text"
                className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border-2 border-yellow-200/50 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all shadow-lg"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-bold mb-2">
                📧 Email
              </label>
              <input
                type="email"
                className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border-2 border-yellow-200/50 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all shadow-lg"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-bold mb-2">
                💵 Amount
              </label>
              <input
                type="number"
                className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border-2 border-yellow-200/50 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all shadow-lg"
                placeholder="$ Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-white/50">
              <div className="text-center mb-4">
                <span className="text-gray-800 font-bold">
                  ✨ Quick Select Amounts
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {[1, 2, 10, 50, 100, 500, 1000].map((value) => (
                  <button
                    type="button"
                    key={value}
                    className="bg-gradient-to-r from-[#e8d794] to-[#d4c285] hover:from-[#d4c285] hover:to-[#c4b275] text-black font-bold px-6 py-3 rounded-xl transition-all transform hover:scale-105 shadow-lg border-2 border-white/30"
                    onClick={() => handleAmountClick(value)}
                  >
                    ${value}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#e8d794] to-[#d4c285] hover:from-[#d4c285] hover:to-[#c4b275] text-black font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 shadow-2xl border-2 border-white/30 relative group"
            >
              <span className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative flex items-center justify-center gap-2">
                💸 Donate Now - VIP Processing
              </span>
            </button>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center bg-slate-100 w-screen h-screen">
        <RafflePage />
      </div>
    </div>
  );
};

export default DonationPage;
