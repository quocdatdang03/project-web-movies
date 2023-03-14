import { AiFillHeart } from "react-icons/ai";
import { BiPlay } from "react-icons/bi";
import { RiHeartAddFill } from "react-icons/ri";
import { useNavigate } from "react-router";

import { useDispatch } from "react-redux";
import apiConfig from "../../api/apiConfig";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../pages/FavoritePage/favoriteSlice";
import Button from "../Button/Button";
import "../../sass/SliderContainerItem.scss";

const SlideContainerItem = ({ id, img, title, name, cate, list, isActive }) => {
  const navigate = useNavigate();
  const handleViewDetail = (id) => {
    navigate(`/${cate}/${id}`);
  };

  const dispatch = useDispatch();

  // handle add favorite film :
  const handleAddFavorite = () => {
    // use syntax ES6 : Enhanced Object Literals :
    dispatch(addToFavorite({ id, img, title, name, cate, isActive: true }));
  };

  // handle remove favorite :
  const handleRemoveFavorite = () => {
    dispatch(removeFromFavorite(id));
    console.log("clicked");
  };
  return (
    <div className={`pr-[10px] ${!list && "cursor-grab"} group`} key={id}>
      <div className="slider-container-img overflow-hidden mb-[12px]">
        <img
          className="w-full h-full rounded-[30px] shadow-img-shadow"
          src={apiConfig.originalImages(img)}
          alt={title || name}
        />
        <Button
          customClass
          type="primary"
          text={<BiPlay color="white" />}
          onClick={() => handleViewDetail(id)}
        />
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-[11px] sm:text-[15px] lg:text-[19px] text-white font-bold group-hover:text-[#ff0000] transition-colors duration-300 film-title min-h-[57px]">
          {title || name}
        </h2>
        {isActive ? (
          <button onClick={handleRemoveFavorite}>
            <AiFillHeart className="text-[#ff0000] text-[30px]" />
          </button>
        ) : (
          <button onClick={handleAddFavorite}>
            <RiHeartAddFill className="text-white text-[30px] hover:text-[#ff0000] transition-colors duration-200" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SlideContainerItem;
