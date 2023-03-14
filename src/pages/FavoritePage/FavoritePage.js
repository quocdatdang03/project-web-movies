import { useSelector } from "react-redux";
import images from "../../assets/images/images";
import SlideContainerItem from "../../components/SliderContainerItem/SliderContainerItem";

const FavoritePage = () => {
  const favoriteFilms = useSelector((state) => state.favorite);
  return (
    <div>
      <div
        className="w-full h-[50vh] bg-cover bg-center movie-banner flex items-center justify-center"
        style={{ backgroundImage: `url(${images.footerBg})` }}
      >
        <h1 className="text-[24px] text-white font-bold">Favorite films</h1>
      </div>
      <div
        className={`${
          favoriteFilms.length > 0
            ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-6 gap-[10px]"
            : "flex justify-center"
        } px-[32px]`}
      >
        {favoriteFilms.length > 0 ? (
          favoriteFilms?.map((item, index) => {
            return (
              <SlideContainerItem
                key={item.id}
                id={item.id}
                img={item.img}
                name={item.name}
                title={item.title}
                cate={item.cate}
                isActive={item.isActive}
              />
            );
          })
        ) : (
          <h1 className="text-white font-bold text-[30px]">
            You don't have any Favorite Films
          </h1>
        )}
      </div>
    </div>
  );
};

export default FavoritePage;
