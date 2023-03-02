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
      <SliderContainer
        title="Trending Movies"
        type="popular"
        category="movie"
      />

      <SliderContainer
        title="Top Rated Movies"
        type="top_rated"
        category="movie"
      />

      <SliderContainer title="Trending TV" type="popular" category="tv" />

      <SliderContainer title="Top Rated TV" type="top_rated" category="tv" />

      {/* End Container */}
    </div>
  );
};

export default Home;
