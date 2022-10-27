import React from "react";

export default function NoCartItem() {
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
      <p>Time to eat order Now!🍕</p>
    </div>
  );
}
