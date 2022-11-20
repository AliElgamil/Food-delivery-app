import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { sortFoods } from "../../../../store/allFood";

const text = {
  options: {
    opt1: "Default",
    opt2: "Alphabetically, A-Z",
    opt3: "Alphabetically, Z-A",
    opt4: "High Price",
    opt5: "Low Price",
  },
  optionsAr: {
    opt1: "الافتراضي",
    opt2: "ترتيب من A-z",
    opt3: "ترتيب من, Z-A",
    opt4: "اعلي سعر",
    opt5: "اقل سعر",
  },
};
export default function Sort() {
  const dispatch = useDispatch();
  const selectRef = useRef();
  const { lang } = useSelector((state) => state.lang);
  const sortFoodsHandler = () => {
    dispatch(sortFoods(selectRef.current.value));
  };
  return (
    <div
      className={`sort_widget ms-auto ${
        lang === "en" ? "text-end" : "text-start"
      } `}
    >
      <select onChange={sortFoodsHandler} ref={selectRef}>
        <option value="default">
          {lang === "en" ? text.options.opt1 : text.optionsAr.opt1}
        </option>
        <option value="ascending">
          {lang === "en" ? text.options.opt2 : text.optionsAr.opt2}
        </option>
        <option value="descending">
          {lang === "en" ? text.options.opt3 : text.optionsAr.opt3}
        </option>
        <option value="high-price">
          {lang === "en" ? text.options.opt4 : text.optionsAr.opt4}
        </option>
        <option value="low-price">
          {lang === "en" ? text.options.opt5 : text.optionsAr.opt5}
        </option>
      </select>
    </div>
  );
}
