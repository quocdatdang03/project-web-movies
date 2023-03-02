// library :
import { useEffect, useState } from "react";
import Slider from "react-slick";
import apiConfig from "../../api/apiConfig";

import theMovieApi, { movieType } from "../../api/theMovieApi";
import SliderBannerItem from "../SliderBannerItem/SliderBannerItem";

const SliderBanner = () => {
  const [moviesSlider, setMoviesSlider] = useState([]);
  // get api :
  useEffect(() => {
    const getMovies = async () => {
      try {
        const params = { page: 1, api_key: apiConfig.apiKey };
        const response = await theMovieApi.getMoviesList(movieType.popular, {
          params,
        });

        // Lấy ra 5 movies để hiển thị lên Slider :
        const datas = response.results.slice(0, 5);
        setMoviesSlider(datas);
      } catch (error) {
        console.log("Error: " + error);
      }
    };
    getMovies();
  }, []);

  // Hanlde slider :
  const settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log(moviesSlider);

  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {moviesSlider.map((item, index) => {
          return <SliderBannerItem item={item} key={item.id} />;
        })}
      </Slider>
    </div>
  );
};

export default SliderBanner;
