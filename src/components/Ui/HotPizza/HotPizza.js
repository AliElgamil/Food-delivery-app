import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import ProductCards from "../ProductCards/ProductCards";

const text = {
  title: "Hot Pizza",
  titleAr: "بيتزا ساخنة",
};

export default function HotPizza() {
  const { allFood } = useSelector((state) => state.allFood);
  const { lang } = useSelector((state) => state.lang);
  const [pizzaHotSlices, setPizzaHotSlices] = useState([]);

  useEffect(() => {
    setPizzaHotSlices(allFood.filter((item) => item.category === "Pizza"));
  }, [allFood]);
  return (
    <Container>
      <div className="section_title text-center">
        <h2>{lang === "en" ? text.title : text.titleAr}</h2>
      </div>
      <Row>
        {pizzaHotSlices.map(
          (item, ind) =>
            ind <= 3 && (
              <Col xl="3" lg="4" md="6" className="mt-5" key={item.id}>
                <ProductCards item={item} />
              </Col>
            )
        )}
      </Row>
    </Container>
  );
}
