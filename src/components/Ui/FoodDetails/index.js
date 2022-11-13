import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { findFood, getAllFood } from "../../../store/allFood";
import Helmet from "../../Helmet/Helmet";
import CommonSection from "../CommonSection/CommonSection";
import FoodItem from "./FoodItem";
import ProductContent from "./ProductContent";
import "../../../styles/food-details.css";
import DesAndRev from "./DesAndRev";
import AlsoLike from "./AlsoLike";

export default function FoodDetailsLayout() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    allFood,
    foodDetail: [foodItem],
  } = useSelector((state) => state.allFood);

  useEffect(() => {
    !allFood.length && dispatch(getAllFood());
    dispatch(findFood(id));
  }, [dispatch, allFood.length, id]);

  useEffect(() => {
    if (foodItem?.notFound) navigate("/notFounded");
  }, [foodItem, navigate]);
  useEffect(() => window.scrollTo(0, 0), [id]);

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
          <AlsoLike />
        </Container>
      </section>
    </Helmet>
  );
}
