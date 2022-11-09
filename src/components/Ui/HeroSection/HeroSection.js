import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import heroImage from "../../../assets/images/hero.png";

export default function HeroSection() {
  return (
    <Container>
      <Row>
        <Col md="6">
          <div className="hero_content">
            <h5 className="mb-3">Easy way to make an order</h5>
            <h1 className="mb-4 hero_title">
              <span>HUNGRY?</span>
              Just wait <br /> food at
              <span> your door</span>
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              quibusdam repellat cum maiores vero rerum, iure inventore deserunt
            </p>
            <div className="hero_buttons d-flex align-items-center gap-5 mt-4">
              <button className="order_button d-flex align-items-center justify-content-between">
                Order now <i className="ri-arrow-right-s-line"></i>
              </button>
              <Link to="/all-foods" className="all_foods-btn">
                See all foods
              </Link>
            </div>

            <div className="hero_service d-flex align-items-center gap-5 mt-5">
              <p className="d-flex align-items-center gap-2">
                <span className="shipping_icon">
                  <i className="ri-car-line"></i>
                </span>
                No shipping charge
              </p>
              <p className="d-flex align-items-center gap-2">
                <span className="shipping_icon">
                  <i className="ri-shield-check-line"></i>
                </span>
                100% secure checkout
              </p>
            </div>
          </div>
        </Col>
        <Col md="6">
          <div className="hero_image">
            <img src={heroImage} alt="hero" className="img-fluid" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
