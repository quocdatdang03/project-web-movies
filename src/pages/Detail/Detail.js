// library :
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import theMovieApi from "../../api/theMovieApi";
import apiConfig from "../../api/apiConfig";

const Detail = () => {
  const { category, id } = useParams();

  // get data from API :
  useEffect(() => {
    const getMovieDetail = async () => {
      try {
        const params = { api_key: apiConfig.apiKey };
        const response = await theMovieApi.getDetail(category, id, { params });
        console.log(response);
      } catch (error) {}
    };

    getMovieDetail();
  }, [id, category]);
  return <h1>This is Detail pages</h1>;
};

export default Detail;
