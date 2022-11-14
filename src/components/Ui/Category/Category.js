import React from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import CategoryImage1 from "../../../assets/images/category-01.png";
import CategoryImage2 from "../../../assets/images/category-02.png";
import CategoryImage3 from "../../../assets/images/category-03.png";
import CategoryImage4 from "../../../assets/images/category-04.png";

import "../../../styles/category.css";
const category = [
  {
    display: "Fast food",
    displayAr: "الطعام السريع",
    urlImg: CategoryImage1,
  },
  {
    display: "Pizza",
    displayAr: "بيتزا",
    urlImg: CategoryImage2,
  },
  {
    display: "Asian food",
    displayAr: "طعام اسيوي",
    urlImg: CategoryImage3,
  },
  {
    display: "Row meat",
    displayAr: "شرائح اللحم",
    urlImg: CategoryImage4,
  },
];
export default function Category() {
  const { lang } = useSelector((state) => state.lang);
  return (
    <Container>
      <Row>
        {category.map((item, ind) => (
          <Col lg="3" xs="12" sm="6" key={ind}>
            <div className="category_item d-flex align-items-center gap-3 mt-4">
              <div className="category_image">
                <img src={item.urlImg} alt="category item" />
              </div>
              <h6 className="category_name">
                {lang === "en" ? item.display : item.displayAr}
              </h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
