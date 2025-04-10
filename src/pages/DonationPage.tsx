import { useState, useRef } from "react";

const DonationPage = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [amount, setAmount] = useState("");
  const handleAmountClick = (value: any) => {
    setAmount(value);
  };

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };
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
