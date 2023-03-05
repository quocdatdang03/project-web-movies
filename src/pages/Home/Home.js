// library :

import SliderBanner from "../../components/SliderBanner";
import SliderContainer from "../../components/SliderContainer/SliderContainer";
import "../../sass/SliderContainer.scss";

const Home = () => {
  return (
    <div className="">
      {/* Start Slider */}
      <SliderBanner />
      {/* End Slider */}
      {/* Start Container */}
      <SliderContainer title="Trending Movies" type="popular" cate="movie" />

      <SliderContainer title="Top Rated Movies" type="top_rated" cate="movie" />

      <SliderContainer title="Trending TV" type="popular" cate="tv" />

      <SliderContainer title="Top Rated TV" type="top_rated" cate="tv" />

      {/* End Container */}
    </div>
  );
};

export default Home;
