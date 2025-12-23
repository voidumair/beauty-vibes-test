import React from "react";

const Filters = ({ items }: { items: string[] }) => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {items.map((item, index) => (
        <button
          key={index}
          className={`px-3 py-1 rounded-full border font-medium text-sm ${index === 0 ? "text-white bg-black border-black" : "text-secondary-foreground bg-background-secondary border-[#DEDEDE]"}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Filters;
