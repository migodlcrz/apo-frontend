import React from "react";

interface TagProps {
  children: React.ReactNode;
  mode: "light" | "dark";
}

const Tag: React.FC<TagProps> = ({ children, mode }) => {
  if (mode === "light") {
    return (
      <div className="inline-block text-black bg-white text-sm lg:text-lg border-[0.1px] w-fit px-3 py-1 font-semibold rounded-full border-slate-400">
        {children}
      </div>
    );
  } else {
    return (
      <div className="inline-block text-white bg-black text-sm lg:text-lg border-[0.1px] w-fit px-3 py-1 font-semibold rounded-full border-slate-400">
        {children}
      </div>
    );
  }
};

export default Tag;
