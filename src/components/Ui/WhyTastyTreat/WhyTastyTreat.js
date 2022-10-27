import React from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import whyImage from "../../../assets/images/location.png";

const list = [
  {
    content: "Fresh and tasty foods",
  },
  {
    content: "Quality support",
  },
  {
    content: "Order from any location",
  },
];

export default function WhyTastyTreat() {
  return (
    <Container>
      <Row>
        <Col lg="6">
          <img src={whyImage} alt="why-tasty" className="img-fluid" />
        </Col>
        <Col lg="6">
          <div className="why_tasty-treat">
            <h2 className="tasty_treat-title mb-4">
              Why <span>Tasty Treat?</span>
            </h2>
            <p className="tasty_treat-des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              quibusdam ipsam est, molestias officia quod alias vel.
              Accusantium, eveniet! Ipsum dolor ipsam quis quas soluta
              praesentium ut reprehenderit eum. Consequatur.
            </p>
            <ListGroup className="mt-2">
              {list.map((listItem, ind) => (
                <ListGroupItem className="border-0 ps-0 " key={ind}>
                  <p className="choose_us-title d-flex align-items-center gap-2  ">
                    <i className="ri-checkbox-circle-line"></i>
                    {listItem.content}
                  </p>
                  <p className="choose_us-des">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    corporis rem cumque
                  </p>
                </ListGroupItem>
              ))}
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
