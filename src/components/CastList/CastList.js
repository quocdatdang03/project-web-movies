import { useEffect, useState } from "react";

import apiConfig from "../../api/apiConfig";
import theMovieApi from "../../api/theMovieApi";

const CastList = ({ id, category }) => {
  const [castList, setCastList] = useState([]);
  // get api castList :
  useEffect(() => {
    const getCastList = async () => {
      const params = { api_key: apiConfig.apiKey };
      const response = await theMovieApi.getCredits(category, id, { params });

      const castDatas = response.cast.slice(0, 5);
      setCastList(castDatas);
    };

    getCastList();
  }, [id, category]);

  console.log(castList);
  return (
    <ul className="w-full grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-[10px] mt-[20px]">
      {castList?.map((item, index) => {
        return (
          <li key={item.cast_id} className="col-span-1">
            <img
              className="mb-[8px]"
              src={apiConfig.w500Image(item.profile_path)}
              alt={item.original_name}
            />
            <p className="text-[12px] text-white">{item.original_name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default CastList;
