import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { updateData } from "../../../../store/allFood";
export default function Form({ item }) {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    const option = {
      className: "toast_error",
    };
    if (inputValue !== "")
      dispatch(
        updateData({
          item,
          content: inputValue,
        })
      );
    else toast.error("Please write your review", option);
  };
  return (
    <>
      <div>
        <form className="form_reviews" onSubmit={formSubmitHandler}>
          <textarea
            placeholder="Enter your review..."
            className="form_review_text"
            rows={5}
            ref={inputRef}
          ></textarea>
          <button className="btn btn_review">
            <span>
              <i className="ri-send-plane-fill"></i>
            </span>
          </button>
        </form>
      </div>
    </>
  );
}
