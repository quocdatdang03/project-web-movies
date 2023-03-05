import { useNavigate } from "react-router-dom";

const Button = ({ type, text, id, customClass, size, onClick }) => {
  const navigate = useNavigate();

  const handleNavigateToDetail = () => {
    navigate(`/movie/${id}`);
  };
  return (
    <>
      {type === "primary" ? (
        <button
          className={`btn-slider bg-[#ff0000] shadow-btn-shadow hover:shadow-btn-shadow-hover ${
            customClass &&
            "absolute top-[50%] left-[50%] z-[10] slider-container-btn"
          }`}
          onClick={onClick ? onClick : handleNavigateToDetail}
        >
          {text}
        </button>
      ) : (
        <button
          className={`${
            size === "small"
              ? "font-semibold px-[24px] py-[4px] text-white rounded-[9999px] transition-all duration-300"
              : "btn-slider"
          } bg-transparent border-[3px] border-white hover:text-[#ff0000]  hover:bg-white ml-[20px]`}
          onClick={onClick}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
