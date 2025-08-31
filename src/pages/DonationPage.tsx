import { useState, useRef } from "react";

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
    <div id="Landing Page" className="flex flex-col pb-10">
      <div className="w-full relative">
        <img
          src="/group-students.jpg"
          className="w-full h-[80vh] object-cover"
          alt="Main Landing"
        />
        <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-center px-6 lg:px-12 space-y-4">
          <span className="text-white text-3xl lg:text-6xl font-extrabold drop-shadow-lg">
            Ways and Means
          </span>
          <span className="text-white text-lg lg:text-3xl font-medium drop-shadow-lg max-w-3xl">
            Support Our Mission: Your Contribution Empowers Leadership, Service,
            and Lasting Change.
          </span>
          <button
            className="bg-[#e8d794] text-[#282e3a] font-bold text-lg lg:text-xl py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-[#d4c285]"
            onClick={handleScrollToForm}
          >
            Donate Now
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
      <div ref={formRef} className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Support Our Cause
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Your donation helps us make a difference. Any contribution is
            greatly appreciated!
          </p>

          <div className="flex justify-center mb-6">
            <img
              src="/students.jpg"
              alt="Donation"
              className="rounded-lg h-60"
            />
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label className="block text-gray-700">Amount</label>
              <input
                type="number"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="$ Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {[1, 2, 10, 50, 100, 500, 1000].map((value) => (
                <button
                  type="button"
                  key={value}
                  className="bg-[#e8d794] text-black font-semibold px-4 py-2 rounded-lg hover:bg-[#cbb970] transition"
                  onClick={() => handleAmountClick(value)}
                >
                  ${value}
                </button>
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-[#e8d794] text-black font-semibold py-2 px-4 rounded-lg hover:bg-[#cbb970] transition"
            >
              Donate Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
