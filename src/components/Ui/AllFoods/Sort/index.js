import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { sortFoods } from "../../../../store/allFood";

export default function Sort() {
  const dispatch = useDispatch();
  const selectRef = useRef();
  const sortFoodsHandler = () => {
    console.log(selectRef.current.value);
    dispatch(sortFoods(selectRef.current.value));
  };
  return (
    <div className="sort_widget ms-auto text-end ">
      <select onChange={sortFoodsHandler} ref={selectRef}>
        <option value="default">Default</option>
        <option value="ascending">Alphabetically, A-Z</option>
        <option value="descending">Alphabetically, Z-A</option>
        <option value="high-price">High Price</option>
        <option value="low-price">Low Price</option>
      </select>
    </div>
  );
}
