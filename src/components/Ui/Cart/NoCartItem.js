import React from "react";
import { useSelector } from "react-redux";

export default function NoCartItem() {
  const { lang } = useSelector((state) => state.lang);
  return (
    <div className="no_cart-item text-center h-100 d-flex flex-column justify-content-center align-items-center">
      <lottie-player
        src="https://assets9.lottiefiles.com/packages/lf20_vkqybeu5/data.json"
        background="transparent"
        speed="1"
        style={{ width: "300px", height: "300px" }}
        loop
        autoplay
      ></lottie-player>
      <p>
        {" "}
        {lang === "en"
          ? "Time to eat order Now!🍕"
          : "انه وقت طلب الطعام اطلب الان🍕"}
      </p>
    </div>
  );
}
