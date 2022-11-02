import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { findFood, getAllFood } from "../../../store/allFood";
import Helmet from "../../Helmet/Helmet";
import CommonSection from "../CommonSection/CommonSection";
import FoodItem from "./FoodItem";
import ProductContent from "./ProductContent";
import "../../../styles/food-details.css";
import DesAndRev from "./DesAndRev";

export default function FoodDetailsLayout() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    allFood,
    foodDetail: [foodItem],
  } = useSelector((state) => state.allFood);

  useEffect(() => {
    !allFood.length && dispatch(getAllFood());
  }, [dispatch, allFood.length]);

  useEffect(() => {
    dispatch(findFood(id));
  }, [id, dispatch, allFood]);

  return (
    <Helmet title={foodItem?.title}>
      <CommonSection
        title={foodItem?.title}
        background="../images/banner.jpg"
      />

      <section>
        <Container>
          <Row>
            <FoodItem foodItem={foodItem} />
            <ProductContent foodItem={foodItem} />
            <DesAndRev foodItem={foodItem} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}
