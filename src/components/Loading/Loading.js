import React from "react";
import { useEffect, useState } from "react";
import "./style.css";
export default function Loading({ show }) {
  const [loading, setLoading] = useState(show);
  useEffect(() => {
    const loading = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(loading);
  }, []);
  return (
    <div className={`loading ${loading ? "" : "loading_hidden"}`}>
      <div className="spinner-container">
        <lottie-player
          src="https://assets10.lottiefiles.com/packages/lf20_USXu1l.json"
          background="transparent"
          speed="1"
          style={{ width: "300px", height: "300px" }}
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
}
