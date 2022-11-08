import React, { useState, useEffect } from "react";
import { Col } from "reactstrap";
import ImageLoading from "../../ImageLoading";

export default function FoodItem({ foodItem }) {
  const [mainImg, setMainImg] = useState();

  useEffect(() => {
    setMainImg(foodItem?.image01);
    // window.scrollTo(0, 0);
  }, [foodItem]);

  const toggleImgHandler = (url) => {
    setMainImg(url);
  };

  return (
    <>
      <Col lg="2">
        <div className="product_image gap-3 d-flex flex-lg-column justify-content-center">
          <div
            className="img_item d-flex"
            onClick={() => toggleImgHandler(foodItem?.image01)}
          >
            <ImageLoading
              src={foodItem?.image01}
              alt={foodItem?.title}
              addClass={["w-50"]}
              center
            />
          </div>
          <div
            className="img_item d-flex"
            onClick={() => toggleImgHandler(foodItem?.image02)}
          >
            <ImageLoading
              src={foodItem?.image02}
              alt={foodItem?.title}
              addClass={["w-50"]}
              center
            />
          </div>
          <div
            className="img_item d-flex"
            onClick={() => toggleImgHandler(foodItem?.image03)}
          >
            <ImageLoading
              src={foodItem?.image03}
              alt={foodItem?.title}
              addClass={["w-50"]}
              center
            />
          </div>
        </div>
      </Col>
      <Col lg="3" className="my-5 mt-lg-0">
        <div className="product_main-img d-flex align-items-center h-100 justify-content-center">
          <ImageLoading src={mainImg} alt={foodItem?.title} />
        </div>
      </Col>
    </>
  );
}
