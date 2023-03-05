import { NavLink } from "react-router-dom";
import { useContext } from "react";

import images from "../../../assets/images/images";
import "../../../sass/Header.scss";
import { StoreContext } from "../../../store";

// list category pages :
const categoryPages = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Movies",
    to: "/movie",
  },
  {
    title: "TvSeries",
    to: "/tv",
  },
];

const Header = () => {
  // get value from StoreContext :
  const { fixedHeader } = useContext(StoreContext);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100]">
      <div
        className={`w-full flex items-center justify-between px-[32px] transition-all duration-150 ${
          fixedHeader ? "bg-black h-[80px]" : "bg-transparent h-[128px]"
        }`}
      >
        <div className="flex items-center">
          <img
            src={images.logo}
            alt="logo"
            className="w-[50px] h-[50px] object-cover"
          />
          <h1 className="text-white font-semibold text-[32px] lg:text-[40px] tracking-wide ml-[10px]">
            DevMovies
          </h1>
        </div>

        <div>
          {categoryPages.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "btn-menu text-[#ff0000] active category-btn"
                    : "btn-menu text-white category-btn"
                }
              >
                {item.title}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
