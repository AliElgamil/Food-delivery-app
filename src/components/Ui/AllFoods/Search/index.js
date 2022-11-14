import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetSearch, searchFoods } from "../../../../store/allFood";

export default function Search({ setPageNumber }) {
  const dispatch = useDispatch();
  const searchRef = useRef(null);
  const { lang } = useSelector((state) => state.lang);
  const searchHandler = () => {
    setPageNumber(1);
    if (!searchRef.current.value) dispatch(resetSearch());
    else dispatch(searchFoods(searchRef.current.value));
  };
  return (
    <div className="search_widget gap-4 rounded-3">
      <input
        type="text"
        placeholder={
          lang === "en" ? "I'm looking for......" : "انا ابحث عن......."
        }
        ref={searchRef}
        onChange={searchHandler}
      />
      <span>
        <i className="ri-search-line"></i>
      </span>
    </div>
  );
}
