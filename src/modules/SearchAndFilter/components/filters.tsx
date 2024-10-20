import { useState } from "react";
import { links } from "../types/type";

type PropTypes = {
  onSelectCategory: (category: string) => void;
};

const Filters = ({ onSelectCategory }: PropTypes) => {
  const [activeLink, setActiveLink] = useState("Start");

  const handleClick = (category: string) => {
    setActiveLink(category);
    onSelectCategory(category);
  };

  return (
    <div className="flex justify-between overflow-x-auto lg:overflow-x-hidden w-full no-scrollbar h-[50px]">
      {links.map((link, index) => (
        <div
          key={index}
          className="flex flex-col justify-between items-center mx-2 min-w-max cursor-pointer"
          onClick={() => handleClick(link.name)}
        >
          {activeLink === link.name ? link.activeIcon : link.icon}
          <span
            className={`font-poppins text-sm font-normal leading-5 tracking-tight text-center uppercase cursor-pointer ${
              activeLink === link.name
                ? "text-[#00A6FF] underline"
                : "text-[#888888]"
            }`}
          >
            {link.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Filters;
