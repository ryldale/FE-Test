import { Link, useLocation } from "react-router-dom";
import { sharedLinks } from "../types/types";

const BottomNavbar = () => {
  const location = useLocation();

  return (
    <footer className="w-full p-3 flex justify-around items-center shadow-md md:hidden">
      {sharedLinks.map((link, index) => {
        const isActive = location.pathname === link.path;
        return (
          <Link
            key={index}
            to={link.path}
            className="flex flex-col justify-between items-center"
          >
            <div
              className={`mb-1 ${
                isActive ? "border-2 rounded-full border-[#00A6FF] p-1" : ""
              }`}
            >
              {isActive ? link.activeIcon : link.icon}
            </div>
            <span
              className={`font-poppins text-sm ${
                isActive ? "text-[#00A6FF]" : "text-[#888888]"
              } font-normal leading-5 tracking-tight text-center uppercase`}
            >
              {link.name}
            </span>
          </Link>
        );
      })}
    </footer>
  );
};

export default BottomNavbar;
