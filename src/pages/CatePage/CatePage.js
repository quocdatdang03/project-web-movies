import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import apiConfig from "../../api/apiConfig";
import theMovieApi, { movieType, tvType } from "../../api/theMovieApi";
import images from "../../assets/images/images";
import Button from "../../components/Button/Button";
import SlideContainerItem from "../../components/SliderContainerItem/SliderContainerItem";
import SpinnerLoader from "../../components/SpinnerLoader";
import "../../sass/Movies.scss";

const CatePage = () => {
  const [list, setList] = useState([]);
  const [loadMorePage, setLoadMorePage] = useState(1);
  const [loading, setLoading] = useState(true);

  const { category } = useParams();
  // get api :
  useEffect(() => {
    const getList = async () => {
      setLoading(true);
      const params = { api_key: apiConfig.apiKey };
      let response;
      switch (category) {
        case "movie":
          response = await theMovieApi.getMoviesList(movieType["upcoming"], {
            params,
          });
          break;
        case "tv":
          response = await theMovieApi.getTvList(tvType["popular"], {
            params,
          });
          break;
        default:
          return;
      }

      // const datas = [...list, ...response.results]; // giải mảng cũ và mảng mới load từ api vào biến datas
      const datas = response.results;
      setList(datas);
      setLoading(false);
    };

    getList();
  }, [category]);

  console.log(list);

  // handle load more :
  const handleSetLoadMore = async () => {
    try {
      setLoadMorePage((prev) => prev + 1);
      setLoading(true);
      const params = { page: loadMorePage, api_key: apiConfig.apiKey };
      let response;
      if (category === "movie") {
        response = await theMovieApi.getMoviesList(movieType["upcoming"], {
          params,
        });
      } else if (category === "tv") {
        response = await theMovieApi.getTvList(tvType["popular"], { params });
      }
      console.log(response);
      setList([...list, ...response.results]);
      setLoading(false);
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  return (
    <div>
      <div
        className="w-full h-[50vh] bg-cover bg-center movie-banner flex items-center justify-center"
        style={{ backgroundImage: `url(${images.footerBg})` }}
      >
        <h1 className="text-[24px] text-white font-bold">
          {category === "movie" ? "Movies" : "TV Series"}
        </h1>
      </div>
      <div className="px-[32px]">
        {/* Start Search */}
        <div className="px-[32px] mb-[48px]">
          <div className="max-w-[500px] flex items-center rounded-[9999px] py-[4px] pl-[24px] bg-[#000000] relative">
            <input
              className="w-full bg-transparent outline-none text-white mr-[5px]"
              type="text"
              placeholder="Enter keyword"
            />
            <Button type="primary" text="Search" size="small" />
          </div>
        </div>
        {/* End Search */}
        {/* start movie list */}
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-6 gap-[10px]">
          {list?.map((item, index) => {
            return (
              <li key={index}>
                <SlideContainerItem
                  key={index}
                  id={item.id}
                  img={item.poster_path}
                  title={item.title}
                  name={item.name}
                  cate={category}
                  list
                />
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center mt-[30px]">
          {loading ? (
            <SpinnerLoader />
          ) : (
            <Button
              type="outline"
              size="small"
              text="Load more"
              onClick={handleSetLoadMore}
            />
          )}
        </div>
        {/* End movie list */}
      </div>
    </div>
  );
};

export default CatePage;
