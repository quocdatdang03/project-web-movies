const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "4a0f2e44b848004ba723e93b676431af",
  // Lấy ra image theo docs của themovie API :
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
  original: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
};

export default apiConfig;
