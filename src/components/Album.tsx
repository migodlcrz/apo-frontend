import { useState, useRef, useEffect } from "react";

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
    <div className="flex w-full flex-col">
      <div className="cursor-pointer relative group" onClick={toggleGallery}>
        <div className="h-[360px] w-full overflow-hidden rounded-t-xl">
          <img
            src={coverImage}
            alt={`${title} cover`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-100"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 rounded-t-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm bg-white/20">
          <span className="text-white text-xl font-semibold">
            {isOpen ? "Hide Photos" : "View Album"}
          </span>
        </div>
      </div>

      <h2 className="flex flex-col rounded-b-xl text-black text-start bg-yellow-500 p-4">
        <span className="text-sm lg:text-2xl font-bold">{title}</span>
        <span className="text-xs lg:text-md text-gray-800">{date}</span>
      </h2>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div
            ref={modalRef}
            className="relative max-w-6xl w-full p-6 bg-white overflow-y-auto max-h-[90vh]"
          >
            <button
              onClick={toggleGallery}
              className="absolute top-4 right-4 text-black hover:text-red-500 text-2xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-center text-2xl font-bold mb-4 text-gray-800">
              {title} Photos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="h-[360px] w-full overflow-hidden rounded-xl shadow-md"
                >
                  <img
                    src={src}
                    alt={`${title} ${index + 1}`}
                    className="w-full h-full object-cover"
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
