import { useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import apiConfig from "../../api/apiConfig";
import theMovieApi, { movieType, tvType } from "../../api/theMovieApi";
import images from "../../assets/images/images";
import Button from "../../components/Button/Button";
import MovieSearch from "../../components/MovieSearch";
import SlideContainerItem from "../../components/SliderContainerItem/SliderContainerItem";
import SpinnerLoader from "../../components/SpinnerLoader";
import "../../sass/Movies.scss";

const CatePage = () => {
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [loadMorePage, setLoadMorePage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [showBoxFilter, setShowBoxFilter] = useState(false);

  const { category, keyword } = useParams();
  // get api :
  useEffect(() => {
    const getList = async () => {
      setLoading(true);
      let response = null;
      if (keyword === undefined) {
        const params = { api_key: apiConfig.apiKey };
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
      } else {
        const params = { api_key: apiConfig.apiKey, query: keyword };
        response = await theMovieApi.searchKeyword(category, { params });
        console.log(response);
      }

      // const datas = [...list, ...response.results]; // giải mảng cũ và mảng mới load từ api vào biến datas
      const datas = response.results;
      setList(datas);
      setLoading(false);

      // get total pages :
      setTotalPage(response.total_pages);
    };

    getList();
  }, [category, keyword]);

  console.log(list);

  // handle load more :
  const handleSetLoadMore = async () => {
    try {
      setLoadMorePage((prev) => prev + 1);
      setLoading(true);
      let response = null;
      if (keyword === undefined) {
        const params = {
          page: loadMorePage,
          api_key: apiConfig.apiKey,
        };
        if (category === "movie") {
          response = await theMovieApi.getMoviesList(movieType["upcoming"], {
            params,
          });
        } else if (category === "tv") {
          response = await theMovieApi.getTvList(tvType["popular"], { params });
        }
      } else {
        const params = {
          page: loadMorePage,
          api_key: apiConfig.apiKey,
          query: keyword,
        };
        response = await theMovieApi.searchKeyword(category, { params });
      }
      console.log(response);
      setList([...list, ...response.results]);
      setLoading(false);
      setCurrentPage(response.page);
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  const filterCategories = [
    {
      name: "animation",
    },
    {
      name: "horror",
    },
    {
      name: "family",
    },
    {
      name: "comedy",
    },
    {
      name: "romance",
    },
    {
      name: "mystery",
    },
    {
      name: "crime",
    },
    {
      name: "documentary",
    },
    {
      name: "history",
    },
    {
      name: "war",
    },
    {
      name: "thriller",
    },
  ];

  return (
    <div className="">
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
        <MovieSearch category={category} />
        {/* End Search */}
        {/* Start Filter */}
        <div>
          <div className=" relative">
            <button
              className="text-white flex items-center font-semibold"
              onClick={() => setShowBoxFilter(!showBoxFilter)}
            >
              <h2 className="text-[20px] pr-[5px]">Filter</h2>
              <AiOutlineDown
                className={`${
                  showBoxFilter ? "rotate-180" : "rotate-0"
                } transition-all duration-200`}
              />
            </button>
            <div
              className={`bg-slate-400 absolute top-[110%] z-[100] ${
                showBoxFilter
                  ? "translate-y-[0] opacity-1 visible"
                  : "translate-y-[100px] opacity-0 invisible"
              } transition-all duration-300`}
            >
              {filterCategories?.map((item, index) => {
                return (
                  <div className="text-white" key={index}>
                    <label
                      className="first-letter:uppercase"
                      htmlFor={item.name}
                    >
                      {item.name}
                    </label>
                    <input
                      key={index}
                      id={item.name}
                      type="checkbox"
                      value={item.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* End Filter */}
        {/* start movie list */}
        <ul
          className={`${
            list.length > 0
              ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-6 gap-[10px]"
              : "flex"
          }`}
        >
          {list.length > 0
            ? list?.map((item, index) => {
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
                      isActive={false}
                    />
                  </li>
                );
              })
            : !loading && (
                <h1 className="text-white font-bold text-[30px] w-full text-center">
                  Sorry but nothing matched with search items
                </h1>
              )}
        </ul>
        {/* Nếu mà còn page thì cho hiển thị button Load more */}
        {currentPage < totalPage && (
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
        )}
        {/* End movie list */}
      </div>
    </div>
  );
};

export default CatePage;
