// library :
import { useEffect, useState } from "react";
import { BiPlay } from "react-icons/bi";
import { useNavigate } from "react-router";
import Slider from "react-slick";

import apiConfig from "../../api/apiConfig";
import theMovieApi, { movieType, tvType } from "../../api/theMovieApi";
import Button from "../Button/Button";
import SpinnerLoader from "../SpinnerLoader";
import "../../sass/SliderContainer.scss";
import SlideContainerItem from "../SliderContainerItem/SliderContainerItem";

const SliderContainer = ({ title, cate, type, id }) => {
  const [categoryType, setCategoryType] = useState([]);
  const [loading, setLoading] = useState(true);
  // get APi :
  useEffect(() => {
    const getMoviesType = async () => {
      try {
        let response;
        const params = { page: 1, api_key: apiConfig.apiKey };
        setLoading(true);
        if (type === "similar") {
          const params = { api_key: apiConfig.apiKey };
          response = await theMovieApi.getSimilar(cate, id, { params });
        } else {
          if (cate === "movie") {
            response = await theMovieApi.getMoviesList(movieType[type], {
              params,
            });
          } else if (cate === "tv") {
            response = await theMovieApi.getTvList(tvType[type], {
              params,
            });
          }
        }
        console.log(response.results);
        setCategoryType(response.results);
        // console.log(response);
        setLoading(false);
      } catch (error) {
        console.log("Error: " + error);
      }
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

  return (
    <div className="px-[32px]">
      <div className="mb-[32px] flex items-center justify-between">
        {categoryType.length > 0 && (
          <h1 className="text-white text-[24px] font-bold ">{title}</h1>
        )}
        {type !== "similar" && (
          <Button
            type="outline"
            text="View more"
            size="small"
            onClick={() => navigate(`/${cate}`)}
          />
        )}
      </div>
      {loading ? (
        // <h1 className="text-[50px] font-bold text-red-900">Loading...</h1>
        <div className="flex items-center justify-center">
          <SpinnerLoader />
        </div>
      ) : (
        <Slider {...settings}>
          {categoryType.map((item, index) => {
            return (
              <SlideContainerItem
                key={index}
                id={item.id}
                img={item.poster_path}
                title={item.title}
                name={item.name}
                cate={cate}
                isActive={false}
              />
            );
          })}
        </Slider>
      )}
    </div>
  );
};

export default SliderContainer;
