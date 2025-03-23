import { useState } from "react";

const DonationPage = () => {
  const [amount, setAmount] = useState("");

  const handleAmountClick = (value: any) => {
    setAmount(value);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Support Our Cause
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Your donation helps us make a difference. Any contribution is greatly
          appreciated!
        </p>

        <div className="flex justify-center mb-6">
          <img src="/students.jpg" alt="Donation" className="rounded-lg h-60" />
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
  );
};

export default DonationPage;
