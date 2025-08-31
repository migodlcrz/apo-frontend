import { useState, useRef, useEffect } from "react";
import { FaX } from "react-icons/fa6";

interface AlbumProps {
  title: string;
  date: string;
  images: string[];
}

const Album: React.FC<AlbumProps> = ({ title, date, images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleGallery = () => setIsOpen(!isOpen);

  const coverImage = images[0];

  // Close modal on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="flex w-full flex-col relative group/album">
      <div className="cursor-pointer relative group" onClick={toggleGallery}>
        <div className="h-[240px] sm:h-[300px] lg:h-[360px] w-full overflow-hidden rounded-t-2xl border-2 sm:border-4 border-white/50 shadow-2xl">
          <img
            src={coverImage}
            alt={`${title} cover`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 filter brightness-110 contrast-105"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 rounded-t-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm bg-gradient-to-t from-black/50 to-transparent">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl px-3 sm:px-6 py-2 sm:py-3 border border-white/30">
            <span className="text-white text-sm sm:text-xl font-bold">
              {isOpen ? "🚫 Hide Photos" : "📸 View Album"}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-b-2xl text-black text-start bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 p-3 sm:p-6 border-2 sm:border-4 border-t-0 border-white/50 shadow-2xl">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent rounded-lg blur-sm"></div>
          <span className="relative text-sm sm:text-lg lg:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            {title}
          </span>
        </div>
        <span className="text-xs sm:text-sm lg:text-md text-gray-800 font-semibold bg-white/30 rounded-lg px-2 sm:px-3 py-1 mt-2 inline-block">
          {date}
        </span>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg p-2 sm:p-4">
          <div
            ref={modalRef}
            className="relative max-w-6xl w-full p-4 sm:p-8 bg-gradient-to-b from-white to-yellow-50/30 overflow-y-auto max-h-[95vh] sm:max-h-[90vh] rounded-xl sm:rounded-2xl shadow-2xl backdrop-blur-sm"
          >
            <button
              onClick={toggleGallery}
              className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-sm sm:text-xl font-bold transition-all shadow-lg z-10"
            >
              <FaX className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
            <div className="text-center mb-4 sm:mb-6 pr-12 sm:pr-16">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-xl blur-lg"></div>
                <h3 className="relative text-lg sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  📸 {title} Photos
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="h-[200px] sm:h-[280px] lg:h-[360px] w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white/50 group hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={src}
                    alt={`${title} ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-110 contrast-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Album;
