import { BiPlay } from "react-icons/bi";
import { useNavigate } from "react-router";

import Button from "../Button/Button";
import apiConfig from "../../api/apiConfig";

const SlideContainerItem = ({ id, img, title, name, cate, list }) => {
  const navigate = useNavigate();
  const handleViewDetail = (id) => {
    navigate(`/${cate}/${id}`);
  };
  return (
    <div className={`pr-[10px] ${!list && "cursor-grab"} group`} key={id}>
      <div className="slider-container-img overflow-hidden">
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
      <h2 className="text-[11px] sm:text-[15px] lg:text-[19px] text-white font-bold group-hover:text-[#ff0000] transition-colors duration-300 mt-[12px]">
        {title || name}
      </h2>
    </div>
  );
};

export default SlideContainerItem;
