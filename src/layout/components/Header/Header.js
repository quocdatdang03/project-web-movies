import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import images from "../../../assets/images/images";
import "../../../sass/Header.scss";
import { StoreContext } from "../../../store";
import Context from "../../../store/Context";

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
  {
    title: "Favorite",
    to: "/favorite",
  },
];

const Header = () => {
  // get value from StoreContext :
  const { fixedHeader } = useContext(StoreContext);

  const { setShowOverlay, showCategory, setShowCategory } = useContext(Context);
  // handle show category on mobile :
  const handleShowCategory = () => {
    setShowCategory(true);
    setShowOverlay(true);
  };

  return (
    <>
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
              className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] object-cover"
            />
            <h1 className="text-white font-semibold text-[20px] md:text-[32px] lg:text-[40px] tracking-wide ml-[10px]">
              DevMovies
            </h1>
          </div>

          <button className="flex sm:hidden" onClick={handleShowCategory}>
            <HiOutlineMenuAlt3 className="text-white text-[30px]" />
          </button>

          <div className="hidden sm:flex">
            {categoryPages.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  to={item.to}
                  end // props end của NavLink nó sẽ chỉ định active matching hoàn toàn vs cái url của to, vd ta to="/movie" mà khi ấn vào page detail có path là "/movie/123" thì nếu không có props end nó vẫn matching và active cái NavLink đó lên ==> không hợp lý
                  // Vì thế thêm props end để NavLink chỉ active khi url trong to khớp hoàn toàn vs 1 path nào đó
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
      <div
        className={`fixed right-0 bottom-0 top-0 bg-[rgba(0,0,0,0.9)] flex flex-col pt-[30px] min-w-[calc(100vw/1.5)] shadow-category-shadow z-[200] ${
          showCategory ? "translate-x-0" : "translate-x-[150%]"
        } transition-all duration-300`}
      >
        {categoryPages.map((item, index) => {
          return (
            <NavLink
              key={index}
              to={item.to}
              end // props end của NavLink nó sẽ chỉ định active matching hoàn toàn vs cái url của to, vd ta to="/movie" mà khi ấn vào page detail có path là "/movie/123" thì nếu không có props end nó vẫn matching và active cái NavLink đó lên ==> không hợp lý
              // Vì thế thêm props end để NavLink chỉ active khi url trong to khớp hoàn toàn vs 1 path nào đó
              className={({ isActive }) =>
                isActive
                  ? "btn-menu text-[#ff0000] active category-btn pt-[20px] pb-[10px] mb-[10px]"
                  : "btn-menu text-white category-btn py-[20px] pb-[10px] mb-[10px]"
              }
            >
              {item.title}
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default Header;
