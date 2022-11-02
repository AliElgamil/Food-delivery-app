import React from "react";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ImageLoading({ alt, src, addClass, center }) {
  const [loadingImage, setLoadingImage] = useState(true);

  return (
    <div
      className={`product_img ${loadingImage ? "loading" : ""} ${
        center ? "text-center" : ""
      }`}
    >
      <LazyLoadImage
        alt={alt}
        src={src}
        afterLoad={() => setLoadingImage(false)}
        effect="blur"
        className={`img-fluid  ${addClass}`}
      />
    </div>
  );
}
