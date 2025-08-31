import React from "react";

interface RedirectCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColor?: string;
  onClick?: () => void;
}

const RedirectCard: React.FC<RedirectCardProps> = ({
  icon,
  title,
  description,
  iconColor,
  onClick,
}) => {
  return (
    <div
      className="flex flex-col w-full h-full cursor-pointer gap-6 bg-gradient-to-br from-white via-yellow-50/30 to-white hover:from-yellow-50 hover:via-yellow-100/50 hover:to-yellow-50 transition-all duration-500 shadow-2xl hover:shadow-3xl rounded-2xl p-8 border-2 border-white/60 backdrop-blur-sm hover:scale-105 relative group overflow-hidden"
      onClick={onClick}
    >
      {/* Premium Badge */}
      <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400/80 to-yellow-600/80 backdrop-blur-sm text-black px-2 py-1 rounded-full text-xs font-bold border border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        ✨ VIP
      </div>
      
      {/* Premium Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      <div className="flex flex-row gap-4 items-center relative z-10">
        <div className="relative group/icon">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-xl blur-sm group-hover/icon:blur-md transition-all"></div>
          <div className={`relative text-2xl lg:text-3xl ${iconColor} bg-white/60 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/70 group-hover/icon:scale-110 transition-transform duration-300`}>
            {icon}
          </div>
        </div>
        <div className="flex-1">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 to-transparent rounded-lg blur-sm"></div>
            <span className="relative text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{title}</span>
          </div>
        </div>
      </div>
      <div className="relative z-10">
        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/60 shadow-inner">
          <span className="text-sm lg:text-lg text-gray-700 font-medium leading-relaxed">{description}</span>
        </div>
      </div>
      
      {/* Premium Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default RedirectCard;
