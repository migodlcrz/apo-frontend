import React from "react";

interface HamburgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="relative w-8 h-8 focus:outline-none"
    >
      {/* Top Bar */}
      <span
        className={`absolute block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
          isOpen ? "rotate-45 translate-y-[-5]" : "-translate-y-2"
        }`}
      ></span>
      {/* Middle Bar */}
      <span
        className={`absolute block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      {/* Bottom Bar */}
      <span
        className={`absolute block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
          isOpen ? "-rotate-45 -translate-y-[-8]" : "translate-y-2"
        }`}
      ></span>
    </button>
  );
};

export default Hamburger;
