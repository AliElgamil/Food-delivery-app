import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { findFood, getAllFood2 } from "../../../store/allFood";
import Helmet from "../../Helmet/Helmet";
import CommonSection from "../CommonSection/CommonSection";
export default function FoodDetailsLayout() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    allFood,
    foodDetail: [foodItem],
  } = useSelector((state) => state.allFood);
  const [mainImg, setMainImg] = useState(foodItem?.image02);

  useEffect(() => {
    !allFood.length && dispatch(getAllFood2());
  }, [dispatch]);

  useEffect(() => {
    dispatch(findFood(id));
  }, [id, dispatch, allFood]);

  const toggleImgHandler = (url) => {
    setMainImg(url);
  };
  console.log(foodItem);
  return (
    <Helmet title={foodItem?.title}>
      <CommonSection
        title={foodItem?.title}
        background="../images/banner.jpg"
      />

      <section>
        <Container>
          <Row>
            <Col md="2">
              <div className="product_img">
                <div
                  className="img_item"
                  onClick={() => toggleImgHandler(foodItem?.image02)}
                >
                  <img
                    src={foodItem?.image02}
                    alt={foodItem.title}
                    className="img-fluid"
                  />
                </div>
                <div
                  className="img_item"
                  onClick={() => toggleImgHandler(foodItem?.image03)}
                >
                  <img
                    src={foodItem?.image03}
                    alt={foodItem.title}
                    className="img-fluid"
                  />
                </div>
                <div
                  className="img_item"
                  onClick={() => toggleImgHandler(foodItem?.image04)}
                >
                  <img
                    src={foodItem?.image04}
                    alt={foodItem.title}
                    className="img-fluid"
                  />
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="product_main-img d-flex align-items-center h-100">
                <img src={mainImg} alt={foodItem.title} className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}
