import axiosClient from "./axiosClient";

export const category = {
  tv: "tv",
  movie: "movie",
};

export const movieType = {
  popular: "popular",
  upcoming: "upcoming",
  top_rated: "top_rated",
};

export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};

const theMovieApi = {
  getMoviesList: (type, params) => {
    const url = "movie/" + movieType[type];
    return axiosClient.get(url, params);
  },
  getTvList: (type, params) => {
    const url = "tv/" + movieType[type];
    return axiosClient.get(url, params);
  },
  getDetail: (cate, id, params) => {
    const url = category[cate] + "/" + id;
    return axiosClient.get(url, params);
  },
  // get Casts:
  getCredits: (cate, id, params) => {
    const url = category[cate] + "/" + id + "/credits";
    return axiosClient.get(url, params);
  },
  // get videos :
  getVideos: (cate, id, params) => {
    const url = category[cate] + "/" + id + "/videos";
    return axiosClient.get(url, params);
  },
  // get similar :
  getSimilar: (cate, id, params) => {
    const url = category[cate] + "/" + id + "/similar";
    return axiosClient.get(url, params);
  },
};
export default theMovieApi;
