import apiConfig from "../../api/apiConfig";
import Button from "../Button/Button";
import "../../sass/SliderBanner.scss";

const SliderBannerItem = ({ item }) => {
  const background = apiConfig.originalImages(item.backdrop_path);
  return (
    <div
      key={item.id}
      className={`w-full h-[500px] lg:h-screen cursor-grab bg-no-repeat bg-cover bg-center flex items-center justify-center text-white slider-banner`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex items-center justify-center pt-[20px] lg:pt-[144px]">
        <div className="px-[48px] flex-1 z-[10]">
          <h1 className="text-[38px] sm:text-[51px] lg:text-[80px] font-bold lg:leading-[80px]">
            {item.original_title}
          </h1>
          <p className="font-semibold text-[10px] sm:text-[12px] lg:text-[16px] mt-[28px] sm:mt-[38px] lg:mt-[48px]">
            {item.overview}
          </p>
          <div className="flex mt-[48px]">
            <Button type="primary" text="Watch Now" id={item.id} />
            <Button type="outline" text="Watch Trailer" />
          </div>
        </div>
        <div className="flex-1 z-[10] hidden lg:block">
          <img
            className="w-[400px] rounded-[30px] shadow-img-shadow"
            src={apiConfig.w500Image(item.poster_path)}
            alt={item.title}
          />
        </div>
      </div>
    </div>
  );
};

export default SliderBannerItem;
