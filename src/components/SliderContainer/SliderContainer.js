// library :
import { useEffect, useState } from "react";
import { BiPlay } from "react-icons/bi";
import { useNavigate } from "react-router";
import Slider from "react-slick";

import apiConfig from "../../api/apiConfig";
import theMovieApi, { movieType, tvType } from "../../api/theMovieApi";
import Button from "../Button/Button";

const SliderContainer = ({ title, category, type }) => {
  const [categoryType, setCategoryType] = useState([]);
  // get APi :
  useEffect(() => {
    const getMoviesType = async () => {
      let response;
      const params = { page: 1, api_key: apiConfig.apiKey };
      if (category === "movie") {
        response = await theMovieApi.getMoviesList(movieType[type], {
          params,
        });
      } else if (category === "tv") {
        response = await theMovieApi.getTvList(tvType[type], {
          params,
        });
      }
      // console.log(response.results);
      setCategoryType(response.results);
    };
    getMoviesType();
  }, []);

  // Hanlde slider :
  const settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 6.3,
    arrows: false,
    // slidesToScroll: 1,
    // swipToSlide : kéo đến đâu thì dừng đến đó
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.3,
        },
      },
    ],
  };

  const navigate = useNavigate();
  const handleViewMore = (id) => {
    navigate(`/${category}/${id}`);
  };

  return (
    <div className="px-[32px]">
      <div className="mb-[32px] flex items-center justify-between">
        <h1 className="text-white text-[24px] font-bold ">{title}</h1>
        <Button
          type="outline"
          text="View more"
          size="small"
          onClick={() => handleViewMore()}
        />
      </div>
      <Slider {...settings}>
        {categoryType.map((item, index) => {
          return (
            <div className="pr-[10px] cursor-grab group" key={item.id}>
              <div className="slider-container-img overflow-hidden">
                <img
                  className="w-full h-full rounded-[30px] shadow-img-shadow"
                  src={apiConfig.originalImages(item.poster_path)}
                  alt={item.title || item.name}
                />
                <Button
                  customClass
                  type="primary"
                  text={<BiPlay color="white" />}
                  onClick={() => handleViewMore(item.id)}
                />
              </div>
              <h2 className="text-[11px] sm:text-[15px] lg:text-[19px] text-white font-bold group-hover:text-[#ff0000] transition-colors duration-300 mt-[12px]">
                {item.title || item.name}
              </h2>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderContainer;
