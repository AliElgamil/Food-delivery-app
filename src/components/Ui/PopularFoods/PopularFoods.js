import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import foodCategoryImg1 from "../../../assets/images/hamburger.png";
import foodCategoryImg2 from "../../../assets/images/pizza.png";
import foodCategoryImg3 from "../../../assets/images/bread.png";
import { useDispatch, useSelector } from "react-redux";
import { filterFood, getData } from "../../../store/allFood";
import ProductCards from "../ProductCards/ProductCards";
import GetData from "../../../Hooks/GetData";

const text = {
  title: "Popular Foods",
  titleAr: "الاطعمة المميزة",
  category1: "All",
  category2: "Burger",
  category3: "Pizza",
  category4: "Bread",
  categoryAr1: "الكل",
  categoryAr2: "برجر",
  categoryAr3: "بيتزا",
  categoryAr4: "خبز",
};
export default function PopularFoods() {
  const dispatch = useDispatch();
  const { foods, category } = useSelector((state) => state.allFood);
  const { lang } = useSelector((state) => state.lang);
  const data = GetData();

  useEffect(() => {
    !foods.length && dispatch(getData(data));
  }, [dispatch, foods.length, data]);

  return (
    <Container>
      <Row>
        <Col sm="12">
          <h2 className="text-center">
            {lang === "en" ? text.title : text.titleAr}
          </h2>
        </Col>

        <Col sm="12">
          <div className="food_category mt-5 rounded-3 p-2 d-flex justify-content-center align-items-center g-5">
            <button
              className={`btn ${category === "all" ? "active" : ""}`}
              onClick={() => dispatch(filterFood("all"))}
            >
              {lang === "en" ? text.category1 : text.categoryAr1}
            </button>
            <button
              className={`btn d-flex align-items-center gap-2 ${
                category === "Burger" ? "active" : ""
              }`}
              onClick={() => dispatch(filterFood("Burger"))}
            >
              <img src={foodCategoryImg1} alt="food_category" />
              {lang === "en" ? text.category2 : text.categoryAr2}
            </button>
            <button
              className={`btn d-flex align-items-center gap-2 ${
                category === "Pizza" ? "active" : ""
              }`}
              onClick={() => dispatch(filterFood("Pizza"))}
            >
              <img src={foodCategoryImg2} alt="food_category" />
              {lang === "en" ? text.category3 : text.categoryAr3}
            </button>
            <button
              className={`btn d-flex align-items-center gap-2 ${
                category === "Bread" ? "active" : ""
              }`}
              onClick={() => dispatch(filterFood("Bread"))}
            >
              <img src={foodCategoryImg3} alt="food_category" />
              {lang === "en" ? text.category4 : text.categoryAr4}
            </button>
          </div>
        </Col>

        {foods.map((item) => (
          <Col xl="3" lg="4" md="6" className="mt-5" key={item.id}>
            <ProductCards item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
