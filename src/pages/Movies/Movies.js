import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import apiConfig from "../../api/apiConfig";
import theMovieApi, { movieType } from "../../api/theMovieApi";
import images from "../../assets/images/images";
import Button from "../../components/Button/Button";
import SlideContainerItem from "../../components/SliderContainerItem/SliderContainerItem";
import SpinnerLoader from "../../components/SpinnerLoader";
import "../../sass/Movies.scss";

const Movies = () => {
  const [list, setList] = useState([]);
  const [loadMorePage, setLoadMorePage] = useState(1);
  const [loading, setLoading] = useState(true);

  console.log(loadMorePage);
  const { category } = useParams();
  // get api :
  useEffect(() => {
    const getList = async () => {
      setLoading(true);
      const params = { page: loadMorePage, api_key: apiConfig.apiKey };
      const response = await theMovieApi.getMoviesList(movieType["upcoming"], {
        params,
      });

      const datas = [...list, ...response.results]; // giải mảng cũ và mảng mới load từ api vào biến datas
      setList(datas);
      setLoading(false);
    };

    getList();
  }, [loadMorePage]);

  return (
    <div>
      <div
        className="w-full h-[50vh] bg-cover bg-center movie-banner flex items-center justify-center"
        style={{ backgroundImage: `url(${images.footerBg})` }}
      >
        <h1 className="text-[24px] text-white font-bold">Movies</h1>
      </div>
      {/* start movie list */}
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-6 gap-[10px] px-[32px]">
        {list?.map((item, index) => {
          return (
            <li>
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
            onClick={() => setLoadMorePage((prev) => prev + 1)}
          />
        )}
      </div>
      {/* End movie list */}
    </div>
  );
};

export default Movies;
