const CentennialPage = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center pt-20">
      <div className="flex flex-col gap-5 w-full justify-center items-center p-10 lg:p-20">
        <span className="text-xl lg:text-6xl font-bold">
          Centennial Program
        </span>
        <div className="flex flex-col w-full items-center justify-center px-6">
          <span className="text-slate-500 text-sm lg:text-xl text-center">
            Celebrate 100 years of brotherhood, legacy, and leadership. Our
            Centennial Program honors the milestones of the past while paving
            the way for a future filled with purpose and unity.
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-full justify-center items-center p-10 lg:p-20">
        <img src="centennial-program.png" alt="" className="" />
        <button
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSd7FGy-1YDi5T7GfcANAFCUwm0OxU7YdI5otvp_VCbyPEIyZQ/viewform",
              "_blank"
            )
          }
          className="bg-[#282e3a] text-white px-4 py-2 rounded-lg font-semibold text-md lg:text-xl transition hover:bg-[#1e2025] cursor-pointer"
        >
          Register Now
        </button>
      </div>
      <div className="flex flex-col lg:flex-row w-full items-stretch h-auto lg:h-[calc(100vh-/*your header height if any*/)]">
        <div className="w-full lg:w-2/3 lg:relative">
          <img
            src="the-grind.PNG"
            alt=""
            className="lg:absolute lg:inset-0 w-full h-full lg:object-cover"
          />
        </div>
        <div className="flex flex-col w-full lg:w-1/3 gap-5 bg-[#ffec9c] items-start p-10 lg:p-20">
          <h1 className="text-black text-lg lg:text-5xl">The Grind</h1>
          <span className="text-black">
            Mayor Sal Panto Jr of Easton, PA <br />
            Feb. 12, 2024 <br />
            By: Bro. Sol Jasper Kapunan <br />
          </span>
          <p className="text-black">
            One clear GNY Vision leads to one grand direction. The team shall
            deliver spot-on; we now have the approval from Easton!
          </p>
          <p className="text-black">
            Thanks for the reception Mayor Sal, as you welcomed the team with
            Sol. Hand in hand, everyone stood tall; inch by inch we will deliver
            it all!
          </p>
          <p className="text-black">
            This lifetime shall bear witness to our centennial. Nil any repeat,
            no retakes and no remedial; For if we sleep and miss this one, then
            wait shall we in eternity, after we’re gone.
          </p>
          <p className="text-black">
            But one thing for sure that brothers and sisters will do; an
            indelible mark and at the center too. The rotunda, the prime
            location; at the heartland of Easton we will lay the foundation. The
            Obelisk shall not be the only one; historic tours & more shall
            continue the fun.
          </p>
          <p className="text-black">
            Our fraternity has evolved in all directions, with memorable events
            to remind this nation. For posterity and unto thee, we commence the
            grind and put everything in motion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CentennialPage;
