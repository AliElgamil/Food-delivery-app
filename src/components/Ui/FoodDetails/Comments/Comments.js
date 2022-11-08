import React from "react";
import ImageLoading from "../../../ImageLoading";

export default function Comments({ comments }) {
  return (
    <div className="comment">
      <div className="info d-flex gap-3 align-items-center">
        <ImageLoading
          src={"/images/avatar.png"}
          alt={"user"}
          addClass={"customer_img"}
        />
        <div>
          <h6 className="customer_name">{comments.name}</h6>
          <time>{comments.date}</time>
        </div>
      </div>
      <div className="comment_content mt-3">
        <p>{comments.content}</p>
      </div>
    </div>
  );
}
