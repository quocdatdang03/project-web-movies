// library :
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import theMovieApi from "../../api/theMovieApi";
import apiConfig from "../../api/apiConfig";
import CastList from "../../components/CastList";
import VideoList from "../../components/VideoList/VideoList";
import SliderContainer from "../../components/SliderContainer/SliderContainer";

const Detail = () => {
  const [details, setDetails] = useState({});
  const { category, id } = useParams();

  console.log(category);
  // get data from API :
  useEffect(() => {
    const getMovieDetail = async () => {
      try {
        const params = { api_key: apiConfig.apiKey };
        const response = await theMovieApi.getDetail(category, id, { params });
        setDetails(response);
      } catch (error) {
        console.log("Error: " + error);
      }
    };

    getMovieDetail();
  }, [id, category]);

  return (
    <div className="w-full h-full">
      <div
        className="w-full h-[50vh] bg-cover bg-center bg-no-repeat slider-banner"
        style={{
          backgroundImage: `url('${apiConfig.originalImages(
            details.backdrop_path
          )}')`,
        }}
      ></div>
      <div className="flex justify-center">
        <div className="max-w-[1260px] mt-[-200px] grid grid-cols-1 md:grid-cols-3 gap-[32px] z-[10] px-[32px]">
          <div className="col-span-1">
            <img
              className="w-full rounded-[30px] hidden md:flex"
              src={apiConfig.w500Image(details.poster_path)}
              alt={details.title || details.name}
            />
          </div>
          <div className="col-span-2">
            <h1 className="text-[38px] md:text-[64px] font-bold text-white">
              {details.title || details.name}
            </h1>
            <div className="flex items-center mb-[32px]">
              {/* ?. (Optional Chaining) tức là phải có key genres mới render ra mảng */}
              {details.genres?.map((item, index) => {
                return (
                  <p
                    key={item.id}
                    className="text-[10px] md:text-[12px] py-[6px] md:py-[8px] px-[20px] md:px-[24px] font-semibold border-[3px] border-white  rounded-[9999px] text-white mx-[4px]"
                  >
                    {item.name}
                  </p>
                );
              })}
            </div>
            <p className="text-white text-[12px] md:text-[16px] ">
              {details.overview}
            </p>
            <h2 className="text-white font-bold text-[24px] mt-[30px]">
              Casts
            </h2>
            {/* Start CastList */}
            <CastList id={id} category={category} />
            {/* End CastList */}
          </div>
        </div>
      </div>
      {/* Start VideoList */}
      <VideoList id={id} category={category} />
      {/* End VideoList */}

      {/* Start similar video */}
      <div className="mt-[50px]">
        <SliderContainer
          id={id}
          type="similar"
          cate={category}
          title="similar"
        />
      </div>
      {/* End similar video */}
    </div>
  );
};

export default Detail;
