import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hamburger from "../icons/Hamburger";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full bg-[#282e3a] z-50 shadow-md">
        <div className="flex flex-row h-16 px-4 items-center justify-between">
          {/* Logo */}
          <h1 className="text-white font-bold">Alpha Phi Omega</h1>

          {/* Desktop Menu (Hidden on Small Screens) */}
          <ul className="hidden lg:flex space-x-16 text-white font-medium">
            <li
              className="hover:text-[#e8d794] transition-colors duration-300 p-2 rounded cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className="hover:text-[#e8d794] transition-colors duration-300 p-2 rounded cursor-pointer"
              onClick={() => navigate("/donate")}
            >
              Donate
            </li>
            <li
              className="hover:text-[#e8d794] transition-colors duration-300 p-2 rounded cursor-pointer"
              onClick={() => navigate("/events")}
            >
              Events
            </li>
            <li
              className="hover:text-[#e8d794] transition-colors duration-300 p-2 rounded cursor-pointer"
              onClick={() => navigate("/store")}
            >
              Store
            </li>
            <li
              className="hover:text-[#e8d794] transition-colors duration-300 p-2 rounded cursor-pointer"
              onClick={() => navigate("/raffle")}
            >
              Raffle
            </li>
          </ul>

          {/* Mobile Hamburger Menu (Hidden on Large Screens) */}
          <div className="lg:hidden">
            <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
          </div>
        </div>

        {/* Mobile Menu (Sliding Panel) */}
        <div
          className={`lg:hidden w-full bg-[#1f2533] text-white shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="p-4 space-y-2">
            <li
              className="hover:bg-[#292e3b] p-2 rounded"
              onClick={() => {
                setIsOpen(false);
                navigate("/");
              }}
            >
              Home
            </li>
            <li
              className="hover:bg-[#292e3b] p-2 rounded"
              onClick={() => {
                setIsOpen(false);
                navigate("/events");
              }}
            >
              Events
            </li>
            <li
              className="hover:bg-[#292e3b] p-2 rounded"
              onClick={() => {
                setIsOpen(false);
                navigate("/donate");
              }}
            >
              Donate
            </li>
            <li
              className="hover:bg-[#292e3b] p-2 rounded"
              onClick={() => {
                setIsOpen(false);
                navigate("/raffle");
              }}
            >
              Raffle
            </li>
          </ul>
        </div>
      </div>

      {/* Push Content Below Navbar */}
      <div className="mt-16"></div>
    </>
  );
};

export default Navbar;
