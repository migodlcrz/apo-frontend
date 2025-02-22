import { useState } from "react";
import Hamburger from "../icons/Hamburger";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Fixed Navbar with Sliding Panel Inside */}
      <div className="fixed top-0 left-0 w-full bg-[#292e3b] z-50 shadow-md">
        {/* Navbar Content */}
        <div className="flex flex-row h-16 px-4 items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-white font-bold">Alpha Phi Omega</h1>
          </div>
          <div className="flex items-center">
            <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
          </div>
        </div>

        {/* Sliding Panel Inside Navbar */}
        <div
          className={`w-full bg-[#1f2533] text-white shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="p-4 space-y-2">
            <li className="hover:bg-[#292e3b] p-2 rounded">Home</li>
            <li className="hover:bg-[#292e3b] p-2 rounded">Events</li>
            <li className="hover:bg-[#292e3b] p-2 rounded">About</li>
            <li className="hover:bg-[#292e3b] p-2 rounded">Contact</li>
          </ul>
        </div>
      </div>

      {/* Push Content Below Navbar */}
      <div className="mt-16"></div>
    </>
  );
};

export default Navbar;
