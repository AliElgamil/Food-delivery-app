import React from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryImage1 from "../../../assets/images/category-01.png";
import CategoryImage2 from "../../../assets/images/category-02.png";
import CategoryImage3 from "../../../assets/images/category-03.png";
import CategoryImage4 from "../../../assets/images/category-04.png";

import "../../../styles/category.css";
const category = [
  {
    display: "Fast food",
    urlImg: CategoryImage1,
  },
  {
    display: "Pizza",
    urlImg: CategoryImage2,
  },
  {
    display: "Asian food",
    urlImg: CategoryImage3,
  },
  {
    display: "Row meat",
    urlImg: CategoryImage4,
  },
];
export default function Category() {
  return (
    <Container>
      <Row>
        {category.map((item, ind) => (
          <Col lg="3" xs="12" sm="6" key={ind}>
            <div className="category_item d-flex align-items-center gap-3 mt-4">
              <div className="category_image">
                <img src={item.urlImg} alt="category item" />
              </div>
              <h6 className="category_name">{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
