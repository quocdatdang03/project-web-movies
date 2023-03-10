import { useEffect, useRef, useState } from "react";

import apiConfig from "../../api/apiConfig";
import theMovieApi from "../../api/theMovieApi";

const VideoList = ({ category, id }) => {
  const [videoList, setVideoList] = useState([]);

  // get video api :
  useEffect(() => {
    const getVideoApi = async () => {
      try {
        const params = { api_key: apiConfig.apiKey };
        const response = await theMovieApi.getVideos(category, id, { params });
        console.log(response);
        const datas = response.results.slice(0, 5); // get max 5 items
        setVideoList(datas);
      } catch (error) {
        console.log("Error: " + error);
      }
    };
    getVideoApi();
  }, [category, id]);

  console.log(videoList);
  return (
    <ul className="self-start px-[32px] w-full mt-[50px]">
      {videoList?.map((item, index) => {
        return (
          <VideoItem
            key={index}
            id={item.id}
            keyVideo={item.key}
            name={item.name}
          />
        );
      })}
    </ul>
  );
};

const VideoItem = ({ id, name, keyVideo }) => {
  const [heightVideo, setHeightVideo] = useState();
  const videoRef = useRef();
  useEffect(() => {
    // hoisting vs Declaration function :
    handleResize();
    function handleResize() {
      // offsetWidth : Lấy ra chiều rộng hiện tại của  videoRef
      const height = (videoRef.current.offsetWidth * 9) / 16 + "px";
      videoRef.current.setAttribute("height", height);
      setHeightVideo(height);
    }
    window.addEventListener("resize", handleResize);

    // clean up function :
    return () => window.removeEventListener("resize", handleResize);
  }, [heightVideo]);
  return (
    <li key={id} className="mt-[50px]">
      <h1 className="text-[24px] font-bold text-white mb-[20px]">{name}</h1>
      <iframe
        src={`https://www.youtube.com/embed/${keyVideo}`}
        width="100%"
        height={heightVideo}
        title="video"
        ref={videoRef}
      ></iframe>
    </li>
  );
};

export default VideoList;
