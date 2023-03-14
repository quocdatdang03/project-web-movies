import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Button from "../Button/Button";
import { seacrhKeyword } from "./MovieSearchSlice";

const MovieSearch = ({ category }) => {
  const navigate = useNavigate();
  // handle from redux :
  const dispatch = useDispatch();
  // value from redux :
  const searchKeyword = useSelector((state) => state.search.keyword);
  // handle set keyword :
  const handleGoToSearch = () => {
    if (searchKeyword !== "") {
      navigate(`/search/${category}/${searchKeyword}`);
    }
    dispatch(seacrhKeyword(""));
  };

  const handleSearchOnPressEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleGoToSearch();
    }
  };

  return (
    <div className="px-[32px] mb-[48px]">
      <div className="max-w-[500px] flex items-center rounded-[9999px] py-[4px] pl-[24px] bg-[#000000] relative">
        <input
          className="w-full bg-transparent outline-none text-white mr-[5px]"
          onChange={(e) => dispatch(seacrhKeyword(e.target.value))}
          onKeyPress={(e) => handleSearchOnPressEnter(e)}
          value={searchKeyword}
          type="text"
          placeholder="Enter keyword"
        />
        <Button
          type="primary"
          text="Search"
          size="small"
          onClick={handleGoToSearch}
        />
      </div>
    </div>
  );
};

export default MovieSearch;
