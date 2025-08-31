interface CentennialCardProps {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  img: string;
}

const CentennialCard = ({
  title,
  subtitle,
  description,
  link,
  img,
}: CentennialCardProps) => (
  <div
    className="flex flex-col items-center gap-6 p-6 bg-gradient-to-br from-[#ffec9c] via-[#f5e071] to-[#e8d794] rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer border-2 border-white/50 backdrop-blur-sm hover:scale-105 relative group overflow-hidden"
    onClick={() => window.open(link, "_blank")}
  >
    {/* Premium Glow Effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
    <div className="flex flex-row w-full gap-6 relative z-10">
      <div className="relative group/img">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-yellow-600/30 rounded-xl blur-sm group-hover/img:blur-md transition-all"></div>
        <img
          src={img}
          alt={title}
          className="relative w-20 h-20 object-cover rounded-xl shadow-lg border-2 border-white/60 group-hover/img:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col justify-center flex-1">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent rounded-lg blur-sm"></div>
          <span className="relative text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            {title}
          </span>
        </div>
        <span className="text-sm text-[#282e3a] font-bold bg-white/30 rounded-lg px-3 py-1 mt-2 border border-white/50">
          {subtitle}
        </span>
      </div>
    </div>
    <div className="w-full text-justify text-black text-sm relative z-10">
      <div className="bg-white/40 backdrop-blur-sm rounded-xl p-4 border border-white/60 shadow-inner">
        <p className="leading-relaxed font-medium">{description}</p>
      </div>
    </div>

    {/* Premium Bottom Accent */}
    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"></div>
  </div>
);

export default CentennialCard;
