import { FaFacebook, FaInstagram } from "react-icons/fa"; // Make sure to install react-icons

const Footer = () => {
  return (
    <footer className="bg-[#282e3a] text-white py-8 mt-16 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Logo and Org Info */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <img src="/100-year.png" alt="APO Logo" className="h-8 w-auto" />
            <h1 className="text-xl font-bold">Alpha Phi Omega</h1>
          </div>
          <p className="text-sm text-gray-300">
            A national coeducational service organization founded on the
            principles of Leadership, Friendship, and Service.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2 text-sm">
          <h2 className="font-semibold text-white text-base">Contact Us</h2>
          <p className="text-gray-300">
            798 MIDDLE STREET
            <br />
            NISKANUYA, NY 12309
          </p>
          <p className="text-gray-300">
            <a
              href="mailto:APOAA.GNY@GMAIL.COM"
              className="hover:text-[#e8d794] transition-colors"
            >
              APOAA.GNY@GMAIL.COM
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2 text-sm">
          <h2 className="font-semibold text-white text-base">Quick Links</h2>
          <a
            href="/leadership"
            className="hover:text-[#e8d794] transition-colors"
          >
            LEADERSHIP
          </a>
          <a href="/events" className="hover:text-[#e8d794] transition-colors">
            UPCOMING EVENTS
          </a>
          <a
            href="/centennial"
            className="hover:text-[#e8d794] transition-colors"
          >
            CENTENNIAL
          </a>
          <a
            href="/centennial"
            className="hover:text-[#e8d794] transition-colors"
          >
            CENTENNIAL REGISTRATION
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col gap-2 text-sm">
          <h2 className="font-semibold text-white text-base">Follow Us</h2>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/apogny"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#e8d794] transition-colors text-lg"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/apoaagny/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#e8d794] transition-colors text-lg"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-6">
        &copy; {new Date().getFullYear()} Alpha Phi Omega. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
